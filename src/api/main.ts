import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import './middlewares';
import routers from './routers';

app.use(routers);

const port = process.env.API_PORT ?? 4000;

app.listen(port,() => {
    console.log('Servidor executando na porta: ' + port + '!')
});
