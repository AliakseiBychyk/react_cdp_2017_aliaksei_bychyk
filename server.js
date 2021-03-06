import express from 'express';
import config from './config';
import apiRouter from './api';

const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content: 'React CDP 2017: Express and EJS'
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));


server.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
});
