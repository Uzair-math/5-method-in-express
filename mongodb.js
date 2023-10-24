// connect with mongodb

const express = require('express')
const app = express()
app.use(express.json())

const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017/uzair';
const databaseName = 'e-comm';
const client = new MongoClient(url)

async function dbconnect(){
    let result = await client.connect();
    db = result.db(databaseName)
    return db.collection('products')

}
dbconnect()
module.exports = dbconnect
