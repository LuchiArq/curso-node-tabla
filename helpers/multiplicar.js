const fs = require('fs');
const colors = require('colors')

const archivoMultiplicar = (base,hasta,listar) =>{
    
    return new Promise((res,rej)=>{


        if(typeof base === 'number')
        {
            let tabla=''
            let tablaConsola = `\n${'================'.rainbow}\n${`Tabla del ${base}`.blue}\n${'================'.rainbow}\n`
            for(let i = 1 ; i<=hasta; i++){
                tabla +=`${base} x ${i} = ${base*i}\n`
                tablaConsola +=`${base} ${'x'.red} ${i} ${'='.green} ${base*i}\n`

            }
            fs.writeFile(`./salida/Tabla-${base}.txt`,tabla, (err)=>{
                if(err) return console.log(err)
            })
            listar ? res(tablaConsola) : res(`Tabla del ${base} creada`)
        }else{
            rej('El paramaetro debe ser un numero')
        }
    })

}

module.exports={
    archivoMultiplicar
}