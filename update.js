const dbconnect = require('./mongodb')
const update = async ()=>{
    let data = await dbconnect()
    let result = await  data.updateOne(
        // phly say update hai is liya 
        {name:'max 5'},{$set:{name:'max pro 5'}
    }
    )
    console.log(result);
}

update()