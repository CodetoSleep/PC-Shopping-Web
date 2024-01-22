import connection from "../connect/config.mjs";

function createProduct({
  p_product_name,
  p_old_price,
  p_new_price = 0,
  p_discount_percentage,
  p_weight = 1.8,
  p_display,
  p_cpu,
  p_cpu_type,
  p_gpu_name,
  p_gpu_onboard,
  p_ram,
  p_ssd,
  p_hdd = 256,
  p_operating_system,
  p_color ='red',
  p_battery = '71wh',
  p_camera = 'vip',
  p_rating_average = 0,
  p_rating_amount = 0,
  p_available,
  p_sold = 0,
  p_manufacturer,
  p_manufacturer_year = 2022,
  p_material,
  p_stock_quantity
}) {
  return new Promise((resolve, reject) => {
    const sql = `CALL createProduct(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    connection.query(
      sql,
      [
        p_product_name,
        p_old_price * (100 - p_discount_percentage) / 100,
        p_old_price,
        p_discount_percentage,
        p_weight,
        p_display,
        p_cpu,
        p_cpu_type,
        p_gpu_name,
        p_gpu_onboard,
        p_ram,
        p_ssd,
        p_hdd,
        p_operating_system,
        p_color,
        p_battery,
        p_camera,
        p_rating_average,
        p_rating_amount,
        p_available,
        p_sold,
        p_manufacturer,
        p_manufacturer_year,
        p_material,
        p_stock_quantity
      ],
      (err, result) => {
        if (err) {
          reject(err);
          console.log(err)
        } else {
          resolve('success');
        }
      }
    );
  });
}


function getProduct(productId) {
  return new Promise((resolve, reject) => {
    const sql = `CALL getOneProduct(?)`;

    connection.query(sql, [productId], (err, result) => {
      if (err) {
        // console.error('Error:', err);
        reject({ message: 'error' });
      } else {
        const products = result[0][0];

        resolve({ product: products });
      }
    });
  });
}


function getAllProducts({page = 1, minPrice = 0, maxPrice = 99999999, ram = null, nsx = null, sortPrice = 1, sortRating= 1, sortSold= 1, available = 1}) {
  console.log(parseFloat(page), parseFloat(minPrice), parseFloat(maxPrice), ram, nsx, parseInt(sortPrice), parseInt(sortRating), parseInt(sortSold), parseInt(available));
  return new Promise((resolve, reject) => {
    const sql = 'CALL getAllProducts(?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(sql, [parseFloat(page), parseFloat(minPrice), parseFloat(maxPrice), ram, nsx, parseInt(sortPrice), parseInt(sortRating), parseInt(sortSold), parseInt(available)], (err, result) => {
      if (err) {
        reject(err);
        reject({message: "error"});
      } else {
        resolve({products: result[0], message: "success"}); // Assuming the result is an array of products
      }
    });
  });
}

function updateProduct(
  {p_product_id,
  p_product_name,
  p_new_price,
  p_old_price = 0,
  p_discount_percentage,
  p_weight = 1.5,
  p_display = '15.6 inch OLED FulHD+',
  p_cpu,
  p_cpu_type,
  p_gpu_name,
  p_gpu_onboard,
  p_ram,
  p_ssd,
  p_hdd = 256,
  p_operating_system = 'Win 11',
  p_color = 'red',
  p_battery = 'blue',
  p_camera = 'vip',
  p_rating_average = 1,
  p_rating_amount = 2,
  p_available,
  p_sold = 100,
  p_manufacturer,
  p_manufacturer_year = 2021,
  p_material = 'Metal',
  p_stock_quantity}
) {
  console.log( {p_product_id,
    p_product_name,
    p_new_price,
    p_old_price,
    p_discount_percentage,
    p_weight,
    p_display,
    p_cpu,
    p_cpu_type,
    p_gpu_name,
    p_gpu_onboard,
    p_ram,
    p_ssd,
    p_hdd ,
    p_operating_system,
    p_color,
    p_battery ,
    p_camera,
    p_rating_average ,
    p_rating_amount ,
    p_available,
    p_sold,
    p_manufacturer,
    p_manufacturer_year,
    p_material,
    p_stock_quantity})
  return new Promise((resolve, reject) => {
    const sql = `CALL updateProduct(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    connection.query(
      sql,
      [
        parseInt(p_product_id), // Added p_product_id as the first parameter
        p_product_name,
        p_old_price * (100 - p_discount_percentage)/100,
        p_old_price,
        p_discount_percentage,
        p_weight,
        p_display,
        p_cpu,
        p_cpu_type,
        p_gpu_name,
        p_gpu_onboard,
        p_ram,
        p_ssd,
        p_hdd,
        p_operating_system,
        p_color,
        p_battery,
        p_camera,
        p_rating_average,
        p_rating_amount,
        p_available,
        p_sold,
        p_manufacturer,
        p_manufacturer_year,
        p_material,
        p_stock_quantity,
      ],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve('success');
        }
      }
    );
  });
}

function deleteProduct1(p_product_id) {
  return new Promise((resolve, reject) => {
    connection.beginTransaction((err) => {
      if (err) {
        reject(err);
      }

      const checkPurchaseQuery = 'SELECT COUNT(*) AS purchase_count FROM Purchase_item WHERE product_id = ?';
      connection.query(checkPurchaseQuery, [p_product_id], (err, results) => {
        if (err) {
          connection.rollback(() => {
            reject(err);
          });
        }

        const purchaseCount = results[0].purchase_count;

        if (purchaseCount > 0) {
          connection.rollback(() => {
            const error = new Error('Cannot delete product. Product is being purchased.');
            error.code = 'CANNOT_DELETE_PRODUCT';
            reject(error);
          });
        } else {
          const moveDeletedProductQuery = 'INSERT INTO Deleted_Product SELECT * FROM product WHERE product_id = ?';
          connection.query(moveDeletedProductQuery, [p_product_id], (err) => {
            if (err) {
              connection.rollback(() => {
                reject(err);
              });
            }

            const deleteImageQuery = 'DELETE FROM Image WHERE product_id = ?';
            connection.query(deleteImageQuery, [p_product_id], (err) => {
              if (err) {
                connection.rollback(() => {
                  reject(err);
                });
              }

              const deleteProductQuery = 'DELETE FROM product WHERE product_id = ?';
              connection.query(deleteProductQuery, [p_product_id], (err) => {
                if (err) {
                  connection.rollback(() => {
                    reject(err);
                  });
                }

                connection.commit((err) => {
                  if (err) {
                    connection.rollback(() => {
                      reject(err);
                    });
                  }
                  resolve('success');
                });
              });
            });
          });
        }
      });
    });
  });
}

function deleteProduct(p_product_id) {
  console.log(p_product_id);
  return new Promise((resolve, reject) => {
    const sql = 'CALL deleteProduct(?)';
    connection.query(sql, [parseInt(p_product_id)], (err, result) => {
      if (err) {
        console.log(err)
        reject({message: "error"});
      } else {
        resolve({message: "success"}); // Assuming the result is an array of products
      }
    });
  });
}

export default { 
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct
};
