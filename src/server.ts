import express from 'express'
import helmet from 'helmet'
import mainRouter from './routes';
import { setupSwagger } from './config/swagger';
import cors from 'cors';

const server = express();
server.use(cors({
    origin: [
        'http://localhost:3000',
        'https://autolib-ojyj.vercel.app/?_vercel_share=LWzQFQanvIszuAqX5Q0R2KCgRVWdsPzy'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

server.use(express.json());
server.use(helmet());
server.use('/', mainRouter);

setupSwagger(server);

server.listen(1000, () => {
    console.log('API documentation on https://autolib-api.onrender.com/docs/');
})