import express from 'express'
import helmet from 'helmet'
import mainRouter from './routes';
import { setupSwagger } from './config/swagger';

const server = express();

server.use(express.json());
server.use(helmet());
server.use('/', mainRouter);

setupSwagger(server);

server.listen(1000, () => {
    console.log('Server on at http://localhost:1000');
})