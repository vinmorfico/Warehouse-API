import { PartialModelObject } from 'objection';
import  Products  from '../entities/Products';
import IProduct from '../interfaces/Product.interface';

class ProductRepository {
  createNewProduct(query: IProduct) {
    const { name, description, price, amount_left, category_id, users_id } =
      query;
    return Products.query().insert({
      name,
      description,
      price,
      amount_left,
      category_id,
      users_id,
    } as PartialModelObject<Products>);
  }

  deleteProduct(id: string) {
    return Products.query().deleteById(id);
  }

  getAllProducts() {
    return Products.query();
  }

  getProductById(id: string) {
    return Products.query()
      .findById(id)
      .withGraphFetched('category')
      .withGraphFetched('users');
  }

  updateProduct(id: string, query: IProduct) {
    const { name, description, price, amount_left, category_id, users_id } =
      query;
    return Products.query().patchAndFetchById(id, {
      name,
      description,
      price,
      amount_left,
      category_id,
      users_id,
    } as PartialModelObject<Products>);
  }
}

export default ProductRepository;
