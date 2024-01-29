import { createBrowserRouter } from 'react-router-dom';
import {
  CarRentalBookingPage,
  ErrorPage,
  FlightBookingPage,
  FlightsListingPage,
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
    children: [
      { path: '', element: <FlightBookingPage /> },
      { path: 'listing', element: <FlightsListingPage /> },
    ],
  },
  {
    path: 'stays',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: '', element: <StaysBookingPage /> }],
  },
  {
    path: 'car-rentals',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: '', element: <CarRentalBookingPage /> }],
  },
]);
