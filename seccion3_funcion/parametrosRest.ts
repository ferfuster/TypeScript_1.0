const cartaPostres = (postre:string, ...frutas:string[]):void=>{
    console.log(`El postre es ${postre} y tiene ${frutas}`);
    
}
cartaPostres("postre1", "naranja", "platano","frutilla")