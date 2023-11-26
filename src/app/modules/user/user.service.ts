import { UserType } from './user.interface';
import { User } from './user.model';

const createUserIntoDb = async (userData: UserType) => {
  if (await User.isUserExists(userData.userId)) {
      throw new Error('User already exists');
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

export const UserServices = {
  createUserIntoDb,
  getAllUsersFromDB,
  getSingleUserFromDB,
};
