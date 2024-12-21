import axiosDJ from '../config/axiosDJ';

const ENDPOINT = 'recipes';

export async function getAllProducts() {
  try {
    const response = await axiosDJ.get(`/${ENDPOINT}`);

    if (Array.isArray(response.data.recipes)) {
      const updatedRecipes = response.data.recipes.map((recipe) => {
        recipe.categories = recipe.mealType.map((type) => {
          if (type === 'Breakfast')
            return 'Breakfast';
          if (type === 'Lunch')
            return 'Lunch';
          if (type === 'Dinner')
            return 'Dinner';
          return 'Others';
        })[0];

        return recipe;
      });

      console.log('Updated Recipes:', updatedRecipes);

      return updatedRecipes;
    }
    else {
      console.log('Not working');
    }
  }
  catch (error) {
    console.error('Error fetching or modifying recipes:', error);
    return [];
  }
};

export async function getProductsByIds(ids) {
  // eslint-disable-next-line antfu/if-newline, no-useless-return
  if (!Array.isArray(ids)) return;

  try {
    const promises = ids.map(id => axiosDJ.get(`/${ENDPOINT}/${id}`));
    const response = await Promise.allSettled(promises);
    return response.filter(entry => entry.status === 'fulfilled').map(entry => entry.value.data);
  }
  catch (error) {
    console.error('Error fetching or modifying recipes:', error);
    return [];
  }
}
