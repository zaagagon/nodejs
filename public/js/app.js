//funcion timer
/*setTimeout(()=>{

})*/

setTimeout(()=>{
    document.getElementById('title')
    .innerHTML='Texto modificado por javascript en etiqueta h1'
    //document.writeln("probrando script");
},4000);//4 segundos
//repasar otras funciones
document.writeln("script ok");//escribimos directamente en el html
//vamos a crear una etiqueta h1 con createelement
document.createElement('<h1>etiqueta probada</h1>');

//revisar este ejemplo
document.body('<p> probando parrafo en el body</p>')

document.createComment('comentarios para mi');