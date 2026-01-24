import express from 'express'
import helmet from 'helmet'
import mainRouter from './routes';
import { setupSwagger } from './config/swagger';
import cors from 'cors';

const server = express();

server.use(express.json());
server.use(helmet());
server.use('/', mainRouter);
server.use(cors({
    origin: [
        'http://localhost:3000',
    ],
    methods: ['GET']
}))

setupSwagger(server);

server.listen(1000, () => {
    console.log('API documentation on https://autolib-api.onrender.com/docs/');
})