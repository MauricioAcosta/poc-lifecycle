import cookieParser from 'cookie-parser';
import express from 'express';
import actuator from 'express-actuator';
import logger from 'morgan';
import path from 'path';
import config from './config';
import exampleController from './controllers/example.controller';

const app = express(); // NOSONAR
const apiPath = config.API_PATH; // NOSONAR
const fullApiPath = `${apiPath}/V1/hello`;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../static')));
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // NOSONAR
  res.header('Access-Control-Allow-Headers', '*'); // NOSONAR
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); // NOSONAR
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(
  actuator({
    basePath: '/management',
  }),
);

app.use(fullApiPath, exampleController);

export default app;
