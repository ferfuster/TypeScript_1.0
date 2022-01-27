interface General{
    (nombre:string, apellido:string, edad:number):void
}
let funcionGeneral1:General
funcionGeneral1=function (nombre:string, apellido:string, edad:number):void{
console.log(`${nombre} con el apellido ${apellido} y la edad ${edad}`);
}
funcionGeneral1("manuel", "muños", 37)