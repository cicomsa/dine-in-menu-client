const express = require('express');
const next = require('next');
const routes = require('./routes')

const port = 3001;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

app.prepare()
  .then(() => {
    const server = express();

    server.get('/orders', (req, res) => {
      return app.render(req, res, '/orders')
    })

    server.get('/orders/:handle', (req, res) => {
      return app.render(req, res, '/orders', { handle: req.params.handle })
    })

    server.get('/menu', (req, res) => {
      return app.render(req, res, '/menu')
    })

    server.get('/menu/:handle', (req, res) => {
      return app.render(req, res, '/menu', { handle: req.params.handle })
    })

    server.get('*', (req, res) => {
      return handle(req, res);
    })

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`Ready on http://localhost:${port}`);
    })
  });