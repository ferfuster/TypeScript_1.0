class Animal{
    public nombre:string
    public tamanio:number

    public constructor(_Nombre:string, _Tamanio:number){
        this.nombre=_Nombre
        this.tamanio=_Tamanio
    }
    public moverse():void{
        console.log("Me estoy moviendo");
        
    }
}

const obj = new Animal("Serpiente", 2)

obj.moverse