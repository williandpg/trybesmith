import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function createProduct(product: ProductInputtableTypes): Promise<ServiceResponse<Product>> {
  const createdProduct = await ProductModel.create(product);
  return {
    status: 201,
    data: createdProduct.dataValues,
  };
}

export default {
  createProduct,
};