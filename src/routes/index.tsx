import { createBrowserRouter } from 'react-router-dom';
import {
  CarRentalBookingPage,
  ErrorPage,
  FlightBookingPage,
  StaysBookingPage,
  TravelPage,
} from '@/pages';
import { MainLayout } from '../layout';
import { PATH_CAR_RENTALS, PATH_FLIGHTS, PATH_STAYS } from '@/constants';

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
    path: PATH_FLIGHTS.root,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: '', element: <FlightBookingPage /> }],
  },
  {
    path: PATH_STAYS.root,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: '', element: <StaysBookingPage /> }],
  },
  {
    path: PATH_CAR_RENTALS.root,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: '', element: <CarRentalBookingPage /> }],
  },
]);
