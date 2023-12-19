import { Movie } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { movieFilterAbleFields } from './movie.constants';
import { MovieService } from './movie.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await MovieService.insertIntoDB(req.body);
  sendResponse<Movie>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Movie Created!!',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, movieFilterAbleFields);
  const options = pick(req.query, paginationFields);
  const result = await MovieService.getAllFromDB(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Movie data fetched!!',
    meta: result.meta,
    data: result.data,
  });
});

const getDataByCategoryId = catchAsync(async (req: Request, res: Response) => {
  const options = pick(req.query, paginationFields);
  const result = await MovieService.getDataByCategoryId(
    req.params.categoryId,
    options
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Movie data fetched!!',
    meta: result.meta,
    data: result.data,
  });
});

const getDataById = catchAsync(async (req: Request, res: Response) => {
  const result = await MovieService.getDataById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Movie data fetched!!',
    data: result,
  });
});

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await MovieService.updateOneInDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Movie updated successfully',
    data: result,
  });
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await MovieService.deleteByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Movie delete successfully',
    data: result,
  });
});

export const MovieController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  getDataByCategoryId,
  updateOneInDB,
  deleteByIdFromDB,
};
