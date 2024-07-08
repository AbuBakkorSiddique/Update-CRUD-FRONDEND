const express = require('express') ; 
const Router = express.Router() ; 
const FoodController=require('../Controller/RestudentController')


Router.post('/create',FoodController.CreateFOOD) ; 
Router.get('/read',FoodController.FoodAll) ; 
Router.get('/read/:id',FoodController.ReadDataALl) ; 
Router.post('/update/:id',FoodController.UpdateData) ; 
Router.get('/delete/:id',FoodController.DeleteData) ; 




module.exports= Router; 