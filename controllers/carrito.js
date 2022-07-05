import Carrito from '../model/Carrito.js';

const crearCarrito = async (req, res) =>{
    const {body} = req.body

    const nuevoCarrito = Carrito({body});
    const carritoGuardado = await nuevoCarrito.save();

    res.json(carritoGuardado);
}

export default {
    crearCarrito
}