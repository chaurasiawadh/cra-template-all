import { RouteConfig } from 'src/shared/models/routeModels';
import { ReactElement } from 'react';
import Header from './header/Header';

const Layout = ({ children }: RouteConfig): ReactElement => {
  return (
    <section className="main-container">
        <Header />
        {children}
    </section>
  );
};

export default Layout;
