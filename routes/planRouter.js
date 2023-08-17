


const express = require('express') 
const planRouter = express.Router() 

const {PlanModel}=require("../models/plan.model") 

//Get plan 
planRouter.get("/getall",async(req,res)=>{
     
    try{
        const plan = await PlanModel.find() 
        res.status(200).send({msg:"Data retrieved",data:plan})
    } 
    catch(err){
        res.status(400).send({"msg":err.message})
    }
}) 

//post plan 
planRouter.post("/post",async(req,res)=>{
try{
const plan = new PlanModel(req.body) 
await plan.save() 
res.status(200).send({msg:"plan has been added!"})
} 
catch(err){
    res.status(400).send({"msg":err.message})
}

}) 

//Delete plan 
planRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params 
    console.log(id) 
    try{
  await PlanModel.findByIdAndDelete({_id:id}) 
  res.status(200).send({msg:"Plan has been Deleted!"})
    } 
    catch(err){
        res.status(400).send({"msg":err.message})
    }
}) 

//Filter by destination 
planRouter.get("/destination/:destination",async(req,res)=>{
    const {destination} = req.params 
    console.log(destination) 
    try{
 const plan = await PlanModel.find({destination}) 
 res.status(200).send({msg:"Data Retrieved",data:plan}) 
    } 
    catch(err){
        res.status(400).send({"msg":err.message})
    }
}) 

// Sort By budgetperperson
planRouter.get('/sort/:budgetperperson', async (req, res) => {
    const { budgetperperson } = req.params;
  
    try {
      const plans = await PlanModel.find().sort({ budgetperperson: 1 }); // Sorting in ascending order based on 'budgetperperson'
      res.status(200).json({ msg: "Data Retrieved", data: plans });
    } catch (error) {
      res.status(500).json({ error: 'Error sorting plans' });
    }
  });
  

  module.exports =planRouter