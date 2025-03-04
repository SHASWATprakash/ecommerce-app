# E-commerce API with TypeScript, Express, and Firebase

This project is an e-commerce API built with TypeScript, Express, and Firebase, deployed on Vercel.

## Features

- CRUD operations for products
- Search and filter functionality
- Firebase integration for data storage
- Vercel deployment for serverless functions

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm
- Firebase account
- Vercel account

### Installation

1. Clone the repository:
git clone https://github.com/SHASWATprakash/ecommerce-ts-firebase.git cd ecommerce-ts-firebase
javascript



2. Install dependencies:
npm install
javascript



3. Set up environment variables:
Create a `.env` file in the root directory and add the following:
FIREBASE_PROJECT_ID=your-project-id FIREBASE_CLIENT_EMAIL=your-client-email FIREBASE_PRIVATE_KEY=your-private-key

4. Run the development server:
npm run dev
javascript



## API Endpoints

- `POST /api/products`: Create a new product
- `GET /api/products/:id`: Get a product by ID
- `PUT /api/products/:id`: Update a product
- `DELETE /api/products/:id`: Delete a product
- `GET /api/products/search`: Search and filter products

## Deployment

The API is automatically deployed to Vercel when changes are pushed to the main branch.
