export interface Payment {
    id: number;
    title: string;
    date: string;
    amount: number;
    type: 'PURCHASE' | 'CREDIT';
}