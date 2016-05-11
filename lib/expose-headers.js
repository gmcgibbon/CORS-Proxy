module.exports = function exposeHeaders (request, reply) {

  var headers  = process.env.CORSPROXY_EXPOSE
  var response = request.response.isBoom ?
    request.response.output : request.response

  if (response.headers['access-control-expose-headers']) {
    response.headers['access-control-expose-headers'] +=  ', ' + headers
  } else {
    response.headers['access-control-expose-headers'] = headers
  }

  reply.continue()
}
