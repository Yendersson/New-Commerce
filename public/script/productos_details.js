let imgP = document.querySelector(".imgPrincipalProducto");
let imgUno = document.querySelector(".imgSrc1");
let imgDos = document.querySelector(".imgSrc2");
let imgTres = document.querySelector(".imgSrc3");
let imgCuatro = document.querySelector(".imgSrc4");

// por medio del evento click intercambiamos el src de cada imagen 
// y de esa manera visulizar la imagen solicitada.

imgUno.addEventListener("click",
 function (){ 
  imgP.src = imgUno.src
})
imgDos.addEventListener("click",
 function (){ 
  imgP.src = imgDos.src
})
imgTres.addEventListener("click",
 function (){ 
  imgP.src = imgTres.src
})
imgCuatro.addEventListener("click",
 function (){ 
  imgP.src = imgCuatro.src
})
imgP.addEventListener("click",
 function (){ 
  imgP.src = imgUno.src
})

//AGREGAR AL CARRITO

const btnAgregar = document.querySelector('#agregar');

btnAgregar.addEventListener('click', ()=>{
  // console.log('agregando producto a carrito');
  console.log(location.pathname)
  const url = location.pathname.split('/')[2];
  console.log(url);
  const userId = localStorage.getItem('_id');
  console.log(userId);

  let products = {
    productId : url
  }


  fetch('http://localhost:8080/carrito',
  {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify ({
      userId: userId,
      products: products
    })
  }
  )
  .then(res=> res.json())
  .then(data => {

    if(data.exist){
      console.log(data.exist)
      console.log('ALL OK', data.data);

      console.log('array', data.data.products);

      const array = data.data.products;
      array.push(products);

    fetch('http://localhost:8080/carrito/' + userId, {
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
         body: JSON.stringify({
          products: array
         })
    })
    .then(res=>res.json())
    .then(respuesta => console.log('nuevo producto', respuesta));

    }else{
      console.log('carrito no existente');
    }
  });
})