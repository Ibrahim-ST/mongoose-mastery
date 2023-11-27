import { UserType } from './user.interface';
import { User } from './user.model';

const createUserIntoDb = async (userData: UserType) => {
  if (await User.isUserExists(userData.userId)) {
      throw new Error('User already exists');
  }
  if(await User.isEmailExists(userData.email)){
    throw new Error("Email already exists");
  }
  if(await User.isUserNameExists(userData.username)){
    throw new Error("Username already exists");
  }
  const result = await User.create(userData);
  return result;
};

const getAllUsersFromDB = async () => {
  const result = await User.find(
    {},
    {
      _id: 0,
      userId: 1,
      username: 1,
      'fullName.firstName': 1,
      'fullName.lastName': 1,
      age: 1,
      email: 1,
      'address.street': 1,
      'address.city': 1,
      'address.country': 1,
    },
  );
  return result;
};

const getSingleUserFromDB = async (id: number) => {
  const result = await User.findOne({ userId: id }, { password: 0, _id: 0 });
  return result;
};

const updateUserFromDB = async (userId: number, userData: UserType) => {
    try {
      const result = await User.findOneAndUpdate(
        { userId },
        userData,
        {
          new: true,
          runValidators: true,
        },
      );
      return result;
    } catch (error) {
      throw new Error(`Failed to update user: ${error.message}`);
    }
};

const deleteUser = async (userId: number) => {
  
}

export const UserServices = {
  createUserIntoDb,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserFromDB,
  deleteUser,
};
