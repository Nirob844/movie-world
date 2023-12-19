import { Movie, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import prisma from '../../../shared/prisma';
import { IPaginationOptions } from './../../../interfaces/pagination';
import {
  movieRelationalFields,
  movieRelationalFieldsMapper,
  movieSearchAbleFields,
} from './movie.constants';

const insertIntoDB = async (data: Movie): Promise<Movie> => {
  const result = await prisma.movie.create({
    data,
    include: {
      category: true,
    },
  });

  return result;
};

const getAllFromDB = async (
  filters: any,
  options: IPaginationOptions
): Promise<IGenericResponse<Movie[]>> => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: movieSearchAbleFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => {
        if (movieRelationalFields.includes(key)) {
          return {
            [movieRelationalFieldsMapper[key]]: {
              id: (filterData as any)[key],
            },
          };
        } else {
          return {
            [key]: {
              equals: (filterData as any)[key],
            },
          };
        }
      }),
    });
  }

  const whereConditions: Prisma.MovieWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.movie.findMany({
    include: {
      category: true,
    },
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : {
            createdAt: 'desc',
          },
  });
  const total = await prisma.movie.count({
    where: whereConditions,
  });

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getDataById = async (id: string): Promise<Movie | null> => {
  const result = await prisma.movie.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
    },
  });

  return result;
};

const getDataByCategoryId = async (
  categoryId: string,
  options: IPaginationOptions
): Promise<IGenericResponse<Movie[]>> => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);

  const results = await prisma.movie.findMany({
    include: {
      category: true,
    },
    where: {
      categoryId: categoryId,
    },
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : {
            createdAt: 'desc',
          },
  });
  const total = await prisma.movie.count({
    where: {
      categoryId: categoryId,
    },
  });

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: results,
  };
};

const updateOneInDB = async (
  id: string,
  payload: Partial<Movie>
): Promise<Movie> => {
  const result = await prisma.movie.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteByIdFromDB = async (id: string): Promise<Movie> => {
  const result = await prisma.movie.delete({
    where: {
      id,
    },
  });
  return result;
};

export const MovieService = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  getDataByCategoryId,
  updateOneInDB,
  deleteByIdFromDB,
};
