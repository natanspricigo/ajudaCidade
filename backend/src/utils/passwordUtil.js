const bcrypt = require('bcrypt');
const saltRounds = 5;

module.exports = {
    
    getHash(passsword) {
       return bcrypt.hashSync(passsword, saltRounds); 
    },
    
    isCorrectPassword(password, dbEncryptPassword) {
        return bcrypt.compareSync(password, dbEncryptPassword);
    }

}
