import { IngredientRequest } from 'src/common/interfaces/ingredientRequest';
import { IngredientResponse } from 'src/common/interfaces/ingredientResponse';
import { IngredientUpdatingRequest } from 'src/common/interfaces/ingredientUpdateRequest';

export abstract class IngredientsRepository {
  abstract create(
    receivedValues: IngredientRequest,
    realAmount: number,
  ): Promise<any>;
  abstract singleIngredient(receivedId: number): Promise<IngredientResponse>;
  abstract delete(receivedId: number): Promise<any>;
  abstract update(
    receivedValues: IngredientUpdatingRequest,
    receivedId: number,
    newRealAmount: number,
  ): Promise<any>;
}
