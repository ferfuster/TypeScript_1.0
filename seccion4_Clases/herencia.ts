class Padre_{
    nombre:string
    edad:number
    constructor(_Nombre:string, _Edad:number){
        this.nombre=_Nombre
        this.edad=_Edad
    }
    mostrarNombre(){
        console.log(this.nombre);
        
    }
}

class Hijo_ extends Padre_{
    apellido:string
    constructor(_Nombre:string, _Edad:number, _Apellido:string){
        super(_Nombre, _Edad)
        this.apellido=_Apellido
    }
    mostrarNombreDeHijo():void{
        console.log(this.nombre);
        
    }
}
const nuevoHijo = new Hijo_("Fernando", 22, "Castillo")
nuevoHijo.mostrarNombre
nuevoHijo.mostrarNombreDeHijo
nuevoHijo.edad