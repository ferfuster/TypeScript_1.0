const opcionales = (nombre:string, apellido?:string, edad?:number)=>{
    if _(edad){
        console.log("se llama ${nombre} su apellido es ${apellido} y su edad es ${edad}");        
    }
    console.log("se llama ${nombre} su apellido es ${apellido}");   
}
opcionales("Fernando", "Fuster", 35)