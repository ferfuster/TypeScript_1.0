var opcionales = function (nombre, apellido, edad) {
    if (edad) {
        console.log("se llama ".concat(nombre, " su apellido es ").concat(apellido, " y su edad es ").concat(edad));
    }
    console.log("se llama ".concat(nombre, " su apellido es ").concat(apellido));
};
opcionales("Fernando", "Fuster", 35);
