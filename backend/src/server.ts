import express from 'express';
import 'express-async-errors';
import './database/connection';
import routes from './routes';
import path from 'path';
import errorHandler from './errors/handler';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

// --transpile-only -> faz o transpile sem verificar os tipos
// --ignore-watch -> ignora a transpilação em determinado diretório
// ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts


app.listen(3333);