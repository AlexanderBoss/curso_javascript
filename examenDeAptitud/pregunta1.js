console.log("---------------------")
////////////////////////////////////////////////////////////////////////
console.log("pregunta 1")
//creamos una const funcion funcion cantidad 
const functionCantidad=(cad)=>{        //declaramos un contador para este contexto llamado contador en 0
    let contador = 0;                    
    cad.split("").forEach(element => { //recortamos cada cadena y con un for each para cada elemento de cad
       if(element == 1 ){
        contador++;
       } 
    });
    return contador;
}

//hacemos uso del slice para reconocer el indice que queremos quitar 
const calculadoraInka=(cad)=> {
    let res;
    if (cad.length == 11) {
        let valor = [
            cad.slice(0, 5),
            cad.slice(5, 8),
            cad.slice(8, 10),
            cad.slice(10)
        ];

        res = 0;
        valor.forEach(element => {
            let cantidad = functionCantidad(element);
            res = res + (cantidad*element.length);
        });
    }
    else {
        res = "Error al ingresar los datos";
    }
    return res;
}
console.log("Valor decimal: " + calculadoraInka("00011000010"));


////////////////////////////////////////////////////////////////////////
console.log("---------------------")