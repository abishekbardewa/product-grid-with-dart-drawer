### This project was build in

React 18 and Bootstrap 5

### How to run this application:

    1. First clone the project
    2. Go to cloned directory and run npm install
    3. Run npm start

### My Approach

1. First I copied the product array and add it into the public folder so that I can use fetch for local data.
2. After that I fetched the product data and sliced and filter what are the actual product info I required to build
   this app.
3. Now comes the design part: As I checked the product json data and design sketch.
   I some ideas about how can I layout this project.
4. Layout Explanation:

### App Component:

It is main component where you can see two child component Navbar and FeaturedProducts Component,and also getProduct function which is used to fetch the product from product.json file.

### Navbar Component:

It renders the navbar item carticon and CartComponent.CartComponent is a modal which is triggered when clicked on cart icon.
Featured component:
It render the Product Component

### Product component:

It renders the ProductImages component, which renders variant component,which renders Color and Size component
AddToCart button is disabled untill the user selects color and size of product.

### Estimated time to complete your test.

2 days

### What is pending from your side?

I have built all the fuctionality which was asked except the made for you design part
