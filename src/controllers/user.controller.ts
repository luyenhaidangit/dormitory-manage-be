import { Request, Response } from 'express';
import * as UserModel from '../models/user.model';
import { ResponseInterface } from '../interfaces/response.interface';
import { HttpStatus } from '../constants/httpStatus';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.getAllUsers();
    const response: ResponseInterface = {
      statusCode: HttpStatus.OK,
      message: 'Get users successfully',
      data: users
    };
    res.status(HttpStatus.OK).json(response);
  } catch (error) {
    const response: ResponseInterface = {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Internal server error'
    };
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(response);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.createUser(req.body);
    const response: ResponseInterface = {
      statusCode: HttpStatus.CREATED,
      message: 'Create user successfully',
      data: user
    };
    res.status(HttpStatus.CREATED).json(response);
  } catch (error) {
    const response: ResponseInterface = {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR, 
      message: 'Internal server error'
    };
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(response);
  }
};
