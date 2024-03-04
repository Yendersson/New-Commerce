import mongoose from 'mongoose';

const ProducSchema = mongoose.Schema({
    categoria: String,
    nombre: String,
    precio: Number,
    descripcion: String,
    imgUrl: Object,
    estado: Boolean,
    location: String,
    usuario: String,
    // userId: {type: String, require: true}
},
{
    timestamps:true
})

ProducSchema.methods.setImgUrl = function setImgUrl(filename){
    let urls = []

    filename.forEach(image => urls.push(`http://localhost:8080/public/${image.filename}`));
    this.imgUrl = urls

}

export default mongoose.model('productos', ProducSchema);