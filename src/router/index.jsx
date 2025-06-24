import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import NivelBasico from '../pages/NivelBasico/NivelBasico';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/nivel-basico',
    element: <NivelBasico />,
  },

]);
