import { Router } from 'express';

import customerController from '@/controllers/customer.controller';
import customerValidation from '@/middlewares/customer.validation';
import idParamValidation from '@/middlewares/idParam.validation';

const customerRoute = Router();

customerRoute.get('/', customerController.getAllCustomers);
customerRoute.post(
  '/create',
  customerValidation,
  customerController.addCustomer
);
customerRoute.put(
  '/update/:id',
  idParamValidation,
  customerValidation.map((v) => v.optional()),
  customerController.updateCustomer
);
customerRoute.delete(
  '/delete/:id',
  idParamValidation,
  customerController.deleteCustomer
);

export default customerRoute;
