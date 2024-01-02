import { Application } from 'express';

// ruters
import auth from './auth';
import comun from './public';
// import puntoConsulta from './puntoConsulta';
//
export default (app: Application) => {
	auth(app);
	comun(app);
	//
};
