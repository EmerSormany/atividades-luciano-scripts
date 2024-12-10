const { readFile } = require('fs')
const http = require('http')
const moment = require('moment')
const path = require('path')

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url)
    let extname = path.extname(filePath)

    let contentType = 'text/html'
    switch (extname) {
        case '.css':
            contentType = 'text/css'
            break;
        case '.js':
            contentType = 'application/javascript'
            break
        case '.png':
            contentType = 'image/png'
            break
        default:
            break;
    }

    readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, {'content-type': 'text/html'})
                res.end('<h1>Arquivo não encontrado</h1>')
            } else {
                res.writeHead(500, {'content-type': 'text/html'})
                res.end('<h1>Erro no Servidor</h1>')
            }
        } else {
            res.writeHead(200, {'content-type': 'text/html'})
            res.end(content)
        }
    })
})

server.listen(3000, ()=>{
    console.log(moment().format('DD/MM/YYYY HH:mm'));
    console.log('http://localhost:3000');    
})



