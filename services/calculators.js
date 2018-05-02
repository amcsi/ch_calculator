export function calculateGramsInCh(chPer100g, chPerMeal) {
  if (!chPer100g || !chPerMeal) {
    return 0;
  }
  return Math.round((chPerMeal * 100) / chPer100g);
}

export function calculateChInGrams(chPer100g, grams) {
  if (!chPer100g || !grams) {
    return 0;
  }
  return Math.round((grams * chPer100g) / 100);
}
