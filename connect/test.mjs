import { getProduct } from "../connect/product_connect.mjs"; // Replace with the correct path to your file

const req = {
  params: {
    id: 123, // Replace with the specific product ID you want to test
  },
};

const res = {
  json: (data) => {
    console.log('Retrieved product:', data);
    // Process the retrieved product data
  },
  status: (statusCode) => {
    return {
      json: (data) => {
        console.error('Error:', data);
        // Handle error responses
      },
    };
  },
};

getProduct(req, res);
