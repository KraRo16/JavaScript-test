function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
const totalPrice = pricePerDroid * orderedQuantity;
if (totalPrice <= customerCredits) {
  message =`You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
} else {
  message =`Insufficient funds!`;
}
  // Change code above this line
  return message;
}
