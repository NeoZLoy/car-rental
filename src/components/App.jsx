import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "../pages/HomePage/HomePage";
import { Catalog } from "../pages/Catalog/Catalog";
import { Favorites } from "../pages/Favorites/FavoritesPage";


// const Home = lazy(() => import('../pages/HomePage/HomePage.jsx'));
// const Catalog = lazy(() => import('../pages/Catalog/Catalog.jsx'));
// const Favorites = lazy(() => import('../pages/Favorites/FavoritesPage.jsx'));


export const App = () => {



  return (
    <BrowserRouter basename='/car-rental'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="catalog" element={<Catalog />}></Route>
          <Route path="favorites" element={<Favorites />}></Route>
          <Route path="*" element={<HomePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};