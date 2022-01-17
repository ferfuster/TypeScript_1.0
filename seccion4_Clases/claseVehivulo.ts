class Vehiculo{
    marca:string
    fecha:string
    puertas:number

constructor (_Marca:string, _Fecha:string, _Puertas:number ){
    this.marca=_Marca
    this.fecha=_Fecha
    this.puertas=_Puertas

}
acelerar():void{
    console.log("cuidado la velocidad");
}
frenar():void{
    console.log("Pisar el freno");    
}
}
const coche = new Vehiculo("FORD","12/7/2019",4)
coche.marca
coche.fecha
console.log(coche.marca);
coche.acelerar()
