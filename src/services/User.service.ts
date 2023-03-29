import { ILogin } from '../interfaces/User';
import { userRepository } from '../repositories/User.repository';
import { createJWT } from '../utils/create.and.verify.JWT';

class UserService {
  constructor(private repository = userRepository) {}
  async login({ email, password }: ILogin) {
    const findUser = await this.repository.findOneBy({ email, password });

    if(!findUser) return false;

    const { id } = findUser;

    return createJWT({ id, email });
  }

  async getAll() {
    const users = await this.repository.find();

    return users;
  }
}

export default UserService;
