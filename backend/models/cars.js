const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const carSchema = new Schema({
    name:{type:String,required:true},
    paints:{type:Array},
    wheels:{type:Array}, 
    interiors:{type:Array},
    models:{type:Array},
    additional:{type:Array},
    additionalcost:{type:Number},
    img_url:{type:String}
})


const Car = mongoose.model('cars',carSchema);

module.exports = Car;