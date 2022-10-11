export const convertToValue = (location, patterns) => { // map path with patterns to determine correct index, index is for set value of selected tab
  for (const [idx, p] of patterns.entries()) {
    if (p.test(location)) {
      return idx;
    }
  }
  return 0;
};

export const computeWidth = (percentage) => {
  return Math.round(window.innerWidth * (1 - (percentage * 2)));
};
