import { z } from 'zod';

const FullNameSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'First name cannot be empty' })
    .max(20, { message: 'First name cannot exceed 20 characters' }),
  lastName: z
    .string()
    .min(1, { message: 'Last name cannot be empty' })
    .max(20, { message: 'Last name cannot exceed 20 characters' }),
});

const AddressSchema = z.object({
  street: z
    .string()
    .min(1, { message: 'Street cannot be empty' })
    .max(100, { message: 'Street cannot exceed 100 characters' }),
  city: z
    .string()
    .min(1, { message: 'City cannot be empty' })
    .max(100, { message: 'City cannot exceed 100 characters' }),
  country: z
    .string()
    .min(1, { message: 'Country cannot be empty' })
    .max(25, { message: 'Country cannot exceed 25 characters' }),
});

const OrdersSchema = z.object({
  productName: z
    .string()
    .min(1, { message: 'Product name cannot be empty' })
    .max(100, { message: 'Product name cannot exceed 100 characters' }),
  price: z.number().positive({ message: 'Price must be a positive number' }),
  quantity: z
    .number()
    .positive({ message: 'Quantity must be a positive number' })
    .int({ message: 'Quantity must be an integer' }),
});

const UserTypeValidationSchema = z.object({
  userId: z
    .number()
    .int({ message: 'User ID must be an number' })
    .positive({ message: 'User ID must be a positive number' }),
  username: z
    .string()
    .min(1, { message: 'Username cannot be empty' })
    .max(20, { message: 'Username cannot exceed 20 characters' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
  fullName: FullNameSchema,
  age: z
    .number()
    .positive({ message: 'Age must be a positive number' })
    .int({ message: 'Age must be an integer' }),
  email: z.string().email({ message: 'Invalid email format' }),
  isActive: z.boolean(),
  hobbies: z.array(
    z
      .string()
      .min(1, { message: 'Hobby cannot be empty' })
      .max(50, { message: 'Hobby cannot exceed 50 characters' }),
  ),
  address: AddressSchema,
  orders: z.array(OrdersSchema),
});

export default UserTypeValidationSchema;
