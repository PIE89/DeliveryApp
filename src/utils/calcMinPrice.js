export const calcMinPrice = (sizes, doughs) => {
  let sum;
  if (!doughs) {
    let minSizesArray = sizes.toSorted((a, b) => {
      return a - b;
    });

    sum = minSizesArray[0].price;
  } else {
    let minSizesArray = sizes.toSorted((a, b) => {
      return a - b;
    });

    let minDoughsArray = doughs.toSorted((a, b) => {
      return a - b;
    });

    sum = minSizesArray[0].price + minDoughsArray[0].price;
  }

  return sum;
};
