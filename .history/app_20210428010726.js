// My First Server With Node.js 

const http = require('http')

const server = http.createServer((req, res) => {
    res.write('Hello From My First Server With Node.j')
})