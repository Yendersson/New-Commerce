import service from '../services/ProductService.js';


//_________________________CREACION DE SOLICITUDES DE PRODUCTOS

class ProductController {

    static async getProducts(req, res, next) {
        try {
            const items = await service.getAllProducts();
            if (!items) {
                res.status(404).render("error404", {});
            }
            res.render('productos', { products: items, title: 'Todos los resultados' })

        } catch (error) {
            res.status(500).render("error500", { error: error });
        }
    }

    static async getByCategory(req, res, next) {
        const { category } = req.params;
        try {
            const items = await service.getProductByCategory(category);
            if (!items) {
                res.status(404).render("error404", {});
            }
            res.render('productos', { products: items, title: category })
        } catch (error) {
            res.status(500).render("error500", { error: error });
        }
    }

    static async getOneProduct(req, res, next) {
        const { id } = req.params;
        try {
            const item = await service.getOneProduct(id);
            if (!item) {
                res.status(404).render("error404", {});
            }
            res.render('productos_details', { details: item });
        } catch (error) {
            res.status(500).render("error500", { error: error });
        }
    }

    static async insertProduct(req, res, next) {
        try {
            const item = await service.createProduct(req);
            if (!item) {
                res.status(404).render("error404", {});
            }
        } catch (error) {
            res.status(500).render("error500", { error: error });
        }
    }
}

export default ProductController;
