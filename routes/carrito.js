import express from 'express';
import verifyToken from '../controllers/verifyToken.js';
// import methodosCarrito from '../controllers/carrito.js'
import Carrito from '../model/Carrito.js';
import Product from '../model/model.js'

const routerCarrito = express.Router();


//SOLICITAMOS INFORMACION DEL CARRITO DEL USUARIO MEDIAN SU ID Y AUTORIZAMOS MEDIANTE VERIFYTOKEN
routerCarrito.get('/:find', verifyToken, async (req, res)=>{


    let {find} = req.params;

    //BUSCAMOS EL CARRITO MEDIANTE EL ID DEL USUARIO
    const carrito = await Carrito.findOne({userId: find});

    console.log(carrito);

    //ITERAMOS Y CREAMOS UN ARRAY CON EL ID DE LOS PRODUCTOS CONTENIDOS EN EL CARRITO
    const allProducts = carrito.products.map(element => element.productId);

    const arrayDeSalida = []

    //ITERAMOS EN EL ARRAY DE ALLPRODUCTOS Y BUSCAMOS LOS PRODUCTOS CONTENIDOS DEL CARRITO EN LA COLECCION PRODUCT
    for (const products in allProducts) {
        // Y LO ALMACENAMOS EN EL ARRAY: arrayDeSalida
        const productoFinded = await Product.findById({_id: allProducts[products]}).lean();
        arrayDeSalida.push(productoFinded);
        
    }

    // console.log(allProducts);
    // console.log(arrayDeSalida);
    // console.log(arrayDeSalida[0].nombre)

    //GENERAMOS LA SUMA TOTAL DE TODOS LOS PRODUCTOS A COMPRAR
    const sumaTotal = arrayDeSalida.map(element => element.precio);

    let total = sumaTotal.reduce((a,b)=> a + b );
    console.log(total);

    //AL RENDERIZAR LES MANDAMOS EL arrayDeSalida Y EL total PARA IMPRIMIRLOS MEDIANTE HANDLEBARS
    res.render('carrito', {carrito: arrayDeSalida, pagar: total})
})


//SOLICITAMOS LA CREACION DEL CARRITO EN CASO DE QUE NO EXISTA 
routerCarrito.post('/', verifyToken, async(req, res)=>{
    //USAMOS EL TOKEN DE AUTORIZACION
    let {userId} = req.body;

    //COMPROBAMOS SI EL CARRITO EXISTE
    const carritoExist = await Carrito.findOne({userId: userId}).lean()

    if(carritoExist){
        res.json({
            exist: true,
            data: carritoExist
        })
    }else{
        //AL NO EXISTIR EL CARRITO PROCEDEMOSO A CREARLO 
        const nuevoCarrito = Carrito(req.body)
    
        const carritoGuardar = await nuevoCarrito.save()

        res.json(carritoGuardar);
    }

    
});

//MODIFICAR EL CARRITO O AGREGAR PRODUCTOS AL CARRITO
routerCarrito.put('/:id', verifyToken, async (req, res)=>{

    let {id} = req.params

    //SIMPLEMENTE BUSCAMOS MEDIANTE EL ID DEL USUARIO Y CARGAMOS
    const carritoEdit = await Carrito.findOneAndUpdate({userId: id}, {$set:req.body});

    // console.log(carritoEdit);
    res.json(carritoEdit)
})

export default routerCarrito;
