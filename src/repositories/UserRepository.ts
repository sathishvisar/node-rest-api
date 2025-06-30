import { IUser, UserModel } from '../models/User';

export class UserRepository {
  async create(user: Partial<IUser>): Promise<IUser> {
    return await new UserModel(user).save();
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return await UserModel.findOne({ email });
  }

  async findById(id: string): Promise<IUser | null> {
    return await UserModel.findById(id);
  }

  async findAll(): Promise<IUser[]> {
    return await UserModel.find();
  }

  async update(id: string, data: Partial<IUser>): Promise<IUser | null> {
    return await UserModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<boolean> {
    const result = await UserModel.findByIdAndDelete(id);
    return !!result;
  }
}
