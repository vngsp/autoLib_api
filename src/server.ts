import express from 'express'
import helmet from 'helmet'

const server = express();

server.use(express.json());
server.use(helmet());

server.listen(1000, () => {
    console.log('Server on at http://localhost:1000');
})