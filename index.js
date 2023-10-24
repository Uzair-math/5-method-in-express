// // insert data in mongodb

const dbconnect = require('./mongodb')
dbconnect.connect("mongodb://localhost:27017/local")
dbconnect().then((resp)=>{
    resp.find({name:'nord'}).toArray().then((data)=>{
        console.log(data);
    })
})
    const main = async()=>{
        let data = await dbconnect();
        data = await data.find({name:'nord'}).toArray()
        console.log(data);
    }
    main()

