import { Router } from "express";
import { CompanyController } from "../controllers/CompanyController";
import { authMiddleware } from "../middlewares/authMiddleware";

/**
 * @implementaionNote :
 * companyRoutes is a route component that establishes and exports all the company routes,
 * used in the application as an api endpoints for external application consumption or integration.
 * it uses the companyController to implement the specific details, when the route is called.
 *
 * @return
 * router with preconfigured routes
 *
 * @author
 * @since
 * v1.0.0
 */
const companyRoutes = Router();

/**
 * @desc
 * the label is use for extra signature and
 * uniformity in the routes, to ensure uniqueness, of the endpoints
 * application name: gc - golding capital
 */
const label = "/api/v1/gc";

//routes

let companyController = new CompanyController();

/**
 * @desc
 * company competence route
 * @route Get /competencies
 *
 * @since
 * v1.0.0
 */
companyRoutes.get(label + "/competencies", [
  authMiddleware,
  companyController.competencies,
]);

/**
 * @desc
 * company expertise route
 * @route Get /expertise
 *
 * @since
 * v1.0.0
 */
companyRoutes.get(label + "/expertise", [
  authMiddleware,
  companyController.competencies,
]);

export default companyRoutes;
