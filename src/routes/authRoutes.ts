import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

/**
 * @implementaionNote :
 * autRoutes is a route component that establishes and exports all the authentication routes,
 * used in the application as an api endpoints for external application consumption or integration.
 * it uses the authController to implement the specific details, when the route is called.
 *
 * @return
 * router with preconfigured routes
 *
 * @author
 * @since
 * 1.0.0
 */
const authRoutes = Router();

/**
 * @desc
 * the label is use for extra signature and
 * uniformity in the routes, to ensure uniqueness, of the endpoints
 * application name: gc - golding capital
 */
const label = "/api/v1/gc";

//routes

let authController = new AuthController();

/**
 * @desc
 * login authentication route
 * @route Post /login
 *
 * @since
 * v1.0.0
 */
authRoutes.post(label + "/login", [authController.login]);

/**
 * @desc
 * logout  route
 * @route Post /logout
 *
 * @since
 * v1.0.0
 */
authRoutes.post(label + "/login", [authController.logout]);

export default authRoutes;
