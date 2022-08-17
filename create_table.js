// MYSQL
const { optionsMysql } = require('./options/mariaDB');
const knexMysql = require("knex")(optionsMysql);

knexMysql.schema.dropTable('products')
.then(() => {
    console.log("Product table deleted");
});;
knexMysql.schema.createTable('products', (table) => {
    table.increments('id')
    table.string('nombre')
    table.integer('precio')
    table.string('imagen')
}).then(() => {
    console.log("table products created");
}).catch(err => {
    console.log(err);
}).finally(()=>{
    knexMysql.destroy();
})

// SQLITE3
const { optionsSqlite } = require('./options/sqliteDB');
const knexSqlite = require("knex")(optionsSqlite);

knexSqlite.schema.dropTable('messages')
.then(() => {
    console.log("Messages table deleted");
});
knexSqlite.schema.createTable('messages', (table) => {
    table.increments('id')
    table.string('correo')
    table.string('mensaje')
    table.date('date')
}).then(() => {
    console.log("table messages created");
}).catch(err => {
    console.log(err);
}).finally(()=>{
    knexSqlite.destroy();
})