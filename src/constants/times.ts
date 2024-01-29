import { MoonIcon, SunIcon, SunriseIcon } from 'lucide-react';

export const TIMES_OF_DAY = [
  {
    icon: SunriseIcon,
    timeOfDay: 'morning',
    startTime: '5.00am',
    endTime: '11.59am',
  },
  {
    icon: SunIcon,
    timeOfDay: 'afternoon',
    startTime: '12.00pm',
    endTime: '5.59pm',
  },
  {
    icon: MoonIcon,
    timeOfDay: 'evening',
    startTime: '6.00pm',
    endTime: '11.59pm',
  },
];
