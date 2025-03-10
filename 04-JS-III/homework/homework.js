// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  
  return array[0]
}
devolverPrimerElemento([10,20,30,40,50,60,]);


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
 let ultimo = array[array.length-1]
  return ultimo;
}
devolverUltimoElemento([10,20,30,40,50,60]);



function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}
obtenerLargoDelArray([10,20,30,40,50,60,]);


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
 	let suma = [];
  for(i=0; i<array.length; i++){
   suma[i]=array[i]+1;
  } return suma
}
incrementarPorUno([10,20,30,40,50,60])


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento) 
  return array
}
agregarItemAlFinalDelArray([10,20,30,40,50], 60)


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;

}
agregarItemAlComienzoDelArray([20,30,40,50,60], 10)

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
   return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
	for(let i=0; i<array.length; i++){
    if(array[i] === elemento){
      return true;
    } 
    }
  	return false;
  }

arrayContiene([90,80,70,60,50], 70);


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = 0;
  for(i=0; i<numeros.length; i++){
    suma += numeros[i];
  }
   return suma
}
agregarNumeros([1,2,3,4,5,6]);


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let promedio = resultadosTest.length;
  let suma = 0
  for(i=0; i<resultadosTest.length; i++){
    suma += resultadosTest[i];
  } return suma / promedio;
  
}
promedioResultadosTest([5,6,7,7,8,5])


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let maximo = 0;
   for(let n=0; n<numeros.length; n++){
     if (maximo < numeros[n]){
       maximo = numeros[n];
     }
  }
  return maximo;
}
numeroMasGrande([10,20,30,40,50,60,90]);



function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  if(arguments.length < 1) return 0;
  var total = 1;
  for(var i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
  }
  return total;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
  let elementos = 0;
  for (let i = 0; i < arreglo.length ; i++) {
    if(arreglo[i] > 18){
      elementos++
    }
  }
  return elementos
}
cuentoElementos([10,20,30,40,50,60])

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia === 1 || numeroDeDia === 7 ){
    return "Es fin de semana";
  }
  return "Es dia Laboral";
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var long = n.toString();
  if(long.charAt(0) === '9'){
    return true;
  } 
    return false;
}



function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (i=0; i<arreglo.length; i++){
    if(arreglo[i] === arreglo[i+1]){
      return true;
    }else{
      return false
    }
  }
} 
todosIguales([10,10,10,10,10])


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArr = [];
  for( i=0; i<array.length; i++){
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      nuevoArr.push(array[i]);
    }
  }
    
    if(nuevoArr.length < 3){
      return "No se encontraron los meses pedidos";
    }else{
      return nuevoArr;
      
    }
  }



function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArr = [];
  for(i=0; i<array.length; i++){
    if(array[i] > 100){
      nuevoArr.push(array[i])
    }
  }
  return nuevoArr;
}
mayorACien([60,50,24,80,110,100,152,200])


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    suma = suma + 2;
    if(suma === i) break;
    else {
      array.push(suma);
    }
  }
  if(i < 10) {
    return 'Se interrumpió la ejecución';
  }
  else {
      return array;
  }
}breakStatement(2);

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    if(i === 5) continue;
    else {
      suma = suma + 2;
      array.push(suma);
    }
  }
  return array;
}continueStatement(2);


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
