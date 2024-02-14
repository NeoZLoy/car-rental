import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <Header/>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};