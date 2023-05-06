import HttpException from '../Exceptions/http.exceptions.js';
import { PrismaClient } from '@prisma/client';

class WorkerModel {
  prisma = new PrismaClient()

  // Count Product
  #countWorker = async (search) => {
    return await this.prisma.workers
      .aggregate({
        _count: {
          id: true,
        },
        where: {
          name: {
            contains: search || '',
          },
        },
      })
      .then((res) => res._count.id);
  };

  exclude(workers, key) {
    for (let worker of workers) {
      delete worker[key]
    }
    return workers
  }

  // Get All workers Service
  getAllWorker = async ({ search, sortBy, sort, page, limit }) => {
    page = Number(page) || 1;
    limit = Number(limit) || 10;
    const offset = (page - 1) * limit;
    let workers = await this.prisma.workers.findMany({
 
      include: {
        worker_skills: {
          // Seller field is only name and email we need
          select: {
            skill: true,
          },
        }
      },
      where: {
        name: {
          // Filtering data with search
          contains: search,
          mode: 'insensitive',
        },
      },
      orderBy: [
        // Ordering and sorting data workers
        {
          [sortBy || 'id']: sort || 'desc',
        },
      ],
      take: Number(limit), // Limit
      skip: offset, // Offser
    });

    // Error Handling when product is not found!
    if (workers.length == 0) {
      throw new HttpException(404, 'Worker not found!');
    }

    workers = this.exclude(workers, 'password')

    let totalData;

    if (search) {
      totalData = await this.#countWorker(search);
    } else {
      totalData = await this.#countWorker();
    }

    // Get Total Page
    const totalPage = Math.ceil(totalData / limit);
    return {
      data: workers,
      currentPage: page,
      totalPage,
      count: totalData,
      limit,
    };
  };

  // Get single User
  getWorkerById = async (id) => {
    let worker = await this.prisma.workers.findUnique({
      include: {
        worker_skills: {
          // Seller field is only name and email we need
          select: {
            id: true,
            skill: true,
          },
        },
        experiences: {
          orderBy: [
            {
              createdAt: 'desc'
            }
          ]
        },
        portofolios: true
      },
      where: {
        id: id
      }
    });
    const {password, ...other} = worker

    return other;
  };

  // Update workers by Id
  updateWorkerById = async (id, data) => {
    console.log(data)
    const worker = await this.prisma.workers.update({
      data: data,
      where : {
        id: id
      }
    })

    return worker
  };
}

export default WorkerModel;
