// create data in mongodb
const dbconnect = require('./mongodb')
const insert = async()=>{
    const date = await dbconnect()
    const result = date.insert(
        [
        {name:'note 5', brand:"vivo",price:320 , category:"mobile"},
        {name:'note 3', brand:"vivo",price:320 , category:"mobile"},
        {name:'note 4', brand:"vivo",price:320 , category:"mobile"}
        ]
    );
    if (result.acknowledged) {
        console.log("data inserted");
    }
    console.log(result);
}

insert();