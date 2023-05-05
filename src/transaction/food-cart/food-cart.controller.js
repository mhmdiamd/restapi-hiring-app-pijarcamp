import HttpException from "../../Exceptions/http.exceptions.js";
import { successResponse } from "../../Helpers/response.js";
import FoodChartService from "./food-cart.service.js";

export class FoodCartController {

  /**
   * Create Transaction 
   */

  async createFoodChart(req, res, next) {
    try{
      const data = req.body
      const foodChart = await new FoodChartService().createFoodChart(data)

      return successResponse(res, 201, "Success create food chart", foodChart)
    }catch(err){
      next(new HttpException(err.status, err.message))
    }
  }
}