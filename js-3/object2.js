let persona = {
  nombre: "Michael",
  edad: 25,
  ciudad: "Pereira",
  profesion: "Desarrollador de Software",
};

function ejercicio2() {
  console.log(persona);
  function presentacion(obj) {
    return `${obj.nombre},${obj.edad},${obj.ciudad}`;
  }
  let mensaje = presentacion(persona);
  console.log(mensaje);
  persona.hobbies = ["nadar", "cocinar", "leer", "peliculas"];
  console.log(persona.hobbies);

  for (let i = 0; i < persona.hobbies.length; i++) {
    const hobbies = persona.hobbies[i];
    console.log(hobbies);
  }
}

ejercicio2();
