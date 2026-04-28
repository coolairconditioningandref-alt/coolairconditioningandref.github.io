let cart = [];

function addToCart(service) {
  cart.push(service);
  displayCart();
}

function displayCart() {
  let list = document.getElementById("cartItems");
  list.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
}

function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
  } else {
    alert("Booking Confirmed!");
    cart = [];
    displayCart();
  }
}

function scrollToServices() {
  document.getElementById("services").scrollIntoView();
}
