import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RecipeService } from './recipe.service';
import { Recipe } from './entities/recipe.entity';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';
import { RecipesArgs } from './dto/recipes.args';

@Resolver(() => Recipe)
export class RecipeResolver {
  constructor(private readonly recipeService: RecipeService) {}

  @Mutation(() => Recipe)
  createRecipe(
    @Args('createRecipeInput') createRecipeInput: CreateRecipeInput,
  ) {
    return this.recipeService.create(createRecipeInput);
  }

  @Query(() => [Recipe], { name: 'recipes' })
  recipes(@Args() args: RecipesArgs) {
    return this.recipeService.findAll(args);
  }

  @Query(() => Recipe, { name: 'recipe' })
  findOne(@Args('id') id: string) {
    return this.recipeService.findOne(id);
  }

  @Mutation(() => Recipe)
  updateRecipe(
    @Args('updateRecipeInput') updateRecipeInput: UpdateRecipeInput,
  ) {
    return this.recipeService.update(updateRecipeInput.id, updateRecipeInput);
  }

  @Mutation(() => Recipe)
  removeRecipe(
    @Args('id', { type: () => String, nullable: true, defaultValue: '1' })
    id: string,
  ) {
    return this.recipeService.remove(id);
  }
}
