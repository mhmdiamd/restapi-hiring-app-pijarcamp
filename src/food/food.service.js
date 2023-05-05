import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";
import HttpException from "../Exceptions/http.exceptions.js";
import { auth, deletePhoto } from "../../Config/googleDrive.config.js";

class FoodService {
  prisma = new PrismaClient();

  /**
   * Get All Food
   */

  async getAllFood() {
    return this.prisma.foods
      .findMany()
      .then((res) => {
        if(res.length < 1) throw new HttpException(404, 'Food not foun!')
        return res;
      })
      .catch((err) => {
        throw new HttpException(err.status, err.message);
      });
  }

  /**
   * Create Food
   */

  async createFood(data) {
    console.log(data);
    try {
      const create = await this.prisma.foods.create({
        data: {
          id: randomUUID(),
          ...data,
        },
      });

      return create;
    } catch (err) {
      console.log(err);
      throw new HttpException(err.status, err.message);
    }
  }

  /**
   * Delete Food by id
   */

  async deleteFoodById(id_food) {
    try {

      // Get id First!

      const food = await this.getFoodById(id_food)

      const deleteFood = await this.prisma.foods.delete({
        where: {
          id: id_food,
        },
      });

      // get id photo from public url google drive
      const idUrl = food.photo.split('=')[1]
      // Delete food
      if(deleteFood) await deletePhoto(auth, idUrl)

      return deleteFood;
    } catch (err) {
      throw new HttpException(err.status, err.message);
    }
  }


  /**
   * Delete Food by id
   */

  async getFoodById(id_food) {
    try {

      // Get id Firs!
      const food = await this.prisma.foods.findUnique({
        where: {
          id: id_food,
        },
      });
      
      if(!food) throw new HttpException(404, 'Food not found!') 

      return food;
    } catch (err) {
      throw new HttpException(err.status, err.message);
    }
  }

}

export default FoodService;
