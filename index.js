var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let newObject = {itemName:`${item}`, itemPrice: Math.floor(Math.random() * 101)}
 cart.push(newObject)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    let l1 = []
    for (let item in cart[0]) {
      l1.push(cart[0][item])
    }
    return `In your cart, you have ${l1[0]} at $${l1[1]}.`
  } else {
    let str = `In your cart, you have `
    let l2 = []
    for (let i = 0; i < cart.length; i++) {
      for (let item in cart[i]) {
      l2.push(cart[i][item])
      }
      for (let x = 0; x < l2.length - 1; x += 2) {
        str += `${l2[x]} at $${l2[x + 1]}`
      }
    }
    return str + "."
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
