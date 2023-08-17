const mongoose = require('mongoose') 

const planSchema = mongoose.Schema({
 name:String,
 email:String,
 destination:String,
 nooftravelers:Number,
 budgetperperson:Number
}) 

const PlanModel = mongoose.model('plan',planSchema) 

module.exports={PlanModel} 