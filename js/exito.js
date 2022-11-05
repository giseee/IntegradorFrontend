let form = sessionStorage.getItem('formulario')
form = JSON.parse(form)

const valor3 = document.getElementById('valor3')
document.getElementById('valor1').innerText = form.nombre
document.getElementById('valor2').innerHTML = form.apellido
document.getElementById('valor4').innerHTML = form.email
document.getElementById('cantidad').innerHTML = form.cantidad
document.getElementById('total').innerHTML='$'+ form.total

valor3.innerText = form.opcion
valor3.style.color = '#00aa00'
valor3.style.backgroundColor = 'rgba(255,255,0,50%)'
valor3.style.cursor = 'pointer'
valor3.addEventListener('click', () => { location.href = 'tickets.html' })
Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Estos son tus datos',
    showConfirmButton: false,
    timer: 15000
})