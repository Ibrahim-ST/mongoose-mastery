import { Request, Response } from 'express';
import { UserServices } from './user.service';
import UserTypeValidationSchema from './user.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    const zodParsedData = UserTypeValidationSchema.parse(userData);
    const result = await UserServices.createUserIntoDb(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    }); 
  } catch (err: any) {
    // const { code, message } = err.issues[0];
    res.status(500).json({
      success: false,
      message: err.message || 'User creation failed!',
      error: err,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDB();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error) { 
    res.status(500).json({
      success: false,
      message: 'User fetch process failed!',
      error: error,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const result = await UserServices.getSingleUserFromDB(parseInt(userID)); 
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Failed to fetch ${req.params.userID} id`,
      error: err,
    });
  }
};

// const updateUser = async (req: Request, res: Response) => {
//   try{
//     const userData = req.body;
//     const {userID} = req.params;
//     console.log({userData});
//     const parsedUserID = parseInt(userID);
//     console.log({parsedUserID} , typeof parsedUserID);
//     const result = await UserServices.updateUserFromDB(parsedUserID, userData);
//     console.log({result});
//     res.status(200).json({
//       success: true,
//       message: 'User updated successfully!',
//       data: result
//     });
//   }
//   catch(error){
//     res.status(500).json({
//       success: false,
//       message: 'User not found',
//       error: {
//         code: 404,
//         description: 'User does not exists!',
//       },
//     });
//   }
// }
const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userData = req.body.user; 
    const result = await UserServices.updateUserFromDB(parseInt(userId),userData);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
    res.status(200).json({
      success: true,
      message: 'User updated successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};


export const UserController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
};
