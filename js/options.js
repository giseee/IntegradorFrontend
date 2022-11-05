function seleccionHecha() {
    select.value === '1' && cuadroClick(cuadro1)
    select.value === '2' && cuadroClick(cuadro2)
    select.value === '3' && cuadroClick(cuadro3)
    calcular()
}
select.addEventListener('change', seleccionHecha)


function calcular() {
    const desc =
        formulario.opcion.value === '1' && 0.2 ||
        formulario.opcion.value === '2' && 0.5 ||
        formulario.opcion.value === '3' && 0.85

    let cant = formulario.cantidad.value
    console.log(precio)
    console.log(cant)
    const total = cant * precio * desc
    document.getElementById('total').innerHTML = "Total a Pagar: " + total + " $";
    return total;
}
