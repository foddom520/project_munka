var addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

var cart = document.querySelector(".cart");

var cartItems = cart.querySelector(".cart-items");

var cartTotal = cart.querySelector(".cart-total");

var clearCartButton = cart.querySelector(".clear-cart-btn");

var cartArray = [];

addToCartButtons.forEach(function(button) {
  button.addEventListener("click", addToCartClicked);
});

clearCartButton.addEventListener("click", clearCart);

function addToCartClicked(event) {
  var button = event.target;
  var card = button.parentElement.parentElement;
  var title = card.querySelector(".card-title").innerText;
  var price = card.querySelector(".card-price").innerText;
  addItemToCart(title, price);
}

function addItemToCart(title, price) {
  for (var i = 0; i < cartArray.length; i++) {
    if (cartArray[i].title === title) {
      cartArray[i].count++;
      updateCartTotal();
      return;
    }
  }
  
  var item = {
    title: title,
    price: price,
    count: 1
  };
  cartArray.push(item);
  createCartItemElement(item);
  updateCartTotal();
}

function createCartItemElement(item) {
  var li = document.createElement("li");
  li.innerText = `${item.title} - ${item.price} Ft x ${item.count}`;
  cartItems.appendChild(li);
}

function updateCartTotal() {
  var total = 0;
  for (var i = 0; i < cartArray.length; i++) {
    total += cartArray[i].price * cartArray[i].count;
  }
  cartTotal.innerText = total;
}

function clearCart() {
  cartArray = [];
  cartItems.innerHTML = "";
  updateCartTotal();
}
