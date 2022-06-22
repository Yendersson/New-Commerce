import Product from '../model/model.js';

const ropaAccesorios = async (req, res) =>{
    const productos = await Product.find({categoria:'ropa-accesorios'}).lean();
    console.log(productos);

    // let title = {
    //     category : 'ropa y accesorios'
    // }
    // console.log(title);
    res.render('productos', {title: 'Ropa y accesorios' , products: productos});
}

const electrodomesticos = async (req, res)=>{
    const productos = await Product.find({categoria: 'electrodomestico-tecnologia'}).lean();
    console.log(productos);

    res.render('productos', {products: productos, title: 'Electrodomesticos y tecnologia'} );
}

const hogar = async (req, res)=>{
    const productos = await Product.find({categoria: 'hogar-muebles-jardin'}).lean();
    console.log(productos);

    res.render('productos', {products: productos, title: 'Hogar, muebles y jardin'});
}

const revistas = async (req, res)=>{
    const productos = await Product.find({categoria: 'arte-libros-revista'}).lean();
    console.log(productos);

    res.render('productos', {products: productos, title: 'Arte, libros y revistas'});
}

export default {
    ropaAccesorios,
    electrodomesticos,
    hogar,
    revistas
}



