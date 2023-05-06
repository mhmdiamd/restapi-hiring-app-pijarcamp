import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import WorkerAuthModel from '../worker/auth/workerAuth.model.js';
import RecruterAuthModel from './../recruter/auth/recruterAuth.model.js';
import HttpException from '../Exceptions/http.exceptions.js';
import { successResponse } from './response.js';

const workerAuthModel = new WorkerAuthModel();
const recruterAuthModel = new RecruterAuthModel();

export const workerEmailActivation = async (req, res, next) => {
  const { token } = req.params;
  jwt.verify(token, process.env.EMAIL_ACTIVATION_TOKEN, async (err, user) => {
    if (err) {
      return next(new HttpException(500, err.message));
    }
    try {
      var salt = bcrypt.genSaltSync(10);
      var password = bcrypt.hashSync(user.password, salt);
      user = { ...user, password };

      await workerAuthModel.register(user);

      successResponse(res, 201, 'Register success!', {});
    } catch (err) {
      if (err.message.includes('duplicate')) {
        next(new HttpException(err.status, 'Email has already taken!'));
      }
      next(new HttpException(err.status, err.message));
    }
  });
};

export const recruterEmailActivation = async (req, res, next) => {
  const { token } = req.params;
  jwt.verify(token, process.env.EMAIL_ACTIVATION_TOKEN, async (err, user) => {
    if (err) {
      console.log(err)
      return next(new HttpException(500, err.message));
    }
    try {
      var salt = bcrypt.genSaltSync(10);
      var password = bcrypt.hashSync(user.password, salt);
      user = { ...user, password };

      console.log(user)
      await recruterAuthModel.register(user);

      successResponse(res, 201, 'Register success!', {});
    } catch (err) {
      if (err.message.includes('duplicate')) {
        next(new HttpException(err.status, 'Email has already taken!'));
      }
      console.log(err)
      next(new HttpException(err.status, err.message));
    }
  });
};
