function mostrar(a:string):void{
    console.log(a);   
}

//La misma var se puede def diferente
const  mostrar2 = (a:string):void => console.log(a);

mostrar("Fernando")
mostrar2("Fuster")
