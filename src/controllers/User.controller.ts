import { Request, Response } from 'express';
import UserService from '../services/User.service';

class UserController {
  constructor(private service = new UserService()) {}
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const loginUser = await this.service.login({ email, password });

    if(!loginUser) return res.status(400).json({ message: 'Invalid fields' });

    return res.status(200).json({ token: loginUser });
  }

  async getAll(_req: Request, res: Response) {
    const users = await this.service.getAll();

    return res.status(200).json(users);
  }
}

export default UserController;
