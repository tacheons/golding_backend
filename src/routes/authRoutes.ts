import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

/**
 * @implementaionNote :
 * userRoutes is a route component that establishes and exports all the game routes,
 * used in the application as an api endpoints for external application consumption or integration.
 * it uses the userController to implement the specific details, when the route is called.
 *
 * @return
 * router with preconfigured routes
 *
 * @author & @contributiors
 * fabian Madueke
 *
 * @since
 * 1.0.0
 */

// const userRoutes = Router();
const authRoutes = Router();
// userRoutes.use(authMiddleware);

/**
 * @desc
 * the whitelist or whitelable is use to extra signature
 * uniformity in the routes, to ensure uniqueness, of the endpoints
 */
const whitelist = "/api/gc_app";

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
authRoutes.post("/login", [authController.login]);

/**
 * @desc
 * logout  route
 * @route Post /logout
 *
 * @since
 * v1.0.0
 */
authRoutes.post("/login", [authController.logout]);

export default authRoutes;
