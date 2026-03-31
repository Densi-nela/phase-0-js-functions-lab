function calculateTax(amount) {
  if (amount === 0) return 0;
  return amount * 0.1;
}

function convertToUpperCase(str) {
  return str.toUpperCase();
}

function findMaximum(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function isPalindrome(word) {
  if (word.split("").length === 1 || word.split("") === "") {
    return true;
  }
  const reversed = word.split("").reverse().join("");

  if (reversed === word) {
    return true;
  }

  return false;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return originalPrice - (discountPercentage / 100) * originalPrice;
}

module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
};
