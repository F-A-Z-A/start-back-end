import { type NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const inputValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    res.status(400).json({ result: result.array() });
  } else {
    next();
  }
};
