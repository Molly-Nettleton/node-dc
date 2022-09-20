import BaseController from "../utils/BaseController.js";
import { burgersService } from "../services/BurgersService.js"

export class BurgersController extends BaseController{

  constructor() {
    super('api/burgers')
    this.router
    
}
  async getAllBurgers(req, res, next) {
    try {
      const burgers = await burgersService.getBurgers()
      res.send(burgers)
    } catch (error)
    { next(error)}
  }


}