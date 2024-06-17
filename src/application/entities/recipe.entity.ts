import { Replace } from '@helpers/Replace';

interface RecipeProps {
  id: number | undefined;
  title: string;
  describe: string | null;
  userId: string;
  valuePartial: number | null;
  ingredients: any[];
  createAt: Date;
  updateAt: Date | null;
}

export class RecipeEntity {
  private props: RecipeProps;

  constructor(
    props: Replace<
      RecipeProps,
      {
        id?: number;
        describe?: string | null;
        valuePartial?: number | null;
        ingredients?: any[];
        createAt?: Date;
        updateAt?: Date | null;
      }
    >,
  ) {
    this.props = {
      id: props.id ?? undefined,
      title: props.title ?? 'Receita',
      describe: props.describe ?? null,
      userId: props.userId ?? 'FakeId',
      valuePartial: this.calculateValueRecipe(props.ingredients),
      createAt: props.createAt ?? new Date(),
      updateAt: props.updateAt ?? null,
      ingredients: props.ingredients ?? [],
    };
  }

  calculateValueRecipe(ingredients: any[] | undefined): number {
    if (typeof ingredients === 'undefined') return 0;

    const valueRecipe = ingredients.reduce(
      (total: number, ingredient: any) =>
        total + parseFloat(ingredient.realAmount),
      0,
    );

    return valueRecipe;
  }

  set id(id: number) {
    this.props.id = id;
  }

  get id(): number | undefined {
    return this.props.id;
  }

  set title(title: string) {
    this.props.title = title;
  }

  get title(): string {
    return this.props.title;
  }

  set describe(describe: string) {
    this.props.describe = describe;
  }

  get describe(): string | null {
    return this.props.describe;
  }

  set valuePartial(valuePartial: number) {
    this.props.valuePartial = valuePartial;
  }

  get valuePartial(): number | null {
    return this.props.valuePartial;
  }

  set ingredients(ingredients: any) {
    this.props.ingredients = ingredients;
  }

  get ingredients(): any[] {
    return this.props.ingredients;
  }

  get userId() {
    return this.props.userId;
  }

  get createAt(): Date {
    return this.props.createAt;
  }
}

const values = {
  recipeId: 1,
  title: undefined,
  describe: undefined,
};
const current = {
  title: 'valor existente',
  describe: 'valor existente',
  userId: 'fake id',
  ingredients: [{ realAmount: 10 }, { realAmount: 10 }, { realAmount: 10 }],
  createAt: new Date(),
};

const recipe = new RecipeEntity({
  id: values.recipeId,
  title: values.title ?? current.title,
  describe: values.describe ?? current.describe,
  userId: current.userId,
  ingredients: current.ingredients,
  createAt: current.createAt,
});

console.log(recipe);
