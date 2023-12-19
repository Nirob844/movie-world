import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { CategoryRoutes } from '../modules/category/category.routes';
import { TrailerRoutes } from '../modules/trailer/trailer.routes';
import { MovieRoutes } from './../modules/movie/movie.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/trailers',
    route: TrailerRoutes,
  },
  {
    path: '/movies',
    route: MovieRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
