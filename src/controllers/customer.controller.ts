import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import CustomerModel, { ICustomer } from '@/models/customer.model';

const customerController = {
  getAllCustomers: async (req: Request, res: Response) => {
    try {
      const customers = await CustomerModel.findAll();
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addCustomer: async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, age, address, email, phoneNumber } = req.body as ICustomer;
    try {
      const newCustomer = await CustomerModel.create({
        name,
        age,
        address,
        email,
        phoneNumber
      });
      res.status(200).json(newCustomer);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateCustomer: async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { id } = req.params;
      if (!(await CustomerModel.findByPk(id))) {
        return res.status(404).json('Customer does not exist');
      }
      const updateInformation = req.body as Partial<ICustomer>;
      await CustomerModel.update({ ...updateInformation }, { where: { id } });
      const updatedCustomer = await CustomerModel.findByPk(id);
      res.status(200).json(updatedCustomer);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteCustomer: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedCustomer = await CustomerModel.findByPk(id);
      if (!deletedCustomer) {
        return res.status(404).json('Customer does not exist');
      }
      await deletedCustomer.destroy();
      res.status(200).json(deletedCustomer);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  handleFileChange: () => {
    console.log('File change');
  }
};

export default customerController;
