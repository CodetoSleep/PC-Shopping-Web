import connection from "../connect/config.mjs";

function getProduct(req, res) {
  const productId = req.params.id;
  const sql = `CALL getOneProduct(?)`;

  connection.query(sql, [productId], (err, result) => {
    if (err) {
      console.error('Error:', err);
      return res.status(500).json({
        status: 'error',
        message: 'Failed to fetch product',
      });
    }

    const products = result[0];
    products.forEach((product, index) => {
      console.log(`Product ${index + 1}:`, product);
    });

    res.json({
      data: {
        products,
      },
    });
  });
}


function getAllProducts(page, minPrice, maxPrice, ram, nsx, sortPrice, sortRating, sortSold, available) {
  return new Promise((resolve, reject) => {
    const sql = 'CALL getAllProducts(?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(sql, [page, minPrice, maxPrice, ram, nsx, sortPrice, sortRating, sortSold, available], (err, result) => {
      if (err) {
        reject(err);
      } else {
        const products = result[0];
        products.forEach((product, index) => {
          console.log(`Product ${index + 1}:`, product);
        });
        resolve(products); // Assuming the result is an array of products
      }
    });
  });
}

function updateProduct(
  p_product_id,
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
) {
  return new Promise((resolve, reject) => {
    const sql = `CALL updateProduct(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    connection.query(
      sql,
      [
        p_product_id, // Added p_product_id as the first parameter
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
          resolve(result);
        }
      }
    );
  });
}

function deleteProduct(p_product_id) {
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
                  resolve('Product deleted successfully');
                });
              });
            });
          });
        }
      });
    });
  });
}

export { 
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct
};
