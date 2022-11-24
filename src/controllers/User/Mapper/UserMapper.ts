import { Model } from 'Sequelize';
import { Mapper } from 'interfaces/mapper';
import { IUser } from '../interfaces/user.interface';
import { IUserDTO } from '../dtos/IUserDTO';

export class UserMapper implements Mapper<Model<IUser>, IUserDTO> {
  toDto(data: Model<IUser>): IUserDTO {
    return {
      id: data.dataValues.id,
      email: data.dataValues.email,
      name: data.dataValues.name
    };
  }

  collectionOfDto(data: Array<Model<IUser>>): IUserDTO[] {
    return data.map((item) => {
      return this.toDto(item);
    });
  }
}
