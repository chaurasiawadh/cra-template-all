import { LazyExoticComponent, ComponentType } from 'react';

export interface RouteConfig {
  path?: string;
  component?: LazyExoticComponent<ComponentType<any>> | ComponentType;
  isExact?: boolean | undefined;
  children?: any;
  isPublic?: boolean;
  subRoutes?: RouteConfig[];
}

export interface RouteType {
  publicRoutes: RouteConfig[];
  privateRoutes: RouteConfig[];
}

export interface RouteParams {
  id?: string;
}
