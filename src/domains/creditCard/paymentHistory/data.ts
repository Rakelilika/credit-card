import { Payment } from './types';

export const mockPayments: Payment[] = [
  {
    id: 1,
    title: 'Netflix',
    date: 'March 20, 2022',
    amount: '-$10.00',
    type: 'purchase',
  },
  {
    id: 2,
    title: 'Spotify',
    date: 'March 20, 2022',
    amount: '-$10.00',
    type: 'purchase',
  },
  {
    id: 3,
    title: 'Apple Store',
    date: 'March 20, 2022',
    amount: '-$10.00',
    type: 'purchase',
  },
  {
    id: 4,
    title: 'Balance available',
    date: 'March 19, 2022',
    amount: '-$10.00',
    type: "credit",
  },
  {
    id: 5,
    title: 'Balance available',
    date: 'March 19, 2022',
    amount: '-$10.00',
    type: 'purchase',
  },
];