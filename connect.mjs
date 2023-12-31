//TEST getProduct
// import { getProduct } from './connect/product_connect.mjs'; // Update the path accordingly

// const req = {
//   params: {
//     id: 2, 
//   },
// };

// const res = {
//   json: (data) => {
//     console.log('Retrieved product:', data);
//     // Process the retrieved product data
//   },
//   status: (statusCode) => {
//     return {
//       json: (data) => {
//         console.error('Error:', data);
//       },
//     };
//   },
// };

// getProduct(req, res);

//TEST getAllProduct
// import { getAllProducts } from './connect/product_connect.mjs'; // Update the path accordingly

// const req = {
//   query: {
//     page: 1,
//     min_price: null,
//     max_price: null,
//     ram: null,
//     nsx: null,
//     sort_price: 0,
//     sort_rating: 0,
//     sort_sold: 0,
//     available: 1,
//   },
// };

// const res = {
//   json: (data) => {
//     console.log('Retrieved products:', data);

//   },
//   status: (statusCode) => {
//     return {
//       json: (data) => {
//         console.error('Error:', data);
//       },
//     };
//   },
// };

// // Call the getAllProducts function with the simulated request and response objects
// getAllProducts(req.query.page, req.query.min_price, req.query.max_price, req.query.ram, req.query.nsx, req.query.sort_price, req.query.sort_rating, req.query.sort_sold, req.query.available)
//   .then((products) => {
//     res.json({ data: { products } });
//   })
//   .catch((error) => {
//     res.status(500).json({ status: 'error', message: 'Failed to fetch products' });
//   });


//TEST updateProduct
import { updateProduct } from "./connect/product_connect.mjs";
const updatedProduct = {
    product_id: 123, // Replace with the specific product ID to update
    product_name: 'Updated Product Name',
    new_price: 99.99,
    old_price: 129.99,
    discount_percentage: 15,
    weight: 1.5,
    display: 'Full HD',
    cpu: 'Intel Core i7',
    cpu_type: 'Quad-Core',
    gpu_name: 'NVIDIA GeForce RTX 3080',
    gpu_onboard: true,
    ram: 16,
    ssd: 512,
    hdd: 1000,
    operating_system: 'Windows 11',
    color: 'Black',
    battery: 'Lithium-ion',
    camera: '1080p',
    rating_average: 4.5,
    rating_amount: 1000,
    available: true,
    sold: 500,
    manufacturer: 'ABC Corp',
    manufacturer_year: 2023,
    material: 'Aluminum',
    stock_quantity: 50,
  };
  
  // Call the updateProduct function with the simulated updated product data
  updateProduct(
    updatedProduct.product_id,
    updatedProduct.product_name,
    updatedProduct.new_price,
    updatedProduct.old_price,
    updatedProduct.discount_percentage,
    updatedProduct.weight,
    updatedProduct.display,
    updatedProduct.cpu,
    updatedProduct.cpu_type,
    updatedProduct.gpu_name,
    updatedProduct.gpu_onboard,
    updatedProduct.ram,
    updatedProduct.ssd,
    updatedProduct.hdd,
    updatedProduct.operating_system,
    updatedProduct.color,
    updatedProduct.battery,
    updatedProduct.camera,
    updatedProduct.rating_average,
    updatedProduct.rating_amount,
    updatedProduct.available,
    updatedProduct.sold,
    updatedProduct.manufacturer,
    updatedProduct.manufacturer_year,
    updatedProduct.material,
    updatedProduct.stock_quantity,
  )
    .then((result) => {
      console.log('Product updated successfully:', result);
      // Process the result or handle success
    })
    .catch((error) => {
      console.error('Error updating product:', error);
      // Handle errors during the update process
    });