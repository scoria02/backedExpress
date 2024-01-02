import { NextFunction, Request, Response } from 'express';
import { Api } from '../../interfaces';
import { Consulta } from '../../db/consulta';

export const pruebaPublic = async (
	req: Request<Api.params, Api.Resp>,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		console.log('AQUI en Login');
		// console.log('REQ', Object.keys(req));

		res.status(200).json({
			ok: true,
			hola: 'Como estan armando todos ?',
			message: 'Usuario exito',
		});
	} catch (err) {
		next(err);
	}
};
export const GetConsulta = async (
	req: Request<Api.params, Api.Resp>,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		res.json({
			ok: true,
			Consulta,
			message: 'Consulta de productos',
		});
	} catch (err) {
		next(err);
	}
};
