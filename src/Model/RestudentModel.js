const mongoose=require('mongoose') ; 

const MongoseSchema=mongoose.Schema({

FoodName:{type:String,require:true},
FoodCode:{type:String,require:true},
FoodImage:{type:String,require:true},
FoodCatagory:{type:String,require:true},
FoodQuantity:{type:String,require:true},
FoodPrice:{type:String,require:true} 

})


const MongooseMOdel=mongoose.model("createfoods",MongoseSchema) ; 

module.exports= MongooseMOdel ; 