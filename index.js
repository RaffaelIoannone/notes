import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import jwt from 'express-jwt';
import fs from 'fs';

import { indexRoutes } from './routes/indexRoutes';
import { noteRoutes } from './routes/noteRoutes';

const app = express();

app.use(express.static(path.resolve('public/html')));
app.use(express.static(path.resolve('public')));

app.use(bodyParser.json());

const publicKey = fs.readFileSync('./config/public.pub');
const privateKey = fs.readFileSync('./config/private.key');
app.set('jwt-secret', privateKey);
app.set('jwt-sign', {
  algorithm: 'RS256',
  expiresIn: '1d',
  audience: 'self',
  issuer: 'note backend',
});

app.get('/', (_req, res) => {
  res.sendFile('/html/index.html', { root: `${__dirname}/public/` });
});

app.use('/', indexRoutes);

// after this middleware a token is required!
app.use(
  jwt({
    algorithm: 'RS256',
    secret: publicKey,
    audience: 'self',
    issuer: 'note backend',
  }),
);

app.use('/notes', noteRoutes);

app.use((err, _req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json('No token / Invalid token provided');
  } else {
    next(err);
  }
});

const hostname = '127.0.0.1';
const port = 3001;
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
