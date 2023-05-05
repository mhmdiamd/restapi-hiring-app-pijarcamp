import { PrismaClient } from "@prisma/client"
import { randomUUID } from 'crypto'
import HttpException from "../Exceptions/http.exceptions.js"

class TransactionService {
  prisma = new PrismaClient()

  /**
   * Create Transactions
   */

  async createTransaction(data) {
    try{

      const restOfMoney = data.customer_money - data.total_price

      const createTransaction = await this.prisma.transactions.create({
        data: {
          id: randomUUID(),
          ...data,
          rest_money: restOfMoney
        }
      })

      return createTransaction
    }catch(err) {
      throw new HttpException(err.status, err.message)
    }
  }


  async getAllTransaction() {
    try{
      const transactions = await this.prisma.transactions.findMany({
        include: {
          food_cart: true
        }
      })

      return transactions
    }catch(err) {
      throw new HttpException(err.status, err.message)
    }
  }

}

export default TransactionService