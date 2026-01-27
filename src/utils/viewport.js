/**
 * Returns a value representing the given percentage of the viewport height
 * @param {number} percentage - Percentage of viewport height (0-100)
 * @returns {number} - Pixel value
 */
export const vh = (percentage) => {
  return (window.innerHeight * percentage) / 100;
};

/**
 * Returns a value representing the given percentage of the viewport width
 * @param {number} percentage - Percentage of viewport width (0-100)
 * @returns {number} - Pixel value
 */
export const vw = (percentage) => {
  return (window.innerWidth * percentage) / 100;
};
