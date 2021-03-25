const Pool = require('pg').Pool;

const pool=new Pool({
    host:"localhost",
    user:"postgres",
    password:"MarcRAMADISON",
    port:5432,
    database:"gestionnaire"
});

module.exports=pool;
