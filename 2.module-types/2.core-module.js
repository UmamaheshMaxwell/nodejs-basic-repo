// Web Server

const http = require("http")

http.createServer((request, response) => {
    if(request.url == "/") {
        console.log(request.url)
    } else if(request.url == "/employee"){
        console.log('Employee url is called')
    }

    response.writeHead(200, {'content-type': 'text/html'})
    response.end("<b>Hello World<b>")
}).listen(8080)