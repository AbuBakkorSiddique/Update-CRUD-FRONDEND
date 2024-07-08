const RestudentModel=require('../Model/RestudentModel') ; 

// create food 
exports.CreateFOOD=(req,res)=>{
const reqBody = req.body ; 
RestudentModel.create(reqBody) 
.then((data)=>{
    res.status(200).json({
        Title:"Data Create Successfully ... " ,
        Data:data
    })
   
})
.catch((err)=>{

    res.status(200).json({
        Title:"Data Create Faild " ,
        Data :err 
    })
})

}


// Read Food Items All 

exports.FoodAll=(req,res)=>{
RestudentModel.find({})
.then((data)=>{
    res.status(200).json({
        Title:"Read Data All Successfully ..... ",
        Data:data
    })
}).
catch((err)=>{
    res.status(200).json({
     Title:"Read Data ALl Faild  ",
     Data:err

    })
})

}

//Read Data BY Id 

exports.ReadDataALl = (req,res)=>{
const id=req.params.id; 
const Query= {_id:id} ; 

RestudentModel.findOne(Query)
.then((data)=>{
    res.status(200).json({
        Title:"Read Data By ID Successfully ..... " ,
        Data : data 
    })
})
.catch((err)=>{
    res.status(200).json({
        Tile:"Read Data By Id Faild " , 
        Data : err 
    })
})

}


// Updata Data by Id 

exports.UpdateData = (req,res)=>{
    const id=req.params.id; 
    const Query= {_id:id} ; 
    const reqBody= req.body ; 


    RestudentModel.updateOne(Query,reqBody)
    .then((data)=>{
        res.status(200).json({
            Tilte:"Food Data Are Update Successfully .... " ,
            Data : data 
        })
    })
    .catch((err)=>{
        res.status(200).json({
            Tile:"Food Data Are Update Faild " ,
            Data : err
        })
    })


}


// Food Delete 

exports.DeleteData = (req,res)=>{
    const id=req.params.id; 
    const Query= {_id:id} ;

    RestudentModel.deleteOne(Query)
    .then((data)=>{
        res.status(200).json({
            Title:"Data Are Delete Successfully .... " ,
            Data : data 
        })
    })
    .catch((err)=>{
        res.status(200).json({
            Title:"Data Are Delte Faild" ,
            Data:err
        })
    })


}