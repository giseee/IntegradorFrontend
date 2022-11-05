function borrar(e) {
    e.preventDefault()
    formulario.valor1.value = ''
    formulario.valor2.value = ''
    formulario.valor4.value = ''
    formulario.cantidad.value = ''
    formulario.opcion.value = ''
    document.getElementById('total').innerHTML = "Total a Pagar: $";

    for (let item of cuadros) {
        item.classList.replace('border-success', 'border-muted')
        item.ariaChecked = false
    }
}
function cambiarcolor(v){
    v.value === ''
        ? v.classList.add('border-danger')
        : v.classList.remove('border-danger')}

function checkError() {

    let informacion = false

    const valor3 =
        formulario.opcion.value === '1' && 'Estudiante' ||
        formulario.opcion.value === '2' && 'Trainee' ||
        formulario.opcion.value === '3' && 'Junior'
    cambiarcolor(formulario.valor1)
    cambiarcolor(formulario.valor2)
    cambiarcolor(formulario.valor4)
    cambiarcolor(formulario.cantidad)
    
    if (valor3 && formulario.valor1.value && formulario.valor2.value && formulario.valor4.value && formulario.cantidad.value) {
        const valor=calcular()
        informacion = {
            nombre: formulario.valor1.value,
            apellido: formulario.valor2.value,
            email: formulario.valor4.value,
            cantidad: formulario.cantidad.value,
            total:valor,
            opcion: valor3
            
        }
    }
    return informacion
}


function enviar(e) {
    e.preventDefault()
    const completeForm = checkError()
    completeForm && sessionStorage.setItem('formulario', JSON.stringify(completeForm))
    completeForm && exito()
}

function exito(){
    location.href='exito.html'
}

boton1.onclick = (e) => { borrar(e) }
boton2.onclick = (e) => { enviar(e) }

