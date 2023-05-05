import { Router } from "express";
import { FoodController } from "./food.controller.js";
import { multerStorage, useStorage } from "../../Config/multer.config.js";

export class FoodRouter extends FoodController{
  router = Router()
  path = '/foods'
  upload = multerStorage(useStorage())

  constructor() {
    super()
    // Intialize router!
    this.#initializeRouter()
  }
 
  #initializeRouter() {
    // Create Food Router
    this.router.post(this.path, this.upload.single('photo'), this.createFood) 

    // Get ALl Food
    this.router.get(this.path, this.getAllFood) 
    
    // Delete Food by id
    this.router.delete(`${this.path}/:id`, this.deleteFoodById)
  }
  
}