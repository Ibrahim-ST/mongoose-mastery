import { Schema, model } from 'mongoose';
import {
  AddressType,
  FullNameType,
  OrdersType,
  UserType,
} from './user.interface';

const FullNameSchema = new Schema<FullNameType>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const AddressSchema = new Schema<AddressType>({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const OrdersSchema = new Schema<OrdersType>({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const UserSchema = new Schema<UserType>({
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: FullNameSchema,
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  hobbies: {
    type: [String],
    required: true,
  },
  address: AddressSchema,
  orders: [OrdersSchema],
});

export const UserModel = model<UserType>('User', UserSchema);
