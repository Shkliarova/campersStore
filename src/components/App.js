import { Routes, Route } from "react-router-dom"
import { AppLayout } from "./AppLayout/AppLayout"
import { GlobalStyle } from "./GlobalStyled"
import { lazy } from "react"

const HomePage = lazy(() => import('../pages/Home/HomePage'));
const CatalogPage = lazy(() => import('../pages/Catalog/CatalogPage'));
const FavoritePage = lazy(() => import('../pages/Favorite/FavoritePage'));

export const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={ <AppLayout/> }>
        <Route index element={ <HomePage/> } />
        <Route path="catalog" element={ <CatalogPage/> } />
        <Route path="favorites" element={ <FavoritePage/> } />
      </Route>
      <Route path="*" element={ <HomePage/> } />
    </Routes>
    <GlobalStyle/>
    </div>
  );
};
