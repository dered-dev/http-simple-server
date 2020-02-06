const http = require('http')
const server = http.createServer((request, response) => {
  console.log('URL: ' + request.url)
  console.log('Method: ' + request.method)

  if (request.url === '/jorge') {
    if (request.method === 'GET') {
      response.write('Toma un koder')
      return
    }
    if (request.method === 'POST') {
      response.write('Creando un koder')
    }
  } else {
    response.write('No eres un Koder')
  }

  response.end()
})

server.listen(8080, () => {
  console.log('server is listening in localhost:8080')
})