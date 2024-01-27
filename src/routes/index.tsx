import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage, FlightBookingPage, TravelPage } from '../pages';
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
  {
    path: 'flight',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: '', element: <FlightBookingPage /> }],
  },
]);
