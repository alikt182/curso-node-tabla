const fs = require('fs');
var colors = require('colors');

const crearArchivo = async ( base = 5 , listar, hasta ) => {

    try {
            let salida = '';
        
            for ( i = 1; i <= hasta ; i++ ) {
                respuesta = i * base ;
                salida += `${ i } x ${ base } = ${ respuesta } \n`;
            }
            
            if ( listar ) {
                console.log('========================='.red);
                console.log(`        TABLA DEL ${ colors.yellow( base ) }      `);
                console.log('========================='.red);
                console.log( salida.yellow );
            }
        
        
        
            fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
        
            return( `tabla-${ base }.txt` );

    } catch ( err ) {

        throw err;
        
    }


}

module.exports = { 
    crearArchivo 
}