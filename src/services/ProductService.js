import Product from "../model/model.js"

class ProductService{

    static async getAllProducts(){
        try {
            const products = await Product.find({}).lean();
            return products;
        } catch (error) {
            console.log(`Could not find products: ${error}`);
        }
    }

    static async getOneProduct(id){
        try {
            const product = await Product.findOne({_id:id}).lean();
            return product
        } catch (error) {
            console.log(`Could not find the product: ${error}`);
        }
    }

    static async getProductByCategory(category) {
        try {
            console.log(category);
            const products = await Product.find({categoria: category}).lean();
            return products;
        } catch (error) {
            console.log(`Could not find the product by category: ${error}`);
        }
    }

    static async createProduct(request){
        const data = request.body;
        const file = request.file;
        try {
            const product = new Product(data);

            if (file) product.setImgUrl(req.files);

            return product.save();

        } catch (error) {
            console.log(`Error to create a new product`);
        }
    }
}

export default ProductService;