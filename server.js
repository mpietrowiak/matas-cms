const { parse } = require('url');

const express = require('express');
const next = require('next');
const jsonServer = require('json-server')

const expressApp = express();

const nextApp = next({ dev: true });
const nextHandle = nextApp.getRequestHandler();

const handleRootRequest = (req, res, next) => {
  const parsedUrl = parse(req.url, true);
  const { pathname, query } = parsedUrl;
  nextHandle(req, res, parsedUrl);
};

nextApp.prepare().then(() => {
  expressApp.use('/api', jsonServer.router('db.json'));
  expressApp.use('/', handleRootRequest);
  expressApp.listen(3000);
});

