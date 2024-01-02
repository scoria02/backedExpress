// modules
import { Request, Response, NextFunction } from 'express';
// scripts
import codes, { errCodes } from './code';

export default (err: any, req: Request, res: Response, next: NextFunction) => {
	if (!err) next();
	// define vars
	const descripts: any = codes;
	const code: number =
		err.code && typeof err.code != 'string' ? err.code : err.Response ? err.Response.status : 500;

	const message = ((): string => {
		if (err.Response) return err.Response.message;
		else if (err.errors) return err.errors.map((err: any) => err.msg).join(', ');
		else if (err.message) return err.message;
		else return err;
	})();
	const code_descript: string = descripts[code] ? descripts[code] : `${code}`;

	// create obj for Response
	const obj = { status: false, message, code, code_descript, path: req.originalUrl, method: req.method };

	// to write Response in the consol
	const length = obj.message.length + obj.code_descript.length + obj.path.length;
	if (length < 80) console.table([obj]);
	else console.log(obj);

	// Response
	res.status(code).json(obj);
};
