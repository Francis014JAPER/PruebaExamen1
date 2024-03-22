// ProductViewModel.js
import ProductModel from '../models/ProductModel';

class ProductViewModel {
  getProducts() {
    // Aquí puedes realizar llamadas a API o cargar datos de alguna fuente externa
    return [
      new ProductModel(1, 'Producto 1'),
      new ProductModel(2, 'Producto 2'),
      new ProductModel(3, 'Producto 3'),
      new ProductModel(4, 'Producto 4'),
      new ProductModel(5, 'Producto 5'),
      new ProductModel(6, 'Producto 6'),
      new ProductModel(7, 'Producto 7'),
      new ProductModel(8, 'Producto 8'),
      new ProductModel(9, 'Producto 9'),
      new ProductModel(10, 'Producto 10'),
    ];
  }
}

export default ProductViewModel;
