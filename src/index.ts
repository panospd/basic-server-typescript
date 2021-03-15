import bodyParser from 'body-parser';
import express from 'express';
import cookieSession from 'cookie-session';

import './controllers/LoginController';
import './controllers/RouteController';
import { AppRouter } from './AppRouter';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['panospd'] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
