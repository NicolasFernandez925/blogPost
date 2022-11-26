import { User } from 'db/models/users.model';
import { IJwtPayload } from 'services/Auth/AuthService';

export class AuthRepository {
  public async getUserByToken(user: IJwtPayload): Promise<any> {
    console.log(user);

    const responseUser = await User.findOne({
      where: {
        id: user.id
      }
    });

    return responseUser;
  }

  public async getUserByEmail(email: string): Promise<any> {
    const responseUser = await User.findOne({
      where: {
        email
      }
    });

    return responseUser;
  }
}
