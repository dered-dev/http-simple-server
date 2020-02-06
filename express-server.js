const express = require('express')
const app = express()

app.get('/koders/:id', (request, response) => {
  const id = request.params.id
  response.send(`Koder (${id})`)
})

app.get('/', (request, response) => {
  response.status(200)
  response.send('No eres un Koder')
})
app.get('/jorge', (request, response) => {
  response.status(200)
  response.send('Toma un koder')
})
app.post('/jorge', (request, response) => {
  response.status(200)
  response.send('Creando un koder')
})
app.get('/jorge/name', (request, response) => {
  response.status(200)
  response.send('Jorge Luis')
})
app.get('/middlewares', (request, response, next) => {
  console.log('middleware 1')
  next()
}, (request, response, next) => {
  console.log('middleware 2')
  next()
}, (request, response, next) => {
  console.log('middleware 3')
  response.send('End of middleware')
})
app.all('*', (request, response) => {
  response.status(200)
  response.send('No eres un Koder')
})


app.listen(8080, () => {
  console.log('app listenting')
})