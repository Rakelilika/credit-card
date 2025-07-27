export interface Payment {
    id: number;
    title: string;
    date: string;
    amount: string;
    type: 'purchase' | 'credit';
  }