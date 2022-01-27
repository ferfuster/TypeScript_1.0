interface Persona{
    altura:number
    peso:number
    nombre_?: string
}
let persona ={altura:2 , peso:120}

function MostrarPersona(persona:Persona):string{
    let madiaPeso:number = persona.altura/persona.peso
    if (persona.nombre_){
        return `${persona.nombre_} tiene una media de ${madiaPeso}`
    }else{
        return `NN tiene una media de ${madiaPeso}`
    }
}
console.log(MostrarPersona(persona));
