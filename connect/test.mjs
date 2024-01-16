import productControllers from "./product_connect.mjs"; // Replace with the correct path to your file
import deliveryControllers from "./delivery_connect.mjs"; // Replace with the correct path to your file
import userControllers from "./user_connect.mjs"
const req = {
  params: {
    id: 1, // Replace with the specific product ID you want to test
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

const user = {
  // p_product_name: 'Acer Swift 123456',
  // p_new_price: 480,
  // p_discount_percentage: 10,
  // p_display: '14 inch Full HD IPS',
  // p_cpu: 'Pentium Silver N6000',
  // p_gpu_name: 'Intel UHD',
  // p_ram: 4,
  // p_ssd: 128,
  // p_manufacturer: 'Acer',
  // p_stock_quantity: 315,
  // p_material: 'Plastic-Aluminum',
  // p_operating_system: 'Windows 10',
  // p_cpu_type: 'i3',
  // p_available: 1,
  // p_gpu_onboard: 1,
  // p_hdd: 256,
  // p_product_id: '65',
  // p_stock_quantity: 100,
  p_email:'user@example.com',
  p_phone:'0123456789',
  p_address:'123 Nguyen Van Linh',
  p_name:'User',
  p_password:'123456',
  p_password_confirm:'123456',
}
const test =  async () => {
  // const result = await userControllers.after_insert_user();
  // const result = await deliveryControllers.changeItemQuantity({
  //   p_product_id: 6,
  //   p_user_id: 9,
  //   dif: 1
  // })
  const result = await deliveryControllers.getCart(9);
  console.log(result)
}
test();



