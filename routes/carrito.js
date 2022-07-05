import express from 'express';
import verifyToken from '../controllers/verifyToken.js';
// import methodosCarrito from '../controllers/carrito.js'
import Carrito from '../model/Carrito.js';
import Product from '../model/model.js'

const routerCarrito = express.Router();

routerCarrito.get('/:find?', verifyToken, async (req, res)=>{

    let {find} = req.params;

    const carrito = await Carrito.findOne({userId: find});

    // console.log(carrito.products[0].productId);

    const _idProducto = carrito.products[0].productId;

    // producto = carrito.products.map(elemet => {
    //     console.log(elemet.productId)
    //     await Product.findById({_id:elemet.productId}).lean()
    // });



    const producto = await Product.findById({_id:_idProducto}).lean()
    console.log(producto);

    res.render('carrito', {carrito: producto})
})

routerCarrito.post('/', verifyToken, async(req, res)=>{

    let {userId} = req.body;

    const carritoExist = await Carrito.findOne({userId: userId}).lean()

    if(carritoExist){
        res.json({
            exist: true,
            data: carritoExist
        })
    }else{

        const nuevoCarrito = Carrito(req.body)
    
        const carritoGuardar = await nuevoCarrito.save()

        res.json(carritoGuardar);
    }

    
});

routerCarrito.put('/:id', verifyToken, async (req, res)=>{

    let {id} = req.params

    const carritoEdit = await Carrito.findOneAndUpdate({userId: id}, {$set:req.body});

    // console.log(carritoEdit);
    res.json(carritoEdit)
})

export default routerCarrito;

// const variable = await Carrito.find({userId: req.body});

// if(variable){
//     res.json({
//         error: null,
//         data: variable
//     })
// }
