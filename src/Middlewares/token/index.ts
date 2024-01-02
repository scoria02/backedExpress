// modules
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import list from './list';
require('dotenv').config();
const Key: string = process.env.SECRET_JWT_SEED!;

/** this middleware is for convert json web token in Objet format */
export default (req: Request, res: Response, next: NextFunction) => {
	try {
		// define array route

		// console.log('Rutas', req.path);
		// rutas publicas
		const result: boolean =
			list.includes(req.baseUrl) || list.includes(req.path.split('/')[1]) || list.includes(req.path.split('/')[2]);

		// use

		// console.log('ruta:', req.path, '--', !result);
		// console.log(req.headers['authorization']);
		if (!result) {
			if (req.headers['authorization']) {
				req.headers['authorization'] = req.headers['authorization'].replace('Bearer ', '');
				const token: string = req.headers['authorization'];

				//console.log(Key);
				// console.log(token);

				try {
					const Resp: any = verify(token, Key);

					// console.log('xd', Resp);

					req.headers.token = Resp;
					req.headers.token_text = token;

					next();
				} catch (err: any) {
					res.status(401).json({ ...err, code: 401 });
				}

				//
			} else throw { status: false, message: 'JWT es requerido', code: 400 };
		} else {
			next();
		}
	} catch (err) {
		console.log('error token', err);
		res.status(400).json(err);
	}
};
