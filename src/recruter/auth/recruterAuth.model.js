import bcrypt from 'bcryptjs';
import HttpException from '../../Exceptions/http.exceptions.js';
import { randomUUID } from 'crypto';
import { PrismaClient } from '@prisma/client';

class RecruterAuthModel {
  prisma = new PrismaClient()

  // Auth Register
  register = async (data) => {
    const id = randomUUID()
    const {iat, exp, ...other} = data
    const regis = await this.prisma.recruters.create({
      data: {...other, id}
    })

    return regis
  };

  // Login
  login = async (data) => {
    const findEmail = await this.prisma.recruters.findUnique({
      where: {
        email: data.email
      }
    })

    console.log(findEmail)

    if (!findEmail) {
      throw new HttpException(401, 'Unauthenticated');
    }

    const isValidPassword = bcrypt.compareSync(data.password, findEmail.password);
    if (!isValidPassword) {
      throw new HttpException(401, 'Email or Password is invalid!');
    }
    const { id, name, email, role } = findEmail;
    return { id, name, email, role };
  };
}

export default RecruterAuthModel;
