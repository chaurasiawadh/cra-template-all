import { ReactElement } from 'react';
import Header from './header/Header';

const Layout = ({ children }: any): ReactElement => {
  return (
    <section className="main-container">
        <Header />
        {children}
    </section>
  );
};

export default Layout;
