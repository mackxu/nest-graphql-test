import { Injectable } from '@nestjs/common';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';
import { Recipe } from './entities/recipe.entity';
import { RecipesArgs } from './dto/recipes.args';

@Injectable()
export class RecipeService {
  create(createRecipeInput: CreateRecipeInput) {
    console.log(createRecipeInput);
    return { title: createRecipeInput.title } as any;
  }

  findAll(recipesArgs: RecipesArgs) {
    return [];
  }

  findOne(id: string): Promise<Recipe> {
    console.log('findOne', id);
    return { title: 'aaa', info: { bbb: 1 } } as any;
  }

  update(id: number, updateRecipeInput: UpdateRecipeInput) {
    return `This action updates a #${id} recipe`;
  }

  remove(id: string) {
    return `This action removes a #${id} recipe`;
  }
}
