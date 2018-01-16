var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor((Math.random() * 100) + 1);
 var newItem = {[item]: price};
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
if (cart.length === 0) {
  console.log("Your shopping cart is empty.");
} else {
  var statement = "In your cart, you have ";
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var key = Object.keys(item);
    var price = item[key];
    if (cart.length === 1 ) {
      statement +=`${key} at $${price}.`;
    } else if (i === (cart.length - 1)) {
      statement += `and ${key} at $${price}.`;
    } else if (cart.length === 2) {
      statement += `${key} at $${price} `;
    } else {
      statement += `${key} at $${price}, `;
    }
  }
  return statement;
}
}

}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
