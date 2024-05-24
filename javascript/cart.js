document.addEventListener('DOMContentLoaded', () => {
  // Function to retrieve items from localStorage and display them in the cart
  const displayCartItems = () => {
    // Select the cart container element
    const cartContainer = document.getElementById('cart-items');
    // Clear any existing content in the cart container
    cartContainer.innerHTML = '';

    // Initialize the cart count to zero
    let cartCount = 0;

    // Iterate over localStorage items to find cart products
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      // Check if the key starts with 'product_'
      if (key.startsWith('product_')) {
        // Parse the product data from localStorage
        const product = JSON.parse(localStorage.getItem(key));
        
        // Increment the cart count for each product found
        cartCount++;

        // Create a div element to display the product
        const productDiv = document.createElement('div');
        productDiv.classList.add('cart-item');

        // Create an img element for the product image
        const img = document.createElement('img');
        img.src = product.imageSrc;
        img.alt = product.name;

        // Create a p element for the product name
        const name = document.createElement('p');
        name.textContent = product.name;

        // Create a p element for the product price
        const price = document.createElement('p');
        price.textContent = `$${product.price.toFixed(2)}`;

        // Create a delete button for the product
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.dataset.key = key; // Store the key in a data attribute

        // Append the created elements to the product div
        productDiv.appendChild(img);
        productDiv.appendChild(name);
        productDiv.appendChild(price);
        productDiv.appendChild(deleteButton);

        // Append the product div to the cart container
        cartContainer.appendChild(productDiv);
      }
    }

    // Update the cart count display
    document.getElementById('cart-count').textContent = cartCount;
  };

  // Function to delete a cart item
  const deleteCartItem = (key) => {
    // Remove the item from localStorage
    localStorage.removeItem(key);
    // Refresh the cart display
    displayCartItems();
  };

  // Event delegation to handle delete button clicks
  document.getElementById('cart-items').addEventListener('click', (event) => {
    // Check if the clicked element is a delete button
    if (event.target.classList.contains('delete-btn')) {
      // Retrieve the key from the button's data attribute
      const key = event.target.dataset.key;
      // Call the function to delete the cart item
      deleteCartItem(key);
    }
  });

  // Call the function to display items in the cart initially
  displayCartItems();
});
