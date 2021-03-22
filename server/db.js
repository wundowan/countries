const Pool = require("pg").Pool;


 const pool = new Pool ({
   user: 'postgres',
   password: 'henrynewman',
   host: 'aob-propertydatabase.c0fbwiqrydvi.us-east-2.rds.amazonaws.com',
   port: 5432,
   database: 'property_database',
 });

//const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

/* const proConfig = process.env.DATABASE_URL; // heroku addons

const pool = new Pool({
  connectionString:
    process.env.NODE_ENV === "production" ? proConfig : devConfig,
});
*/

module.exports = pool;
