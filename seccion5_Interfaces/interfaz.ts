interface Persona{
    //Atributos
    nombre:string
    apellido:string
}
function caminar(persona:Persona):void{
    console.log("la persona "+ persona. apellido + " esta caminando");
    
}
let nuevaPersona:Persona ={nombre:"josé", apellido:"fuster"}
caminar(nuevaPersona)