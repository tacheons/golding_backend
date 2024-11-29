import { Request, Response, NextFunction } from "express";
import { CompanyService } from "../services/CompanyService";
import { Utils } from "../modules/classes/Utils";

/**
 * @implementaion
 * Company Controller, is the controller layer that controls
 * various services offered by the company
 *
 * @return
 * an array of services
 *
 * @author
 * @since
 * v1.0.0
 */
export class CompanyController {
  constructor() {}

  /**
   * @implementaion
   * This method services the company competencies or expertise routes
   * use to fetch company's comptencies
   *
   * @params {*} req, res, next
   * @return comptencies of the company as an object
   *
   * @author
   * @since
   * v1.0.0
   */
  async competencies(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    let companyService = new CompanyService();
    let competencies = await companyService.competencies();
    console.log(competencies);

    res.json(competencies);
  }
}
