import { RecipeEntity } from '@application/entities/recipe.entity';
import { RecipesRepository } from '@application/repositories/recipes-repository';

export const mockRecipesRepository = {
  create: vi.fn().mockResolvedValue(
    new RecipeEntity({
      id: 1,
      title: 'Test Recipe',
      describe: 'Test Description',
      userId: 'user123',
      createdAt: new Date(),
      updatedAt: null,
      valuePartial: 0,
    }),
  ),
  allRecipesFromUser: vi
    .fn()
    .mockResolvedValue([
      new RecipeEntity({ id: 1, title: 'Recipe 1', userId: 'user1' }),
      new RecipeEntity({ id: 2, title: 'Recipe 2', userId: 'user1' }),
      new RecipeEntity({ id: 3, title: 'Recipe 3', userId: 'user1' }),
    ]),
  getRecipe: vi.fn().mockResolvedValue(
    new RecipeEntity({
      id: 1,
      title: 'Recipe 1',
      userId: 'user1',
      valuePartial: 15,
      ingredients: [
        { id: 1, name: 'ingredient 1', realAmount: 5 },
        { id: 2, name: 'ingredient 2', realAmount: 5 },
        { id: 2, name: 'ingredient 2', realAmount: 5 },
      ],
    }),
  ),
  delete: vi.fn().mockResolvedValue(undefined),
  update: vi
    .fn()
    .mockResolvedValue(new RecipeEntity({ id: 3, userId: 'user1' })),
};

class MockUpdatingValuePartial {
  constructor(private recipesRepository: RecipesRepository) {}

  async execute(recipeId: number) {
    return true;
  }
}
export const mockUpdateValuePartial = new MockUpdatingValuePartial(
  mockRecipesRepository,
);
