class Animal1{
 
//Privado solo es accesible dentro de la clase donde se define
    private nombre:string
    private tamanio:number

    public constructor(_Nombre:string, _Tamanio:number) 
    {
    this.nombre =_Nombre
    this.tamanio =_Tamanio    
    }

    public moverse():void{
        console.log("Me estoy moviendo");
    }
}

const obj = new Animal1("serpiente", 2)

class Conectar{
    private url:string
}
const ob = new Conectar()