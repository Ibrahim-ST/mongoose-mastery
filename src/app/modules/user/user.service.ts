import { UserType } from './user.interface';
import { UserModel } from './user.model';

const createUserIntoDb = async (userData: UserType) => {
  const result = await UserModel.create(userData);
  return result;
};

const getAllUsersFromDB = async () => {
  const result = await UserModel.find(
    {},
    {
      _id: 0,
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

export const UserServices = {
  createUserIntoDb,
  getAllUsersFromDB,
};
