import { Trailer } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: Trailer): Promise<Trailer> => {
  const result = await prisma.trailer.create({
    data,
  });

  return result;
};

const getAllFromDB = async (): Promise<Trailer[]> => {
  const result = await prisma.trailer.findMany({
    include: {
      movie: true,
    },
  });
  return result;
};

const getDataById = async (id: string): Promise<Trailer | null> => {
  const result = await prisma.trailer.findUnique({
    where: {
      id,
    },
    include: {
      movie: true,
    },
  });

  return result;
};

const updateOneInDB = async (
  id: string,
  payload: Partial<Trailer>
): Promise<Trailer> => {
  const result = await prisma.trailer.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteByIdFromDB = async (id: string): Promise<Trailer> => {
  const result = await prisma.trailer.delete({
    where: {
      id,
    },
  });
  return result;
};

export const TrailerService = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  updateOneInDB,
  deleteByIdFromDB,
};
