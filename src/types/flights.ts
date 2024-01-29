export type IFlightSearch = {
  id: string;
  flight_number: number;
  departure_airport: string;
  arrival_airport: string;
  departure_date: string;
  arrival_date: string;
  departure_time: string;
  arrival_time: string;
  airline: string;
  airline_icon: string;
  flight_class: string;
  passenger_count: number;
  carry_on_included: boolean;
  refundable: boolean;
};
