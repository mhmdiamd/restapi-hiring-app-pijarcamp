import { dbRepo } from '../../../Config/db.config.js';
import bcrypt from 'bcryptjs';
import HttpException from '../../Exceptions/http.exceptions.js';
import { randomUUID } from 'crypto';
import { PrismaClient } from '@prisma/client';

class RecruterAuthModel {
  #DB = dbRepo;
  prisma = new PrismaClient()

  // Auth Register
  register = async ({ name, email, password, company_name, position, phone }) => {
    const query = `INSERT INTO recruters(id, name, email, company_name, password, position, phone) VALUES('${randomUUID()}', '${name}', '${email}', '${company_name}','${password}', '${position}', '${phone}')`;
    const recruterRegister = await this.#DB.query(query);
    return recruterRegister.rows;
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
