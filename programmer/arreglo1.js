//arreglo nombres
const datos=[1,"chelo","milo","david","gonzalo"]
var size=datos.length

console.log(size);
//mostrar posición 1
console.log(datos[3]);

function hola(){
    // console.log(process.argv);
  console.log("hola desde la funcion : " + process.argv[2])
}
hola()