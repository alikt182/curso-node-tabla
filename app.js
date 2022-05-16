const argv = require('./config/yargs');
var colors = require('colors');
const { crearArchivo } = require('./helpers/multiplicar');



console.clear();    

////CAPTURAR VARIABLES DESDE LA CONSOLA OPCION 01 NO RECOMENDADA
////node app --base=7
//console.log( process.argv );
//console.log( argv.b );

console.log('base: yargs', argv.b, argv.l, argv.h );

////CAPTURAR VARIABLES DESDE LA CONSOLA OPCION 01 NO RECOMENDADA
////node app --base=7
// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5 ] = arg3.split('=');
// console.log( arg3 );
// console.log( base );


//const base = 5;

crearArchivo( argv.b , argv.l, argv.h )
        .then( msg => console.log( msg.rainbow ))
        .catch( err => console.log( err ))  

// console.log('=========================');
// console.log(`        TABLA DEL ${ }      `);
// console.log('=========================');

   
//     for ( i = 1; i <= 10 ; i++ ) {
//         respuesta = i * base ;
//         salida += `${ i } x ${ base } = ${ respuesta } \n`;

//     }

// console.log( salida );

// // fs.writeFile( `tabla-${ base }.txt`, salida, (err)=> {
// //     if (err) throw err;
// //     console.log( 'The archive has been created ' );
// // });


// fs.writeFileSync( `tabla-${ base }.txt`, salida );
// console.log( `tabla-${ base }.txt creado` );



//Respuesta Fernando
// const base = 5;
// for ( let i = 1; i <=10; i++ ){
//     console.log(`${ base } x ${ i } =  ${ base * i } ` );
// }