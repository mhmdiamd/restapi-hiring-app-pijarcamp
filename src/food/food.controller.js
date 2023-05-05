import { auth, createAndUpload } from "../../Config/googleDrive.config.js";
import HttpException from "../Exceptions/http.exceptions.js";
import { successResponse } from "../Helpers/response.js";
import FoodService from "./food.service.js";

export class FoodController {

  constructor() {
    this.foodService = new FoodService() 
  }


  /**
   * Get All Food
   */

  async getAllFood(req, res, next) {  
    try{
      const foods = await new FoodService().getAllFood()

      return successResponse(res, 200, "Success get all food!", foods)
    }catch(err) {
      console.log(err)
      next(new HttpException(err.status, err.message))
    }
  }

  /**
   * Create Food
   */

  async createFood(req, res, next) {
    const photo = req.file
    try{
      const data = req.body

      // Upload Image to drive 
      const {id: idPhoto} = await createAndUpload(auth, photo)
      const photoUrl = `${process.env.GOOGLE_DRIVE_PUBLIC_URL}${idPhoto}`

      const createFood = await new FoodService().createFood({
        ...data,
        price: Number(data.price),
        photo: photoUrl
      })

      return successResponse(res, 201, "Food success created!", {
        data: createFood
      })
    }catch(err) {
      console.log(err)
      next(new HttpException(err.status, err.message))
    }
  }

  /**
   * Delete Food by id
   */

  async deleteFoodById(req, res, next) {
    try{
      const id_food = req.params.id
      const deleteFood = await new FoodService().deleteFoodById(id_food)

      return successResponse(res, 201, "Food success deleted!")
    }catch(err) {
      next(new HttpException(err.status, err.message))
    }
  }


}