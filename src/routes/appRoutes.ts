import { Router } from "express";
import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";
import companyRoutes from "./companyRoutes";

/**
 * @implementaionNote :
 * appRoutes is a route component that is an aggregator route,
 * it combines all the routes in the application
 * and integrate them collectively into the application.
 *
 * @return
 * approutes
 *
 * @author & @contributors
 * fabian Madueke
 *
 * @since
 * 1.0.0
 */
let appRoutes = Router();

appRoutes.use([authRoutes, userRoutes, companyRoutes]);

export default appRoutes;
