import { Router } from 'express';

import customerController from '@/controllers/customer.controller';
import customerValidation from '@/middlewares/customer.validation';

const customerRoute = Router();

customerRoute.get('/', customerController.getAllCustomers);
customerRoute.post('/create', customerValidation);

export default customerRoute;
