import { dbRepo } from '../../../Config/db.config.js';
import bcrypt from 'bcryptjs';
import { randomUUID } from 'crypto';
import HttpException from '../../Exceptions/http.exceptions.js';
import { PrismaClient } from '@prisma/client';

class WorkerAuthModel {
  #authRepository = dbRepo;
  prisma = new PrismaClient()

  // Auth Register
  register = async ({ name, email, password, phone }) => {
    const query = `INSERT INTO workers(id, name, email, password, phone) VALUES('${randomUUID()}', '${name}', '${email}', '${password}', '${phone}')`;
    const workerRegister = await this.#authRepository.query(query);
    return workerRegister.rows;
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
