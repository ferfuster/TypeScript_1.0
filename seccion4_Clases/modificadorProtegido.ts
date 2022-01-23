class Padre1{
    protected nombre:string

    public constructor(_Nombre:string) {
        this.nombre = _Nombre

    }
}

class Hija extends Padre1{
    public apellido:string

    constructor(_Nombre:string, _Apellido:string) {
        super(_Nombre)
    }
    mostrarNombre():void{
        console.log(this.nombre);
        
    }
}

const objet = new Hija("carla","castillo")