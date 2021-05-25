const argv = require('yargs')
            .options({

                'b':{
                    alias:'base',
                    describe:'base a multiplicar',
                    type:'number',
                    demandOption:true
                },
                'l':{
                    alias:'listar',
                    describe:'Mostrar tabla de multiplicar',
                    type:'boolean',
                    default:false
                },
                'h':{
                    alias:'hasta',
                    describe:'Limite de resultados',
                    type:'number',
                    default:10
                }
            })
            .check((argv,options)=>{

                if( isNaN(argv.b)){
                    throw "La base debe ser un numero"
                }else{
                    return true
                }
            })
            .argv

module.exports = argv