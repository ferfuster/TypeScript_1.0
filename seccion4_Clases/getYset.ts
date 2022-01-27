let permiso:boolean=false
class Persona{
    public nombre: string
    constructor(nombre:string){
        this.nombre = nombre
    }

    get getNombre():string{
        return this.nombre
    }
    set setNombre(nombre:string){
        if(permiso){
            this.nombre=nombre
        }else{
            console.log("no tiene permiso");
            
        }
    }
}
const Objeto = new Persona("José")
Objeto.setNombre = "josé"
console.log(Objeto.getNombre);
