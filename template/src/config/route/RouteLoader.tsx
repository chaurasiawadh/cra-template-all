import React, { ReactElement, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import Spinner from '../../shared/components/Spinner';

const RouteLoader = (): ReactElement | null => {

  return (
    <React.Fragment>
      <Router basename="/">
        <Suspense fallback={<Spinner />}>
          <PublicRoutes />
          {/* <Main>
              <PrivateRoutes />
            </Main> */}
        </Suspense>
      </Router>
    </React.Fragment>
  );
};

export default RouteLoader;
