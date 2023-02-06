import { productRepository } from "./../repositories/Product.Repository";
export default class ProductController {
  async create(req, res) {
    const { body } = req;
    const product = await productRepository.save(body);
    return res.status(201).json({
      message: "Product created",
      payload: product,
      success: true,
    });
  }

  async view(req, res) {
    const id = parseInt(req.params.id);
    const product = await productRepository.findOneBy({ id: id });

    if (product) {
      return res.status(200).json({
        message: "Product found",
        payload: product,
        success: true,
      });
    } else {
      return res.status(404).json({
        message: "Product not found",
        id: id,
        success: false,
      });
    }
  }

  async update(req, res) {
    const id = parseInt(req.params.id);
    const { body } = req;

    const product = await productRepository.findOneBy({ id: id });
    if (product) {
      await productRepository.update(id, body);
      return res.status(200).json({
        message: "Product updated",
        payload: product,
        success: true,
      });
    } else {
      return res.status(404).json({
        message: "Product not found",
        id: id,
        success: false,
      });
    }
  }

  async remove(req, res) {
    const id = parseInt(req.params.id);

    const product = await productRepository.findOneBy({ id: id });
    if (product) {
      await productRepository.remove(product);
      return res.status(200).json({
        message: "Product deleted",
        payload: product,
        success: true,
      });
    } else {
      return res.status(404).json({
        message: "Product not found",
        id: id,
        success: false,
      });
    }
  }

  async getAll(req, res) {
    const products = await productRepository.find();
    return res.status(200).json({
      message: "Products found",
      payload: products,
      success: true,
    });
  }
}
