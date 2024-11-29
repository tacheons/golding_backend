import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { authMiddleware } from "../middlewares/authMiddleware";
// import authMiddleware from "../middlewares/authMiddleware.js";

/**
 * @implementaionNote :
 * userRoutes is a route component that establishes and exports all the user routes,
 * used in the application as an api endpoints for external application consumption or integration.
 * it uses the userController to implement the specific details, when the route is called.
 *
 * @return
 * router with preconfigured routes
 *
 * @author
 *
 * @since
 * v1.0.0
 */

// const userRoutes = Router();
const userRoutes = Router();
// userRoutes.use(authMiddleware);

/**
 * @desc
 * the label is use to extra signature
 * uniformity in the routes, to ensure uniqueness, of the endpoints
 * application name: gc - golding capital
 */
const label = "/api/v1/gc";

//routes

let userController = new UserController();

/**
 * @desc get users
 * @route GET /users
 */
userRoutes.get(label + "/users", [authMiddleware, userController.all]);

/**
 * @desc get one user
 * @route GET /users/:id
 */
userRoutes.get(label + "/users/:id", userController.one);

/**
 * @desc save user
 * @route POST /user
 */
userRoutes.post(label + "/user", userController.save);

/**
 * @desc delete user
 * @route DELETE /users/:id
 */
userRoutes.delete(label + "/users/:id", userController.remove);

export default userRoutes;
