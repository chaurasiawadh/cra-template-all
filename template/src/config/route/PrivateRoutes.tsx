import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import { RouteConfig } from 'src/shared/models/routeModels';

const PrivateRoutes = (): ReactElement => {

  const routesList: RouteConfig[] = [];

  return (
    <React.Fragment>
      <Switch>
        {
          routesList.map((item: RouteConfig): ReactElement => {
            return (
              <Route
                exact={item.isExact}
                key={item.path}
                path={item.path}
                component={item.component}
              />
            );
          },
          )
        }
      </Switch>
    </React.Fragment>
  );
};

export default PrivateRoutes;
