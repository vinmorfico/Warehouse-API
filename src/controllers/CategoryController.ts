import { Request, Response } from 'express';
import { categoryPOST, categoryPUT } from '../schemes/schemaCategory';
import { paramID } from '../routes/schemaParamsId';
import CategoryService from '../services/CategoryService';

class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  createNewCategory = async (req: Request, res: Response) => {
    await categoryPOST.validateAsync(req.body);
    const category = await this.categoryService.createNewCategory(req.body);
    res.status(201).json(category);
  };

  deleteCategory = async (req: Request, res: Response) => {
    await paramID.validateAsync(req.params);
    await this.categoryService.deleteCategory(req.params.id);
    res.status(200).json({ status: 'deleted' });
  };

  getAllCategory = async (_req: Request, res: Response) => {
    const category = await this.categoryService.getAllCategory();
    res.status(200).json(category);
  };

  getCategoryById = async (req: Request, res: Response) => {
    await paramID.validateAsync(req.params);
    const category = await this.categoryService.getCategoryById(req.params.id);
    res.status(200).json(category);
  };

  updateCategory = async (req: Request, res: Response) => {
    await paramID.validateAsync(req.params);
    await categoryPUT.validateAsync(req.body);
    const category = await this.categoryService.updateCategory(
      req.params.id,
      req.body
    );
    res.status(200).json(category);
  };
}

export default CategoryController;
