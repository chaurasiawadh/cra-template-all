import { lazy } from 'react';
import { RouteType } from '../../shared/models/route.models';

const RoutesConfig: RouteType = {
  publicRoutes: [
    {
      path: '/login',
      isPublic: true,
      component: lazy((): any => import('../../modules/login/Login')),
    },
    {
      path: '/',
      isPublic: true,
      component: lazy((): any => import('../../modules/home/Home')),
    },
  ],
  privateRoutes: [
    {
      path: '/',
      isPublic: false,
      isExact: true,
      subRoutes: [
        {
          path: 'path name who show in URL',
          isPublic: false,
          isExact: false,
          // component: lazy((): any => import('component path')),
        },
        {
          path: '*',
          isPublic: false,
          component: lazy((): any => import('../../shared/components/NotFoundComponent')),
        },
      ],
    },
  ],
};
export default RoutesConfig;
