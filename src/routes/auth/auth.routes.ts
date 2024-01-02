import { Router } from 'express';
import { pruebaAuth } from '../../controller/auth';
// import { RegisterData, LoginData, EnvioCorreo, NewPass } from '../../Middlewares/data/auth';
// import { validateRequestSchema } from '../../Middlewares/err/validate-request-schema';

const Auth: Router = Router();
//Router localhost:4000/auth
//
Auth.route('/prueba').get(pruebaAuth);

//
export default Auth;
