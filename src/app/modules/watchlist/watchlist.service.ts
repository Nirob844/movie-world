import { WatchList } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: WatchList): Promise<WatchList> => {
  const result = await prisma.watchList.create({
    data,
  });

  return result;
};

const getAllFromDB = async (
  userId: string,
  role: string
): Promise<WatchList[]> => {
  if (role === 'admin') {
    // Administrators can access all WatchLists
    const allWatchLists = await prisma.watchList.findMany({
      include: {
        user: true,
        movie: true,
      },
    });
    return allWatchLists;
  } else if (role === 'customer') {
    // Customers can access their own WatchLists
    const customerWatchLists = await prisma.watchList.findMany({
      where: {
        userId: userId, // Filter WatchLists by the customer's userId
      },
      include: {
        user: true,
        movie: true,
      },
    });
    return customerWatchLists;
  } else {
    // Handle other roles or throw an error if needed
    throw new Error('Invalid role');
  }
};

const updateOneInDB = async (
  id: string,
  payload: Partial<WatchList>
): Promise<WatchList> => {
  const result = await prisma.watchList.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteByIdFromDB = async (id: string): Promise<WatchList> => {
  const result = await prisma.watchList.delete({
    where: {
      id,
    },
  });
  return result;
};

export const WatchListService = {
  insertIntoDB,
  getAllFromDB,
  updateOneInDB,
  deleteByIdFromDB,
};
