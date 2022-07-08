import Product from '../model/model.js'

//___________SOLICITAR LA CANTIDAD DE PRODUCTOS POR CATEGORIA______________

const getCantidadCategory = async (req,res)=>{

    const cantidadRopa = await Product.count({categoria:'ropa-accesorios'});
    const cantidadTecnologia = await Product.count({categoria:'electrodomestico-tecnologia'});
    const cantidadHogar = await Product.count({categoria:'hogar-muebles-jardin'});
    const cantidadRevistas = await Product.count({categoria:'arte-libros-revista'});
    
    let cantidadProductos = {cantidadRopa, cantidadHogar, cantidadRevistas, cantidadTecnologia};
    console.log(cantidadProductos);

    res.render('inicio', {cantidad: cantidadProductos});

}

export default {
    getCantidadCategory,
}