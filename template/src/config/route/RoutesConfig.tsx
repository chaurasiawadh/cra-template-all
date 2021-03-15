import { lazy } from 'react';
import { RouteType } from 'src/shared/models/route.models';

const RoutesConfig: RouteType = {
  publicRoutes: [
    {
      path: '/login',
      isPublic: true,
      component: lazy((): any => import('src/modules/login/Login')),
    },
    {
      path: '/',
      isPublic: true,
      component: lazy((): any => import('src/modules/home/Home')),
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
          component: lazy((): any => import('src/shared/components/NotFoundComponent')),
        },
      ],
    },
  ],
};
export default RoutesConfig;
