const jwt = require('jsonwebtoken');
const secret = 'mySecret';

const isValidUser = (username, password) => {
  return username === 'matas' && password === '123';
}

// hello.js
module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/auth') {
    const { username, password } = req.body;
    if (isValidUser(username, password)) {
      const token = jwt.sign({
        username,
        password,
      }, secret);
      res
        .status(200)
        .send(JSON.stringify({
          token
        })
      return;
    }

    res.status(403);
    res.end();
    return;
  }

  next();
}