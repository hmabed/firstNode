let http=require('http')
let fs=require('fs')
let url=require('url')
let server =http.createServer()
server.on('request',function(request, response){
    response.writeHead(200)
    let query=url.parse(request.url,true).query
    response.end("Bonjour " + query.name)
    /*fs.readFile('index.html',(err,data) => {
        if(err) {
            response.writeHead(404)
            response.end("not exist")
        } else {
            response.writeHead(200,{'Content-type': 'text/html; charset=utf-8'})
            response.end(data)
        }
    })*/
})

server.listen(8000)