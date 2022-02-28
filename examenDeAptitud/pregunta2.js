///////////////////////////////////////////////////////////////////////
console.log("pregunta 2")
function depredadores(arr, valor) {
            let data=[];
            for (let index = 0; index < arr.length; index++) {
                valor.forEach(element => {
                    if(arr[index]==element){
                        data.push(index);
                    }
                });
            }
            return data;
        }
        
        function MinimoGruposSinDepredadores(arr) {
            let grupos = [];
            let valor = depredadores(arr, [-1])
            grupos.push(valor)
            for (let index = 0; index < arr.length; index++){
                valor = depredadores(arr, valor)
                if (valor.length == 0)      break;
                grupos.push(valor);
            }
            return grupos.length;
        }
        
        console.log("Numero de grupos: ",MinimoGruposSinDepredadores([-1, 8, 6, 0, 7, 3, 8, 9, -1, 6]));

////////////////////////////////////////////////////////////////////////
console.log("---------------------")