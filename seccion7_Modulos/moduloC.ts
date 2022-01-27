class Personita{
    nombre:string
    edad:number
    altura:number

    constructor (nombre,edad,altura){
    this.nombre = nombre
    this.altura = altura
    this.edad = edad
    }
    mostrar():void{
        console.log(this.nombre);
        
    }

}

export default Personita;
