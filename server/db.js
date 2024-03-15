const Pool = require("pg").Pool;

const pool = new Pool({

    user:"postgres",
    password:"Yash@2625",
    host:"localhost",
    port:5432,
    database:"watumull"
});

module.exports = pool;