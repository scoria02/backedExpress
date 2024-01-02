import { NextFunction, Request, Response } from 'express';
import { Api } from '../../interfaces';

export const pruebaAuth = async (
	req: Request<Api.params, Api.Resp>,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		console.log('AQUI en Login');

		res.status(200).json({
			ok: true,
			hola: 'Como estan armando todos ?',
			message: 'Usuario exito',
		});
	} catch (err) {
		next(err);
	}
};
