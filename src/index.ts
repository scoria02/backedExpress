import express, { Application } from 'express';
import dotenv from 'dotenv';
import { posRoutes, preRoutes } from './Middlewares';
import routes from './routes';

//For env File
dotenv.config();
const app: Application = express();

// middleware preRoutes
app.use(express.static(__dirname + '/public'));
app.use(express.json());

// Routes
preRoutes(app);
routes(app);
posRoutes(app);
const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`Server is Fire at http://localhost:${port}`);
});
