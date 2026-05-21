/*
  Project 3: Product Card Gallery

  Main features:
  1. Show product cards dynamically
  2. Search products by name
  3. Filter products by category
  4. Show total matching products

  This project is very important before React because React also displays
  data using arrays and objects.
*/


/*
  Array of product objects.

  In real full-stack applications, product data usually comes from:
  1. Backend API
  2. Database
  3. JSON file

  Here, we are using static data for beginner practice.
*/
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "electronics",
    price: 1499,
    description: "Comfortable wireless headphones with clear sound quality.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "electronics",
    price: 2499,
    description: "Track your fitness, calls, and notifications easily.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    id: 3,
    name: "Casual T-Shirt",
    category: "fashion",
    price: 599,
    description: "Soft cotton t-shirt suitable for daily wear.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    id: 4,
    name: "Leather Wallet",
    category: "accessories",
    price: 799,
    description: "Premium wallet with multiple card sections.",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93"
  },
  {
    id: 5,
    name: "Notebook Set",
    category: "stationery",
    price: 299,
    description: "Useful notebook set for students and professionals.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db"
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    category: "electronics",
    price: 1299,
    description: "Portable speaker with powerful bass and long battery life.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1"
  },
  {
    id: 7,
    name: "Travel Backpack",
    category: "accessories",
    price: 1899,
    description: "Spacious backpack suitable for travel and college.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
  },
  {
    id: 8,
    name: "Running Shoes",
    category: "fashion",
    price: 2199,
    description: "Comfortable running shoes for daily exercise.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  }
];


/*
  Selecting important HTML elements.
*/
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const productCount = document.getElementById("productCount");


/*
  Function to display products on the webpage.

  Parameter:
  productList = array of products to display
*/
function displayProducts(productList) {

  /*
    Clear old product cards before showing new ones.
    This prevents duplicate cards.
  */
  productGrid.innerHTML = "";


  /*
    Update product count message.
  */
  productCount.innerText = `Showing ${productList.length} product(s)`;


  /*
    If no product is found, show empty message.
  */
  if (productList.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-message">
        <h2>No Products Found</h2>
        <p>Try searching with another keyword or category.</p>
      </div>
    `;
    return;
  }


  /*
    Loop through every product and create a card.
  */
  productList.forEach(function (product) {

    /*
      Create a new div element for product card.
    */
    const productCard = document.createElement("div");

    /*
      Add CSS class to the card.
    */
    productCard.className = "product-card";


    /*
      Insert dynamic HTML inside the card.

      Template literals allow us to insert product data using ${}.
    */
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">

      <div class="product-info">
        <span class="category">${product.category}</span>

        <h2>${product.name}</h2>

        <p>${product.description}</p>

        <div class="product-footer">
          <span class="price">₹${product.price}</span>

          <button class="add-btn" onclick="addToCart(${product.id})">
            Add
          </button>
        </div>
      </div>
    `;


    /*
      Add product card to the product grid section.
    */
    productGrid.appendChild(productCard);
  });
}


/*
  Function to filter products based on search and category.
*/
function filterProducts() {

  /*
    Get search text and convert it to lowercase.

    Lowercase helps us compare text easily.
    Example:
    "Phone" and "phone" will be treated the same.
  */
  const searchText = searchInput.value.toLowerCase();

  /*
    Get selected category from dropdown.
  */
  const selectedCategory = categoryFilter.value;


  /*
    filter() creates a new array based on condition.
  */
  const filteredProducts = products.filter(function (product) {

    /*
      Check whether product name includes search text.
    */
    const matchesSearch = product.name.toLowerCase().includes(searchText);

    /*
      Check category.

      If selectedCategory is "all", show all categories.
      Otherwise, match product category with selected category.
    */
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;


    /*
      Product will be included only if both conditions are true.
    */
    return matchesSearch && matchesCategory;
  });


  /*
    Display filtered products.
  */
  displayProducts(filteredProducts);
}


/*
  Function for Add button.

  For now, we are only showing alert.
  Later, this can become cart functionality.
*/
function addToCart(productId) {

  /*
    find() finds one product by id.
  */
  const selectedProduct = products.find(function (product) {
    return product.id === productId;
  });


  /*
    Show simple message.
  */
  alert(`${selectedProduct.name} added to cart!`);
}


/*
  Event listener for search input.

  input event runs immediately when user types.
*/
searchInput.addEventListener("input", filterProducts);


/*
  Event listener for category dropdown.

  change event runs when user selects a category.
*/
categoryFilter.addEventListener("change", filterProducts);


/*
  Display all products when page loads.
*/
displayProducts(products);