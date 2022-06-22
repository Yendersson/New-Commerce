const articulos = document.querySelectorAll('article');

articulos.forEach(producto => {
    console.log(producto.dataset.id);
    producto.addEventListener('click', ()=>{
        let id = producto.dataset.id;
        location.assign('/products/' + id);
    })
});