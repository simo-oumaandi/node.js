// My First Server With Node.js 

const http = require('http')

const server = http.createServer((req, res) => {
    res.write('Hello From My First Server With Node.Js')
    res.end
})
server.listen(8080, _ => console.log('Server Started'))