import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { authMiddleware } from "../middlewares/authMiddleware";
// import authMiddleware from "../middlewares/authMiddleware.js";

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
const userRoutes = Router();
// userRoutes.use(authMiddleware);

/**
 * @desc
 * the whitelist or whitelable is use to extra signature
 * uniformity in the routes, to ensure uniqueness, of the endpoints
 */
const whitelist = "/api/users";

//routes

let userController = new UserController();

/**
 * @desc get users
 * @route GET /users
 */
userRoutes.get("/users", [authMiddleware, userController.all]);

/**
 * @desc get one user
 * @route GET /users/:id
 */
userRoutes.get("/users/:id", userController.one);

/**
 * @desc save user
 * @route POST /user
 */
userRoutes.post("/user", userController.save);

/**
 * @desc delete user
 * @route DELETE /users/:id
 */
userRoutes.delete("/users/:id", userController.remove);

export default userRoutes;
