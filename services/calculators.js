export function calculateGramsInCh(chPer100g, chPerMeal) {
  if (!chPer100g || !chPerMeal) {
    return null;
  }
  return (chPerMeal * 100) / chPer100g;
}
