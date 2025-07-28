import { Payment } from './types';

export const mockPayments: Payment[] = [
  {
    id: 1,
    title: 'La casa en el mar más azul',
    date: 'March 20, 2022',
    amount: 10.00,
    type: 'PURCHASE',
  },
  {
    id: 2,
    title: 'Siega',
    date: 'March 20, 2022',
    amount: 10.00,
    type: 'PURCHASE',
  },
  {
    id: 3,
    title: 'Piso para dos',
    date: 'March 20, 2022',
    amount: 10.00,
    type: 'PURCHASE',
  },
  {
    id: 4,
    title: 'Balance available',
    date: 'March 19, 2022',
    amount: 10.00,
    type: "CREDIT",
  },
  {
    id: 5,
    title: 'Balance available',
    date: 'March 19, 2022',
    amount: 10.00,
    type: 'CREDIT',
  },
];