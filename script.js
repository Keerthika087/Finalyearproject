


// nav profile
function navigateTo(url) {
    window.location.href = url;
  }

  function toggleDropdown() {
    const dropdown = document.getElementById("profileDropdown");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }

  // Optional: Close dropdown if clicked outside
  window.addEventListener("click", function (e) {
    const profileIcon = document.getElementById("profile");
    const dropdown = document.getElementById("profileDropdown");
    if (!profileIcon.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });

  // localStorage.removeItem('cart');
  // ADD TO CARD PAGE
  // Function to add a product to the cart
function addToCart(productId, productName, productPrice) {
  // Retrieve the current cart from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the product is already in the cart
  const existingProduct = cart.find(item => item.id === productId);

  if (existingProduct) {
    // If the product is already in the cart, increase its quantity
    existingProduct.quantity += 1;
  } else {
    // If the product is not in the cart, add it
    cart.push({
      id: productId,
      name: productName,
      price: productPrice,
      quantity: 1,
    });
  }

  // Save the updated cart back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Optional: Show a confirmation message
  alert(`${productName} added to cart!`);
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.av-card');
    const productId = card.getAttribute('data-product-id');
    const productName = card.querySelector('h2').innerText;
    const productPrice = parseFloat(card.querySelector('h3').innerText.replace('₹', ''));

    // Add the product to the cart
    addToCart(productId, productName, productPrice);

    // Redirect to the order page (optional)
    window.location.href = 'order.html';
  });
});