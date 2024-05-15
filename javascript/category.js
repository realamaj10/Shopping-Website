const galleryContainer = document.getElementById('galleryContainer');

//Adding information for each image and its details
const imageData = [
  { src: 'css/images/porto-sticky-info.jpg', category: 'DRESS, TROUSERS', title: 'Black Jacket', rating: 5, price: '$55.00' },
  { src: 'css/images/sale-black-dress.jpg', category: 'HEADPHONE, WATCHES', title: 'Fashion Watch', rating: 5, price: '$1,699.00' },
  { src: 'css/images/menshoes-4.jpEg', category: 'SHOES, TOYS', title: 'Gentle Shoes', rating: 5, price: '$299.00' },
  
  { src: 'css/images/jeans wear.jpg', category: 'HEADPHONE, T-SHIRT', title: 'Jeans Wear', rating: 5, price: '$108.00' },
  { src: 'css/images/men-shoes-black.jpg', category: 'SHOES, TOYS', title: 'Men Shoes Black', rating: 5, price: '$259.00' },
  { src: 'css/images/woman-jacket.jpg', category: 'HEADPHONE, WATCHES', title: 'Men Watch', rating: 5, price: '$259.00' },
  
  { src: 'css/images/red-bag.jpg', category: 'SHOES, TOYS', title: 'Woman Red Bag', rating: 5, price: '$29.00 - $39.00' },
  { src: 'css/images/woman-jacket.jpg', category: 'DRESS, TOYS', title: 'Woman Black Blouse', rating: 5, price: '$129.00 - $185.00' },
  { src: 'css/images/white cap.jpg', category: 'CAPS, T-SHIRTS', title: 'White Cap', rating: 5, price: '$88.00 - $108.00' },
  
  { src: 'css/images/woman-jacket.jpg', category: 'DRESS, TROUSERS', title: 'Woman Jacket', rating: 5, price: '$199.00' },
  { src: 'css/images/porto-sticky-info.jpg', category: 'DRESS, TROUSERS', title: 'Porto Sticky Info', rating: 5, price: '$399.00' },
  { src: 'css/images/jeans wear.jpg', category: 'HEADPHONE, T-SHIRTS', title: 'Jeans Wear', rating: 5, price: '$108.00' },
];

//This is a function to create a gallery item
function createGalleryItem(imageData) {
  const item = document.createElement('div');
  item.classList.add('gallery-item');

  const image = document.createElement('img');
  image.src = imageData.src; 
  image.alt = imageData.title; 
  item.appendChild(image);

  const category = document.createElement('div');
  category.classList.add('category');
  category.textContent = imageData.category;
  item.appendChild(category);

  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent = imageData.title;
  item.appendChild(title);

  const rating = document.createElement('div');
  rating.classList.add('rating');
  for (let i = 0; i < 5; i++) {
    const star = document.createElement('span');
    star.textContent = '★';
    rating.appendChild(star);
  }
  item.appendChild(rating);

  const price = document.createElement('div');
  price.classList.add('price');
  price.textContent = imageData.price;
  item.appendChild(price);

  return item;
}

//This is a javascript function to create a gallery with four rows each containing three images and its details
function createGallery(data) {
  for (let i = 0; i < data.length; i++) {
    const row = document.createElement('div');
    row.classList.add('gallery-row');
    for (let j = 0; j < 3; j++) {
      const index = i * 3 + j;
      if (index >= data.length) break;
      const item = createGalleryItem(data[index]);
      row.appendChild(item);
    }
    galleryContainer.appendChild(row);
  }
}

//Here we are calling the previous function
createGallery(imageData);
