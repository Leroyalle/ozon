export const getSkeletonCategoryWidth = () => {
  const widths = ['w-15', 'w-24', 'w-28', 'w-32', 'w-36', 'w-40'];
  return widths[Math.floor(Math.random() * widths.length)];
};
