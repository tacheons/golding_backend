import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { UserService } from "../services/UserService";
import serverConfig from "../modules/configurations/serverConfig";

/**
 * @implementation
 * auth middleware authenticates the user request and verify
 * it's validity
 *
 * @params {*} req
 * @params {*} res
 * @params {*} next
 * @return next()
 *
 * @author
 * @since
 * v1.0.0
 */
export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // verify user is authenticated
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { id } = jwt.verify(token, serverConfig.SECRET);

    req.user = await new UserService().findById(id);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};
