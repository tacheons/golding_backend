import { Request, Response, NextFunction } from "express";
import { CompanyService } from "../services/CompanyService";
import { HTTPStatus } from "../modules/objects/HTTPStatus";
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

    try {
      let competencies = await new CompanyService().competencies();
      console.log(competencies);

      if (competencies) {
        res.status(HTTPStatus.SUCCESSFUL.OK).json(competencies);
      } else {
        res
          .status(HTTPStatus.CLIENT_ERROR.NOT_FOUND)
          .json({ error: "resource not found" });
      }
    } catch (error) {
      /**
       * handle server errors
       */
      console.log(error);
      res
        .status(HTTPStatus.SERVER_ERROR.INTERNAL_SERVER_ERROR)
        .json({ error: "internal server error, please contact the admin" });
    }
  }
}
