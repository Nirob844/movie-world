import { WatchList } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { JwtPayload } from 'jsonwebtoken';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { WatchListService } from './watchlist.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await WatchListService.insertIntoDB(req.body);
  sendResponse<WatchList>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'WatchList Created!!',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const { userId, role } = req.user as JwtPayload;

  const result = await WatchListService.getAllFromDB(userId, role);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' data fetched!!',

    data: result,
  });
});

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await WatchListService.updateOneInDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'updated successfully',
    data: result,
  });
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await WatchListService.deleteByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'delete successfully',
    data: result,
  });
});

export const WatchListController = {
  insertIntoDB,
  getAllFromDB,
  updateOneInDB,
  deleteByIdFromDB,
};
