import { Application } from 'express';
import Comun from './public.routes';

//
export default (app: Application) => {
	app.use('/public', Comun);
};
