import Product from '../model/model.js'

//_________________________CREACION DE SOLICITUDES DE PRODUCTOS

//SOLICITAMOS TODOS LOS PRODUCTOS GET
const getMethod = async (req,res)=>{

  const productos = await Product.find({}).lean();
  console.log(productos);
    res.render('productos', {products: productos, title: 'Todos los resultados'})
    
}

//SOLICITAMOS UN SOLO PRODUCTO GET

const getMethodOne = async(req,res)=>{
    let {id} = req.params;

    const producto = await Product.findOne({_id:id}).lean();
    console.log(producto);
    // res.json(producto);
    res.render('productos_details', {details: producto});


}

//CREAMOS UN NUEVO PRODUCTO POST

const postMethod = async (req,res)=>{
    const{
        categoria,
        nombre,
        precio,
        descripcion,
        estado,
        location,
        usuario
    } = req.body;

    const productoNuevo = new Product({
        categoria,
        nombre,
        precio,
        descripcion,
        estado,
        location,
        usuario
    })

    //CREACION DE ARCHIVOS "IMAGENES"
    if(req.files){
        productoNuevo.setImgUrl(req.files);
    }

    const productoStoraged = productoNuevo.save();

    res.json(productoStoraged);
}

export default {
    getMethod,
    getMethodOne,
    postMethod
}