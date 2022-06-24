let modalComprar = document.getElementById('compra');
modalComprar.addEventListener('click', ()=>{
    console.log('botoon');
    document.querySelector('.Pago-carrito-carrito').classList.add('show');
})

document.querySelector('#cerrar').addEventListener('click', (e)=>{
    e.preventDefault()
    document.querySelector('.Pago-carrito-carrito').classList.remove('show');

})

document.querySelector('#comprado').addEventListener('click', ()=>{
    location.href = 'index.html'
})