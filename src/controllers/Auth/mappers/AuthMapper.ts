import { Mapper } from '../../../interfaces/mapper';
import { Model } from 'Sequelize';
import { IUser } from '../../User/interfaces/user.interface';
import { IUserDTO } from '../../../controllers/User/dtos/IUserDTO';

export class AuthMapper implements Mapper<Model<IUser>, IUserDTO> {
  toDto(data: Model<IUser>): IUserDTO {
    return {
      id: data.dataValues.id,
      email: data.dataValues.email,
      name: data.dataValues.name
    };
  }
}
