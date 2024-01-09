import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage, TravelPage } from '../pages';
import { MainLayout } from '../layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <TravelPage />,
      },
    ],
  },
]);
