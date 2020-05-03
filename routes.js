const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index', '/')
routes.add('menu', '/menu/:handle')
routes.add('orders', '/orders/:handle')