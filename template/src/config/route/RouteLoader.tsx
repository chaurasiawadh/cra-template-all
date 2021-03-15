import React, { ReactElement, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import Spinner from 'src/shared/components/Spinner';
import Layout from 'src/layout/Layout';

const RouteLoader = (): ReactElement | null => {

  return (
    <React.Fragment>
      <Router basename="/">
        <Suspense fallback={<Spinner />}>
          {/* {isAccessToken ? 
           <Layout>
           <PublicRoutes />
           </Layout>
           :
           <PublicRoutes />
          } */}
          
          <Layout>
          <PublicRoutes />
          </Layout>
        </Suspense>
      </Router>
    </React.Fragment>
  );
};

export default RouteLoader;
