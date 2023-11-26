import { UserType } from "./user.interface";
import { UserModel } from "./user.model";

const CreateUserIntoDb = async (userData: UserType) => {
    const result = await UserModel.create(userData);
    return result;
}

export const UserServices = {
    CreateUserIntoDb
}