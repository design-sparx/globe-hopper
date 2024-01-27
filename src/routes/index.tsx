import { createBrowserRouter } from 'react-router-dom';
import {
  ErrorPage,
  FlightBookingPage,
  StaysBookingPage,
  TravelPage,
} from '@/pages';
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
    path: 'flights',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: '', element: <FlightBookingPage /> }],
  },
  {
    path: 'stays',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: '', element: <StaysBookingPage /> }],
  },
]);
