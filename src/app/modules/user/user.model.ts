import { Schema, model } from 'mongoose';
import {
  AddressType,
  FullNameType,
  OrdersType,
  UserModel,
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

const UserSchema = new Schema<UserType, UserModel>({
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
  address: {
    type: AddressSchema,
    required: true,
  },
  orders: {
    type: [OrdersSchema],
    required: true,
  },
});

// // pre save middleware
// UserSchema.pre('save', function() {
//   console.log(this, 'pre hook');
// })

// // post save middleware
// UserSchema.post('save', function(){
//   console.log(this, 'post hook');
// })

//creating a custom static
UserSchema.statics.isUserExists = async function (userId: number){
    const existingUser = await User.findOne({userId});
    return existingUser;
}
UserSchema.statics.isEmailExists = async function(email: string){
  const existingEmail = await User.findOne({email});
  return existingEmail;
}
UserSchema.statics.isUserNameExists = async function (username: string){
  const existingUsername = await User.findOne({username});
  return existingUsername;
}
 
export const User = model<UserType, UserModel>('User', UserSchema);

