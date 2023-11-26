import { Request, Response } from 'express';
import { UserServices } from './user.service';

const CreateUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    const result = await UserServices.CreateUserIntoDb(userData);

    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const UserController = {
  CreateUser,
};