let receta = {};

function ejercicio3() {
  receta.nombre = "Sandwich";
  receta.ingredientes = [];
  receta.ingredientes.push({ nombre: "pan", cantidad: 2 });
  receta.ingredientes.push({ nombre: "queso", cantidad: 1 });
  console.log(receta.ingredientes[0].nombre);
  console.log(
    receta.ingredientes[0].cantidad + receta.ingredientes[1].cantidad
  );
}
ejercicio3();
console.log(receta);
