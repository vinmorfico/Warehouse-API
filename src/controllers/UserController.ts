import bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { v4 } from 'uuid';
import { paramID } from '../schemes/schemaParamsId';
import { loginPOST, refreshPOST, registerPOST } from '../schemes/schemaAuth';
import UserService from '../services/UserService';
dotenv.config();

class UserController {
  constructor(private readonly userService: UserService) {}

  getAllUsers = async (_req: Request, res: Response) => {
    const users = await this.userService.getAllUser();
    res.status(200).json(users);
  };

  getUser = async (req: Request, res: Response) => {
    await paramID.validateAsync(req.params);
    const users = await this.userService.getUser(req.params.id);
    res.status(200).json(users);
  };

  login = async (req: Request, res: Response) => {
    await loginPOST.validateAsync(req.body);
    const { login, password } = req.body;
    if (!(login && password)) {
      res.status(400).send('All input is required');
    }
    const user: any = await this.userService.getUserByLogin(login);
    if (user && (await bcrypt.compare(password, user[0].password))) {
      const refreshToken = v4();
      const token = jwt.sign(
        { login: login },
        process.env.TOKEN_KEY as string,
        {
          expiresIn: '55m',
        }
      );
      user[0].refreshToken = refreshToken;
      await this.userService.updateToken(login, refreshToken);

      res.status(200).json({
        token: token,
        refreshToken: refreshToken,
      });
    }
    res.status(400).send('Invalid Credentials');
  };

  refreshToken = async (req: Request, res: Response) => {
    await refreshPOST.validateAsync(req.body);
    const { refreshToken } = req.body;
    const dbToken = await this.userService.findToken(refreshToken);
    const isEmpty = function (obj: Object): boolean {
      for (let _key in obj) {
        return false;
      }
      return true;
    };
    if (isEmpty(dbToken)) {
      res.status(400).send('Invalid Token');
    }
    const user: any = await this.userService.getUserByRefreshToken(
      refreshToken
    );
    const newRefreshToken = v4();
    const token = jwt.sign(
      { login: user[0].login },
      process.env.TOKEN_KEY as string,
      {
        expiresIn: '55m',
      }
    );
    user[0].refreshToken = newRefreshToken;
    await this.userService.updateToken(user[0].login, user[0].refreshToken);

    res.status(200).json({
      token: token,
      refreshToken: newRefreshToken,
    });
  };

  registerNewUser = async (req: Request, res: Response) => {
    await registerPOST.validateAsync(req.body);
    const { name, login, password } = req.body;

    if (!(password && name && login)) {
      res.status(400).send('All input is required');
    }
    const oldUser = await this.userService.getUserByLogin(login);
    const isNotEmpty = function (obj: Object): boolean {
      for (let _key in obj) {
        return true;
      }
      return false;
    };
    if (isNotEmpty(oldUser)) {
      return res.status(409).send('User Already Exist. Please Login');
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const refreshToken = v4();
    const token = jwt.sign({ login: login }, process.env.TOKEN_KEY as string, {
      expiresIn: '55m',
    });

    const user: any = await this.userService.createNewUser(
      name,
      login,
      encryptedPassword,
      refreshToken
    );
    user.token = token;
    res.status(201).json(user);
  };
}

export default UserController;
