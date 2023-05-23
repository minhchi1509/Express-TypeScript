import { Request, Response } from 'express';

import CustomerModel from '@/models/customer.model';

const customerController = {
  getAllCustomers: async (req: Request, res: Response) => {
    try {
      const customers = await CustomerModel.findAll();
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

export default customerController;
