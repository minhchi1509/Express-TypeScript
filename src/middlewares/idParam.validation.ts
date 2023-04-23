import { NextFunction, Request, Response } from 'express';
import { param, validationResult } from 'express-validator';

const idParamValidation = [
  param('id')
    .escape()
    .trim()
    .stripLow()
    .notEmpty()
    .withMessage('Please provide an ID')
    .isUUID(4)
    .withMessage('Please provide a valid ID'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    next();
  }
];

export default idParamValidation;
