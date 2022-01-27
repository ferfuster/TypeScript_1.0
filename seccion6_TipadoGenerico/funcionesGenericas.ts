function mostrar(dato:string):String{
    return dato
}
console.log(mostrar("Manuel"));

//una funcion generica que devuelve un dato generico
function mostrarGenerica<T>(dato:T):T{
    return dato
}

console.log(mostrarGenerica("José"));

