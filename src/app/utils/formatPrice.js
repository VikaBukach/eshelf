export const formatPrice = (price) => {
  const [integerPart, decimalPart] = price.toString().split(".");

  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  if (decimalPart) {
    return `${formattedIntegerPart}.${decimalPart.padEnd(2, "0")}`;
  } else {
    return formattedIntegerPart;
  }
};
