import { PartialModelObject } from 'objection';
import { Users } from '../entities/Users';

export class UserRepository {
  getUser(id: string) {
    return Users.query().findById(id).withGraphFetched('products');
  }

  getAllUser() {
    return Users.query();
  }

  getUserByLogin(login: string) {
    return Users.query().where('login', login);
  }

  createNewUser(
    name: string,
    login: string,
    password: string,
    refreshToken: string
  ) {
    return Users.query().insert({
      name,
      login,
      password,
      refreshToken,
    } as PartialModelObject<Users>);
  }
  updateToken(login: string, refreshToken: string) {
    return Users.query()
      .patch({ refreshToken: refreshToken } as PartialModelObject<Users>)
      .where('login', login);
  }
  findToken(refreshToken: string) {
    return Users.query()
      .select('refreshToken')
      .where('refreshToken', refreshToken);
  }
  getUserByRefreshToken(refreshToken: string) {
    return Users.query().where('refreshToken', refreshToken);
  }
}

export default UserRepository;
