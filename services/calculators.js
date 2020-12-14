function normalizeNumber(num) {
  // Allow for both commas and periods.
  return Number(String(num).replace(',', '.'));
}

export function calculateGramsInCh(chPer100g, chPerMeal) {
  if (!chPer100g || !chPerMeal) {
    return 0;
  }
  return (normalizeNumber(chPerMeal) * 100) / normalizeNumber(chPer100g);
}

export function calculateChInGrams(chPer100g, grams) {
  if (!chPer100g || !grams) {
    return 0;
  }
  return (normalizeNumber(grams) * normalizeNumber(chPer100g)) / 100;
}
