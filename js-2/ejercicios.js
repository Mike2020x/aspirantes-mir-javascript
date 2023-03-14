//Crea una función sum que reciba un arreglo de números y retorne la suma
// de todos los elementos:
// escribe la función sum acá
function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
console.log(sum([1, 2, 3])); // 6
console.log(sum([10, 8, 12, 5])); // 35
console.log(sum([])); // 0

console.log("***************");

//Crea una función max que reciba un arreglo de números y retorne el número máximo
// sin usar el método Math.max de JavaScript.Si el arreglo está vacío debe retornar undefined

function max(array) {
  if (array.length === 0) {
    return undefined;
  }
  let maximo = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maximo) {
      maximo = arr[i];
    }
    return maximo;
  }
}
console.log(max([1, 3, 2])); // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])); // 10
console.log(max([])); // undefined

console.log("***************");

//Crea una función maxIndex que reciba una arreglo de números y retorne el índice donde se
//encuentra el mayor.Si el arreglo está vacío debe retornar - 1.

// escribe la función maxIndex acá
function maxIndex(array) {
  if (array.length === 0) {
    return -1;
  }
  let maximo = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maximo[i]) {
      maximo = arr[i];
    }
    return maximo;
  }
}

console.log(maxIndex([1, 3, 2])); // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])); // 10
console.log(maxIndex([])); // -1

console.log("***************");

function join(arr) {
  let resultado = "";
  for (let i = 0; i < arr.length; i++) {
    resultado += arr[i];
    if (i < arr.length - 1) {
      resultado += " ";
    }
  }
  return resultado;
}

console.log(join(["Hola", "mundo"]));
