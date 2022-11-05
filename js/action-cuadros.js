function cuadroOver(cuadro) {
    cuadro.classList.replace('border-primary', 'border-warning')
}
function cuadroLeave(cuadro) {
    cuadro.classList.replace('border-warning', 'border-primary')
}
function cuadroClick(cuadro) {
    cuadro.ariaChecked = true
    cuadro.classList.replace('border-primary', 'border-success')
    cuadro.classList.replace('border-warning', 'border-success')


    select.value =
        cuadro.id === 'cuadro1' && '1' ||
        cuadro.id === 'cuadro2' && '2' ||
        cuadro.id === 'cuadro3' && '3'

    for (let item of cuadros) {
        if (item.id !== cuadro.id) {
            item.classList.replace('border-success', 'border-primary')
            item.ariaChecked = false
        }
    }
    calcular()
}


function asignarEventos(cuadro) {
    cuadro.addEventListener('mouseover', () => cuadroOver(cuadro))
    cuadro.addEventListener('mouseleave', () => cuadroLeave(cuadro))
    cuadro.addEventListener('click', () => cuadroClick(cuadro))
}

asignarEventos(cuadro1)
asignarEventos(cuadro2)
asignarEventos(cuadro3)