import connection from "../connect/config.mjs";

function createUser({
    p_email,
    p_phone,
    p_address,
    p_name,
    p_password,
    p_password_confirm,
}) {
    console.log({
        p_email,
        p_phone,
        p_address,
        p_name,
        p_password,
        p_password_confirm,
    })
    return new Promise((resolve, reject) => {
        const sql = `CALL createUser(?,?,?,?,?,?)`;
 
        connection.query(
            sql, [p_email, p_phone, p_address, p_name, p_password, p_password_confirm],
            (error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({newUser: results});
                }
            }
        );
    });
}




function updateUser({
    p_user_id,
    p_email,
    p_phone,
    p_address,
    p_name
}) {
    return new Promise((resolve, reject) => {
        console.log({
            p_user_id,
            p_email,
            p_phone,
            p_address,
            p_name
        })
        const sql = `CALL updateUser(?,?,?,?,?)`;
        connection.query(
            sql, [p_user_id,
                p_email,
                p_phone,
                p_address,
                p_name],
            (error, results, fields) => {
                if (error) {
                    return reject(error);
                }
                return resolve(results);
            }
        );
    });
}

function updateUserPassword({
    p_user_id,
    p_password,
    p_password_confirm
}) {
    return new Promise((resolve, reject) => {
        console.log({
            p_user_id,
            p_password,
            p_password_confirm
        })
        const sql = `CALL updateUserPassword(?,?,?)`;
        connection.query(
            sql, [p_user_id,
                p_password,
                p_password_confirm],
            (error, results, fields) => {
                if (error) {
                    return reject(error);
                }
                return resolve(results);
            }
        );
    });
}

function getAllUser({
    p_page,
}) {
    return new Promise((resolve, reject) => {
        const sql = `CALL getAllUser(?)`;
        connection.query(
            sql, [p_page],
            (error, results, fields) => {
                if (error) {
                    return reject(error);
                }
                return resolve(results);
            }
        );
    });
}

function createUpdateUserPasswordTrigger() {
    return new Promise((resolve, reject) => {
      const triggerQuery = `
        CREATE TRIGGER before_update_user_pass 
        BEFORE UPDATE ON User 
        FOR EACH ROW 
        BEGIN 
            IF NEW.password IS NOT NULL THEN 
                SET NEW.password_change_at = NOW(); 
            END IF; 
        END;
      `;
      connection.query(triggerQuery, (error, results, fields) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  }

function before_insert_user() {
    return new Promise((resolve, reject) => {
        const triggerQuery = `
        CREATE TRIGGER before_insert_user 
        BEFORE INSERT ON User 
        FOR EACH ROW 
        BEGIN 
            IF NEW.password IS NOT NULL THEN 
                SET NEW.password_change_at = NOW(); 
            END IF; 
        END;
      `;
        connection.query(triggerQuery, (error, results, fields) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
}

function after_insert_user(){
    return new Promise((resolve, reject) => {
        const triggerQuery = `
        CREATE TRIGGER after_insert_user 
        AFTER INSERT ON User 
        FOR EACH ROW 
        BEGIN 
            INSERT INTO Cart(user_id) VALUES(NEW.user_id);
        END;
      `;
        connection.query(triggerQuery, (error, results, fields) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
}

function getOneUser(p_email) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM User WHERE email = ?`;
        connection.query(
            sql, [p_email],
            (error, results, fields) => {
                if (error) {
                    return reject('error');
                }
                if (results && results.length > 0) {
                    const userData = results[0];
                    return resolve(userData);
                } else {
                    return reject('error');
                }
            }
        );
    });
}


export default {
    createUser,
    updateUser,
    updateUserPassword,
    getAllUser,
    createUpdateUserPasswordTrigger,
    before_insert_user,
    getOneUser,
    after_insert_user,
    before_insert_user
}