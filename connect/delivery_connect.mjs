import connection from "./config.mjs";


function getCart(
    p_user_id
) {
    return new Promise((resolve, reject) => {
        const sql = `CALL getCart(?)`;
        connection.query(
            sql, [p_user_id],
            (error, results, fields) => {
                if (error) {
                    return reject(error);
                }
                return resolve(results[0]);
            }
        );
    });
}

function addItemToCart(
    p_user_id,
    p_product_id
) {
    return new Promise((resolve, reject) => {
        const sql = `CALL addItemToCart(?,?)`;
        connection.query(
            sql, [p_user_id, p_product_id],
            (error, results, fields) => {
                if (error) {
                    return reject(error);
                }
                return resolve('success');
            }
        );
    });
}

function getDelivery(p_user_id){
    return new Promise((resolve, reject) => {
        const sql = `CALL getDelivery(?)`;
        connection.query(
            sql, [p_user_id],
            (error, results, fields) => {
                if (error) {
                    return reject(error);
                }
                return resolve(results[0]);
            }
        );
    });
}

function addUpdateCartTotalPriceTrigger() {
    return new Promise((resolve, reject) => {
      const triggerQuery = `
        CREATE TRIGGER updateCartTotalPrice
        AFTER INSERT ON Purchase_item
        FOR EACH ROW
        BEGIN
            DECLARE purchaseTotal DECIMAL(10, 2);
            
            -- Calculate the new total_price for the affected cart
            SELECT SUM(P.new_price * NEW.quantity) INTO purchaseTotal
            FROM Product P
            WHERE P.product_id = NEW.product_id;
    
            -- Update the Cart table with the new total_price
            UPDATE Cart
            SET total_price = total_price + purchaseTotal
            WHERE cart_id = NEW.cart_id;
        END;
      `;
  
      connection.query(triggerSql, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  }

function convertCartToDelivery(
    p_user_id
) {
    return new Promise((resolve, reject) => {
        const sql = `CALL convertCartToDelivery(?)`;
        connection.query(
            sql, [p_user_id],
            (error, results, fields) => {
                if (error) {
                    return reject(error);
                }
                return resolve('success');
            }
        );
    });
}

function afterRemoveItemFromCart(){
    return new Promise((resolve, reject) => {
        const triggerQuery = `
        CREATE TRIGGER afterRemoveItemFromCart
        AFTER DELETE ON Purchase_item
        FOR EACH ROW
        BEGIN
            DECLARE purchaseTotal DECIMAL(10, 2);
            
            -- Calculate the new total_price for the affected cart
            SELECT SUM(P.new_price * OLD.quantity) INTO purchaseTotal
            FROM Product P
            WHERE P.product_id = OLD.product_id;
    
            -- Update the Cart table with the new total_price
            UPDATE Cart
            SET total_price = total_price - purchaseTotal
            WHERE cart_id = OLD.cart_id;
        END;
      `;
  
      connection.query(triggerSql, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
}

function removeItemFromCart (p_product_id, p_user_id) {
    return new Promise((resolve, reject) => {
        const sql = `CALL removeItemFromCart(?,?)`;
        connection.query(
            sql, [p_product_id, p_user_id],
            (error, results, fields) => {
                if (error) {
                    return reject(error);
                }
                return resolve('success');
            }
        );
    });
}


export default {
    getCart,
    addItemToCart,
    addUpdateCartTotalPriceTrigger,
    convertCartToDelivery,
    getDelivery
};

