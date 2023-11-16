## BRK frontend developer take-home assignment

Welcome! Thank you for taking the time to complete this take-home assignment for our frontend engineering position.

The goal of this assignment is to build out a very simple 'featured products page' which displays products in a specific category in our backend.

The component you will be writing will live at `/src/components/ProductGrid/`. I've already provided some stubs for where your code should go.

The rules for this challenge are:
- The project must run with `npm run start`
- The products should be fetched via the `GET_PRODUCTS_IN_CATEGORY` graphql query in `src/components/ProductGrid/useProductGrid.js`
- Products should list the correct price
    - In the query given, this will be: `price_range.minimum_price.final_price.value`
- You shouldn't add any additional packages.
- You should use tailwindcss classes and/or the css classes provided in `src/components/ProductGrid/productGrid.module.css` for styling. You may modify these if you wish, but it should look _similar_ to the design provided below.
- There shouldn't be any errors logged in the console.
- There should be no warnings returned by eslint
    - NOTE: Don't worry about the babel-preset-react-app related warning if it appears- thats expected.
- The code should be formatted correctly.
    - HINT: `npm run format`

Bonus points:
- Write unit tests
- Make it prettier

### Design

- ### Desktop width
![Desktop Wireframe](desktop_design.png?raw=true "Desktop Wireframe")
- ### Mobile width
![Mobile Wireframe](mobile_design.png?raw=true "Mobile Wireframe")

### Submission

- You may either email your project to me in the form of a .zip file (use google drive for this)
- You may also make a _private_ repo on github and give me access to it.

Good luck! Email me if you have any questions: john@blueridgeknives.com