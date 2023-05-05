import { PrismaClient } from "@prisma/client"
import {randomUUID} from 'crypto'
import HttpException from "../../Exceptions/http.exceptions.js"

class FoodCartService {

  prisma = new PrismaClient()

  async createFoodChart(data) {
    try{

      const create = await this.prisma.food_cart.create({
        data: {
          id: randomUUID(),
          ...data
        }
      })

      return create

    }catch(err){
      throw new HttpException(err.status, err.message)
    }
  }


}

export default FoodCartService