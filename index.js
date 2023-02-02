const http = require("http")

http.createServer(function (request, response) {
    response.write("hello world")
    response.end()
}).listen(80)

console.log("servidor escuchando en el puerto localhost:3000")