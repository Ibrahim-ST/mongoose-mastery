/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserType } from './user.interface';
import { User } from './user.model';

const createUserIntoDb = async (userData: UserType) => {
  if (await User.isUserExists(userData.userId)) {
    throw new Error('User already exists');
  }
  if (await User.isUserNameExists(userData.username)) {
    throw new Error('Username already exists');
  }
  if (await User.isEmailExists(userData.email)) {
    throw new Error('Email already exists');
  }
  const result = await User.create(userData);
  const { password, ...updatedResult } = result.toObject();
  return updatedResult;
};

const getAllUsersFromDB = async () => {
  const result = await User.find(
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

const getSingleUserFromDB = async (id: number) => {
  const result = await User.findOne({ userId: id }, { password: 0, _id: 0 });
  return result;
};

const updateUserFromDB = async (userId: number, userData: UserType) => {
  const result = await User.findOneAndUpdate({ userId }, userData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteUserFromDB = async (userId: number) => {
  const result = await User.deleteOne({ userId });
  return result;
};

const addNewProductInOrders = async (userId: number, orderData: any) => {
  const userData = await User.findOne({ userId });
  if (!userData) {
    throw new Error('User not found');
  }
  if (!userData.orders) {
    userData.orders = [];
  }

  userData.orders.push({
    productName: orderData.productName,
    price: orderData.price,
    quantity: orderData.quantity,
  });
  await userData.save();
};

const getAllOrdersByUser = async (id: number) => {
  const result = await User.findOne({ userId: id }, { orders: 1, _id: 0 });
  return result;
};

const totalOrderPriceCalculator = async (userId: number) => {
  const user = await User.findOne({userId});
  if (!user) {
    return null;
  }
  const totalPriceOfOrders = user.orders.reduce((totalPrice, order) => {
    return totalPrice + order.price * order.quantity;
  }, 0);
  return totalPriceOfOrders;
};
export const UserServices = {
  createUserIntoDb,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserFromDB,
  deleteUserFromDB,
  addNewProductInOrders,
  getAllOrdersByUser,
  totalOrderPriceCalculator,
};
