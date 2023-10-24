const mongoose = require('mongoose')
mongoose.Connect("mongodb+srv://Muhammaduzair:Uzair123@cluster0.73cemxn.mongodb.net/")

const mageSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    power_type: {
        type: String,
        require: true
    },
    mana_power: Number,
    health: Number,
    gold: Number
})

const mega = new mongoose.model("Mage", mageSchema)
const mage_1 = new mega({
    name: "uzair",
    power_type: 'type',
    mana_power: 200,
    health: 1000,
    gold: 10000
});
  
mage_1.save();

const mage_2 = new mega({
    name: "ali",
    power_type: 'profile',
    mana_power: "500",
    health: "5000",
    gold: "50"
})
  
mage_2.save();