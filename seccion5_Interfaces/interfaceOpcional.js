var persona = { altura: 2, peso: 120 };
function MostrarPersona(persona) {
    var madiaPeso = persona.altura / persona.peso;
    if (persona.nombre_) {
        return "".concat(persona.nombre_, " tiene una media de ").concat(madiaPeso);
    }
    else {
        return "NN tiene una media de ".concat(madiaPeso);
    }
}
console.log(MostrarPersona(persona));
