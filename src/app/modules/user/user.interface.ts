// import { Model } from 'mongoose';

export type FullNameType = {
  firstName: string;
  lastName: string;
};

export type AddressType = {
  street: string;
  city: string;
  country: string;
};

export type OrdersType = {
  productName: string;
  price: number;
  quantity: number;
};
export type UserType = {
  userId: number;
  username: string;
  password: string;
  fullName: FullNameType;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: AddressType;
  orders: OrdersType[];
};
