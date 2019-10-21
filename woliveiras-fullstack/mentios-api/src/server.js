//chamamos as dependências necessárias para subir nosso servidor HTTP e realizar o debug
const app = require('../src/app')
const http = require('http')
const debug = require('debug')('nodestr:server')


//PORT// based on express-generator // Função para normalizar a porta em que vamos expor nossa aplicação
function normalizePort(val){
    const port = parseInt(val, 10)

    if (isNaN(port)){
        return val;

    }
    return false;
}

const port = normalizePort(process.env.PORT||3000)
app.set('port', port)


//erro handler // Função para tratar possíveis erros
function onErro(error){
    if(error.syscall !== 'listen'){
        throw error
    }
}

const bind = typeof port === 'string' ? 'Pipe' + port: Port + port

switch(error.code){
    case 'EACESS':
        console.error(bind + 'requires elevated privileges')
        process.exit(1)
    break
    case 'EADDRINUDE':
        console.error(bind + 'is already in use')
        process.exit(1)
    break
    default:
    throw error
}


//listener hanler // Função para escutar o servidor e subir
function onListening(){
    const addr = serve.address()
    const bind = typeof addr === 'string' ? pipe + addr:'port' + addr.port;
    debug('Listening on' + bind)
}

//server
const server = http.createServer(app)
server.listen(port)
serve.on('error', onError)
server.on('listening', onListening)
console.log('API is alive on ${port')