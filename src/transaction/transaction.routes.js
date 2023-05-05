import { Router } from "express"
import { TransactionController } from "./transaction.controller.js"

export class TransactionRouter extends TransactionController{
  path = '/transactions'
  router = Router()

  constructor() {
    super()
    this.#initializeRouter()
  }

  #initializeRouter() {
    this.router.post(this.path, this.createTransaction)
    this.router.get(this.path, this.getAllTransaction)
  }
}