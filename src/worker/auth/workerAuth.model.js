import bcrypt from 'bcryptjs';
import { randomUUID } from 'crypto';
import HttpException from '../../Exceptions/http.exceptions.js';
import { PrismaClient } from '@prisma/client';

class WorkerAuthModel {
  prisma = new PrismaClient()

  // Auth Register
  register = async (data) => {
    const id = randomUUID()
    const {iat, exp, ...other} = data
    const regis = await this.prisma.workers.create({
      data: {...other, id}
    })

    return regis

  };

  // Login
  login = async (data) => {

    // const queryFindEmail = `SELECT * FROM workers WHERE email='${data.email}'`;
    // const findEmail = await this.#authRepository.query(queryFindEmail);
    const findEmail = await this.prisma.workers.findUnique({
      where : {
        email: data.email
      }
    })

    if (!findEmail) {
      throw new HttpException(401, 'Unauthenticated');
    }

    const isValidPassword = bcrypt.compareSync(data.password, findEmail.password);
    if (!isValidPassword) {
      throw new HttpException(403, 'Email or Password is invalid!');
    }

    const { id, name, role, photo } = findEmail;
    return { id, name, role, photo };
  };
}

export default WorkerAuthModel;
