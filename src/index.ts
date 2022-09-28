// const http = require('http');
// const { listen } = require('./server');

// const server = http.createServer((async (req, res) =>{
// console.log(req);
// console.log(res);
// if (req.method === 'GET' && req.url === '/') {
//   console.log('hello from server');
//   res.end()
// }
// })

// server.createServerlisten(3001, () => {
//   console.log('server on http://localhost:3001');
// })

// app.listen(3001, () => {
//   console.log('hello on http local host');
// })

import * as dotenv from 'dotenv'
dotenv.config()

import app from './server'

app.listen(3001, () => {
  console.log('hello on http://localhost:3001')
})

