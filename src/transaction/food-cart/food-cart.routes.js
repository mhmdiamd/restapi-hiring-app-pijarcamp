import { Router } from "express"
import { FoodCartController } from "./food-cart.controller.js"

export class FoodCartRouter extends FoodCartController{
  path = '/food-carts'
  router = Router()

  constructor() {
    super()
    this.#initializeRouter()
  }

  #initializeRouter() {
    this.router.post(this.path, this.createFoodChart)
  }
}