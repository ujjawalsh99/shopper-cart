# Shopper Cart

ShopperCart is a modern Angular-based shopping cart application. It provides a seamless user experience for browsing products, adding them to the cart, and managing the cart.

## Hosted Application
The ShopperCart application is hosted and can be accessed at:

[ShopperCart Live Website](https://github.com/ujjawalsh99/shopper-cart.git)

Navigate to the above link to explore the live version of the application.

## Features
- **Product Listing**: Displays a list of products fetched from an external API.
- **Cart Management**: Add, remove, and clear items in the cart.
- **Responsive Design**: Optimized for various screen sizes.

## Components
The application consists of the following components:

1. **HeaderComponent**: Displays the application title and cart icon with the item count.
2. **ProductGroupComponent**: Groups and displays a list of products.
3. **ProductCardComponent**: Represents individual product details.
4. **CartComponent**: Manages and displays items in the cart.
5. **ShimmerComponent**: Provides a loading shimmer effect.

## Data Source
The product details are fetched from an external API defined in the `PRODUCT_URL` constant in the `utilities/constant.ts` file.

## Prerequisites
- Node.js (v14 or later)
- Angular CLI (v14.2.13 or later)

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/ujjawalsh99/shopper-cart.git
cd shopper-cart
```

### Install Dependencies
```bash
npm install
```

### Run the Development Server
```bash
npm start
```
Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you make any changes to the source files.

### Run Unit Tests
```bash
ng test
```
Executes the unit tests via [Karma](https://karma-runner.github.io).

### Build the Application
```bash
ng build
```
Builds the project and stores the output in the `dist/` directory.


## Project Structure
```
shopper-cart/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── cart/
│   │   │   ├── header/
│   │   │   ├── product-card/
│   │   │   ├── product-group/
│   │   │   ├── shared/
│   │   │       └── shimmer/
│   │   ├── service/
│   │   └── utilities/
│   ├── assets/
│   ├── environments/
│   └── index.html
├── angular.json
├── package.json
└── README.md
```
