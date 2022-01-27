const Mostrar = (nombre:string, apellido:string, edad:number = 35) => {
    return `se llama ${nombre} se apellida ${apellido} y tiene ${edad} años`
}
console.log(Mostrar("Fernando", "Fuster", 33));
console.log(Mostrar("Carla", "castillo", 32));

