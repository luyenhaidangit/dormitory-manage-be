import { Request, Response } from 'express';
import * as UserModel from '../models/user.model';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.getAllUsers();
    res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.createUser(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};
