# Project 3: Product Card Gallery

## Project Overview

This is a beginner-friendly **Product Card Gallery** built using **HTML, CSS, and JavaScript**. The project displays product cards dynamically from an array of product objects and allows users to search products by name, filter products by category, and click an Add button to show an add-to-cart alert.

This project is useful before learning React because modern frontend apps commonly render UI from arrays and objects.

---

## Project Objective

The objective of this project is to teach students how to:

- Store product data using an array of objects
- Render product cards dynamically using JavaScript
- Search products by name
- Filter products by category
- Update product count based on matching results
- Use `find()` to select a specific product

---

## What Students Will Learn

| Topic | Learning |
| --- | --- |
| Array of Objects | Store multiple products in structured format |
| DOM Rendering | Create and display product cards dynamically |
| Search Logic | Match product names using user input |
| Filter Logic | Show products based on selected category |
| Events | Use `input` and `change` events |
| E-commerce Basics | Understand product listing and add-to-cart flow |

---

## Features

- Display product cards dynamically
- Show product image, category, name, description, and price
- Live search by product name
- Category filter dropdown
- Combined search and category filtering
- Dynamic product count message
- Empty message when no product is found
- Add button with cart alert
- Responsive product grid layout

---

## Folder Structure

```text
Project 3: Product Card Gallery/
├── index.html
├── style.css
├── script.js
└── README.md
```

| File | Purpose |
| --- | --- |
| `index.html` | Creates the page header, search input, category filter, count text, and product grid |
| `style.css` | Styles the product cards, grid layout, filter section, buttons, and responsive design |
| `script.js` | Stores product data, renders cards, handles search, filter, and add-to-cart alert |
| `README.md` | Explains the project |

---

## Technologies Used

- HTML5
- CSS3
- JavaScript

---

## How to Run the Project

1. Open the project folder.
2. Find the `index.html` file.
3. Open `index.html` in any web browser.
4. Use the search box to search products by name.
5. Use the category dropdown to filter products.
6. Click the **Add** button on any product to see the cart alert.

No installation or server is required because this is a static frontend project.

---

## Key JavaScript Concepts Used

```js
array
object
document.getElementById()
function
parameter
forEach()
filter()
find()
includes()
toLowerCase()
innerText
innerHTML
createElement()
appendChild()
template literals
addEventListener()
input event
change event
alert()
```

---

## Explanation of Array of Objects

An **array of objects** means multiple objects stored inside one array. In this project, each product is an object, and all products are stored inside the `products` array.

Example product object:

```js
{
  id: 1,
  name: "Wireless Headphones",
  category: "electronics",
  price: 1499,
  description: "Comfortable wireless headphones with clear sound quality.",
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
}
```

Each product has related details:

| Property | Meaning |
| --- | --- |
| `id` | Unique product number |
| `name` | Product name |
| `category` | Product category |
| `price` | Product price |
| `description` | Short product details |
| `image` | Product image URL |

This structure is commonly used in e-commerce websites, course catalogues, dashboards, and backend API responses.

---

## Product Rendering, Search, Filter, and Add-to-Cart

### Product Rendering

The `displayProducts(productList)` function receives an array of products and displays them on the page. It clears the old cards, updates the product count, loops through products using `forEach()`, creates a card using `createElement()`, and adds it to the product grid using `appendChild()`.

### Search

The search input uses the `input` event. When the user types, `filterProducts()` runs immediately. Product names are converted to lowercase using `toLowerCase()` so the search works even if the user types uppercase or lowercase letters.

### Filter

The category dropdown uses the `change` event. If the selected value is `all`, all categories can be shown. Otherwise, only products from the selected category are displayed.

### Combined Search and Filter

The project checks both conditions:

- Product name must match the search text
- Product category must match the selected category

Only products that match both conditions are displayed.

### Add-to-Cart Alert

The Add button calls `addToCart(product.id)`. The `find()` method searches for the selected product by ID and shows an alert message like:

```text
Wireless Headphones added to cart!
```

---

## Full-Stack Connection

This project is directly connected to real-world e-commerce and catalogue applications.

| This Project Concept | Full-Stack Usage |
| --- | --- |
| Product cards | E-commerce product listing page |
| Array of products | Product API response |
| Product object | MongoDB product document |
| Search by name | Search products from database |
| Category filter | Filter products by query/category |
| Add button | Add product to cart |
| Product grid | Course catalogue, store page, admin product panel |

In a full-stack application, product data usually comes from a backend API instead of a static JavaScript array. The backend can fetch products from a MongoDB collection and send them to the frontend as JSON.

Example full-stack flow:

```text
MongoDB Product Collection -> Backend Product API -> Frontend Product Cards
```

---

## Important Interview Questions and Answers

### 1. What is an array of objects?

An array of objects is a collection where each item is an object with multiple related properties.

### 2. Why do we use an array of objects for products?

Because each product has multiple details such as name, price, category, description, and image.

### 3. What is dynamic rendering?

Dynamic rendering means creating and displaying HTML using JavaScript data instead of writing every card manually.

### 4. What is `forEach()` used for?

`forEach()` loops through all products and helps display each product card.

### 5. What is `filter()` used for?

`filter()` creates a new array containing only the products that match the search and category conditions.

### 6. What is `find()` used for?

`find()` returns the first product that matches a condition, such as a selected product ID.

### 7. What does `includes()` do?

`includes()` checks whether a string contains another string.

### 8. Why do we use `toLowerCase()` in search?

It makes search case-insensitive, so `watch`, `Watch`, and `WATCH` can match correctly.

### 9. What is the purpose of `innerHTML`?

`innerHTML` is used to insert dynamic HTML content into an element.

### 10. How does this project connect to e-commerce websites?

E-commerce websites use the same idea to display products from APIs, search items, filter categories, and add products to cart.

---

## Learning Outcome

After completing this project, students will understand how to use an array of objects to store product data, render product cards dynamically, search products by name, filter products by category, and use `find()` for selecting a product.

---

## Future Improvements

- Add real cart functionality
- Show cart item count
- Add product details page
- Add price range filter
- Add sorting by price
- Add product ratings
- Fetch products from an API
- Store products in MongoDB
- Connect to a backend e-commerce API

---

## Author

**Made by SK SAHIL**  
**Professional Coding Tutor | Freelance AI Developer**
