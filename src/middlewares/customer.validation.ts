import { body } from 'express-validator';
import CustomerModel from '@/models/customer.model';

const customerValidation = [
  body('name')
    .escape()
    .trim()
    .stripLow()
    .notEmpty()
    .withMessage('Name is required'),
  body('age')
    .escape()
    .trim()
    .stripLow()
    .notEmpty()
    .withMessage('Age is required')
    .isInt({ min: 18 })
    .withMessage('Age must be at least 18'),
  body('address')
    .escape()
    .trim()
    .stripLow()
    .notEmpty()
    .withMessage('Address is required'),
  body('email')
    .escape()
    .trim()
    .stripLow()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email is invalid')
    .custom(async (value: string, { req }) => {
      const existCustomer = await CustomerModel.findOne({
        where: { email: value }
      });
      if (
        existCustomer &&
        req.method === 'PUT' &&
        req.params?.id === existCustomer.id
      ) {
        return true;
      }
      if (existCustomer) {
        throw new Error('Email already exists');
      }
      return true;
    }),
  body('phoneNumber')
    .escape()
    .trim()
    .stripLow()
    .notEmpty()
    .withMessage('Phone number is required')
    .matches(/(0[3|5|7|8|9])+([0-9]{8})\b/)
    .withMessage('Phone number is invalid')
];

export default customerValidation;
