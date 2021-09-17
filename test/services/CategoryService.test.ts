import ICategory from '../../src/interfaces/Category.interface';
import CategoryRepository from '../../src/repositories/CategoryRepository';
import CategoryService from '../../src/services/CategoryService';

class CategoryRepositoryTest {
  createNewCategory(query: ICategory) {
    return query;
  }

  deleteCategory(id: string) {
    return id;
  }

  getAllCategory() {
    return [];
  }

  getCategoryById(id: string) {
    return id;
  }

  updateCategory(id: string, query: ICategory) {
    return 'Has been update';
  }
}

describe(CategoryService.name, () => {
  const categoryRepo = new CategoryRepositoryTest();
  const categoryService = new CategoryService(
    categoryRepo as unknown as CategoryRepository
  );
  const query = { name: 'tools' };
  test('should return query', async () => {
    const result = await categoryService.createNewCategory(query);

    expect(result).toBe(query);
  });
});

describe(CategoryService.name, () => {
  const categoryRepo = new CategoryRepositoryTest();
  const categoryService = new CategoryService(
    categoryRepo as unknown as CategoryRepository
  );
  const id = '5';
  const query = { name: 'tools' };
  test('should return message', async () => {
    const result = await categoryService.updateCategory(id, query);
    console.log(result);

    expect(result).toBe('Has been update'); // rewrite
  });
});
