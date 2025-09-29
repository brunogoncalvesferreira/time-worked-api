import { app } from './app.js'

app
  .listen({
    port: 8080,
  })
  .then(() => console.log('HTTP server running'))
