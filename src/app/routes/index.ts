import express from 'express';
import { ReviewAndRatingRoutes } from '../modules/ReviewAndRating/ReviewAndRating.routes';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { CategoryRoutes } from '../modules/category/category.routes';
import { ProfileRoutes } from '../modules/profile/profile.routes';
import { TrailerRoutes } from '../modules/trailer/trailer.routes';
import { UserRoutes } from '../modules/user/user.routes';
import { WatchListRoutes } from '../modules/watchlist/watchlist.routes';
import { MovieRoutes } from './../modules/movie/movie.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/profile',
    route: ProfileRoutes,
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
  {
    path: '/review&ratings',
    route: ReviewAndRatingRoutes,
  },
  {
    path: '/watchlist',
    route: WatchListRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
