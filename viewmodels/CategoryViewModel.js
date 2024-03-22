// CategoryViewModel.js
import CategoryModel from '../models/CategoryModel';

class CategoryViewModel {
  getCategories() {
    // Aquí puedes realizar llamadas a API o cargar datos de alguna fuente externa
    return [
      new CategoryModel(1, 'Electrónica'),
      new CategoryModel(2, 'Ropa'),
      new CategoryModel(3, 'Hogar'),
      new CategoryModel(4, 'Alimentos'),
      new CategoryModel(5, 'Libros'),
    ];
  }
}

export default CategoryViewModel;
