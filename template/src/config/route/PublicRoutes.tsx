import { ReactElement } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RouteConfig } from 'src/shared/models/routeModels';
import RoutesConfig from './RoutesConfig';

const PublicRoutes = (): ReactElement => {
  return (
    <Switch>
      {
        RoutesConfig.publicRoutes.map(({ path, component }: RouteConfig): ReactElement => {
          return (
            <Route
              exact={true}
              key={path}
              path={path}
              component={component}
            />
          );
        },
        )
      }
      <Route path="*" ><Redirect to="/" /></Route>
    </Switch>
  );
};

export default PublicRoutes;
