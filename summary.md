This wep application was built using ReactJS and Bootstrap. Bootstrap was used only for the dropdown filter/sort menu and the svg icons.
The app represents a simple ecommerce store with functionality to browse, like and shop products.
There are 3 categories with the same Grid design: Sneakers, T-Shirts and Shorts.
The data for all of them is fetched from 3 individual .json files in the "public" folder.

Backgrounds were designed inside the code editor.

The app has conditional rendering for:
- discounted price
- whether a product is liked or not (the heart icon is changed on like/unlike)
- number of products in the cart (a number is displayed on top of the cart if the cart is not empty)
- the sub-heading for T-Shirts (the text is changed based on whether there is one or multiple t-shirts available)

Implemented functionalities:
- Load a specific number of products depending on screen size (Desktop - 20, Mobile - 5)
- Filter products based on multiple options
- Sort products by relevance, price, rating, and alphabetically
- Like products, upon success, an alert is presented (liked products are stored in the local storage of the browser)
- Add products to cart, upon success, an alert is presented (products added to the cart are also stored in the local storage)
- Unlike products (remove products from the liked products list / local storage)
- Remove products from cart (remove products from the cart list / local storage)
- Close feature for the mobile navigation menu (on click, the user is redirected to the respective page and the menu is closed)


One of the challenges I faced building this app was the filtering feature.
Currently, when the user filters any products, all matches are displayed instead of just 20 for desktop and 5 for mobile.
