import express from 'express'
import helmet from 'helmet'
import mainRouter from './routes';

const server = express();

server.use(express.json());
server.use(helmet());
server.use('/', mainRouter);

server.listen(1000, () => {
    console.log('Server on at http://localhost:1000');
})