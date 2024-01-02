import { Router } from 'express';
import { GetConsulta, pruebaPublic } from '../../controller/public';

const Comun: Router = Router();
//Router localhost:4000/comun
Comun.route('/prueba').get(pruebaPublic);
Comun.route('/consulta').get(GetConsulta);

export default Comun;
