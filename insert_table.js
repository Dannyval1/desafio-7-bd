// MYSQL
const { optionsMysql } = require('./options/mariaDB');
const knexMysql = require("knex")(optionsMysql);

const insertProductMysql = (producto) => {
    knexMysql("products")
    .insert(producto)
    .then(() => {
        console.log("Product inserted successfully");
    })
    .catch((err) => {
        console.log(err);
    })
}

const { optionsSqlite } = require('./options/sqliteDB');
const knexSqlite = require("knex")(optionsSqlite);

const insertProductSqlite = (message) => {
    knexSqlite("messages")
    .insert(message)
    .then(() => {
        console.log("Message inserted succesfully");
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = {
    insertProductMysql,
    insertProductSqlite,
}