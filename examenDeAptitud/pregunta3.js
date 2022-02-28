////////////////////////////////////////////////
console.log("pregunta 3");
///////////////////////////////////
function calcularMontoAdicional( salarios = [1000, 1800, 600, 2100], ventas = ["A-1", "B-1", "A-1", "C-2", "D-3"]) {
    let mapEmpleados = {}
    for (let i = 1; i <= salarios.length; i++) {
        mapEmpleados = { ...mapEmpleados, [i]:0}
    }
    ventas.forEach(venta => {
        const producto = venta.split("-")
        empKey = producto[producto.length - 1]
        mapEmpleados[empKey] = mapEmpleados[empKey] + 1
    })
    let i = 0;
    let monto = 0;
    for (let empleado in mapEmpleados) {
        const indiceEmpleado = i;
        const productosVendidos = empleado;
        const salario = salarios[indiceEmpleado];

        // regla A
        if (salario < 1000) {
            monto += (50 * productosVendidos);
        }
        // regla B
        else if (salario >= 1000 && salario < 1500) {
            monto += (100 * Math.floor(productosVendidos / 2))
        }
        // regla C
        else if (salario >= 1200 && salario < 2000) {
            if (productosVendidos > 3) monto += (1.4 * salario)
        }
        // regla E
        else {
            if (productosVendidos <= 4) {
                monto -= 100
            } else if (productosVendidos > 4 && productosVendidos <= 10) {
                monto += 200
            } else {
                monto += 800
            }
        }
        i++;
    }
    console.log("Monto final = ",monto)
}
calcularMontoAdicional()

////////////////////////////////////////////////////////////////////////
console.log("---------------------")