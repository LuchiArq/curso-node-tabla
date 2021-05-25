const {archivoMultiplicar} = require('./helpers/multiplicar.js') 
const argv = require('./config/yargs')

console.clear()

let {base,listar,hasta} = argv

console.log(argv)


archivoMultiplicar(base,hasta,listar)
    .then(archivo => console.log(archivo))
    .catch(err=>console.log('ERROR!!', err))  