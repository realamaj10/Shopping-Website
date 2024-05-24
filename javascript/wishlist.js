document.addEventListener('DOMContentLoaded', () => {
  // Clear cart data on page refresh
  // This loop iterates through all items in localStorage and removes those that have keys starting with 'product_'
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('product_')) {
      localStorage.removeItem(key);
    }
  }
  // Remove the 'cartCount' item from localStorage
  localStorage.removeItem('cartCount');

  // Initialize cart count to zero
  let cartCount = 0;

  // Function to update the cart count displayed in the header
  const updateCartCount = () => {
    // Select the cart count element and update its text content with the current cart count
    document.getElementById('cart-count').textContent = cartCount;
    // Store the updated cart count in localStorage
    localStorage.setItem('cartCount', cartCount);
  };

  // Function to add a product to the cart
  const addToCart = (product) => {
    // Increment the cart count
    cartCount++;
    // Update the displayed cart count
    updateCartCount();
    // Store the product data in localStorage with a unique key
    localStorage.setItem(`product_${cartCount}`, JSON.stringify(product));
  };

  // Add event listeners to all "Add to Cart" buttons
  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      // Find the closest parent element with the class 'wishlist-item-row' to get the product details
      const itemRow = event.target.closest('.wishlist-item-row');
      // Create a product object with details from the wishlist item row
      const product = {
        name: itemRow.querySelector('.description').textContent, // Get product name
        imageSrc: itemRow.querySelector('img').src, // Get product image source
        price: parseFloat(itemRow.querySelector('.price').textContent.replace('$', '')) // Get product price and convert to number
      };
      // Add the product to the cart
      addToCart(product);
    });
  });

  // Initial update of the cart count
  updateCartCount();
});
