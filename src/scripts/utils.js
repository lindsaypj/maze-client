export const clamp = (min, max, target) => {
  return Math.max(min, Math.min(max, target));
}