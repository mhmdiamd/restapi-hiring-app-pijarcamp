import HttpException from "../Exceptions/http.exceptions.js";
import { successResponse } from "../Helpers/response.js";
import TransactionService from "./transaction.service.js";

export class TransactionController {
  transactionService = new TransactionService()

  /**
   * Create Transaction 
   */

  async createTransaction(req, res, next) {
    try{
      const data = req.body
      const transaction = await new TransactionService().createTransaction(data)

      return successResponse(res, 201, "Success create Transaction", transaction)
    }catch(err){
      next(new HttpException(err.status, err.message))
    }
  }

  async getAllTransaction(req, res, next) {
    try{
      const transaction = await new TransactionService().getAllTransaction()

      return successResponse(res, 201, "Success Get Transactions", transaction)
    }catch(err){
      next(new HttpException(err.status, err.message))
    }
  }
}