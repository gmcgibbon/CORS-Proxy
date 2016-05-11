var addCorsHeaders    = require('hapi-cors-headers'),
    addExposedHeaders = require('./lib/expose-headers')
var pkg = require('./package.json')

function corsPlugin (server, options, next) {
  server.ext('onPreResponse', addCorsHeaders)
  server.ext('onPreResponse', addExposedHeaders)
  next()
}


corsPlugin.attributes = {
  pkg: pkg
}
module.exports = corsPlugin
