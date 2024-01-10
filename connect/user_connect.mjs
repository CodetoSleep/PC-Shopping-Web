import connection from "../connect/config.mjs";

function createUser({
    p_email,
    p_phone,
    p_address,
    p_name,
    p_password,
    p_password_confirm,
}) {
    return new Promise((resolve, reject) => {
        const sql = `CALL createUser(?,?,?,?,?,?)`;
        connection.query(
            sql, [p_email, p_phone, p_address, p_name, p_password, p_password_confirm],
            (error, results, fields) => {
                if (error) {
                    return reject(error);
                }
                return resolve(results);
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
        const sql = `CALL updateUser(?,?,?,?,?,?,?)`;
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

export default {
    createUser,
    updateUser,
    updateUserPassword,
    getAllUser,
    createUpdateUserPasswordTrigger,
    before_insert_user
}