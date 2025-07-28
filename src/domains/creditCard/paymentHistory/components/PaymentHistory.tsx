'use client';

import { mockPayments } from '../data';
import Icon from '@/shared/ui/Icon';
import { MoreHorizontal } from 'lucide-react';

const getTypeClass = (type: 'PURCHASE' | 'CREDIT') => {
    switch (type) {
      case 'PURCHASE':
        return 'text-orange-500 font-semibold';
      case 'CREDIT':
      default:
        return 'text-gray-700';
    }
  };

  const getTypeAmount = (type: 'PURCHASE' | 'CREDIT') => {
    switch (type) {
      case 'PURCHASE':
      case 'CREDIT':
          return '-';
      default:
        return '+';
    }
  };

export default function PaymentHistory() {
    return (
        <section className="w-[800px] max-h-[250px] overflow-y-auto bg-white p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Payment History</h2>
        <table className="min-w-full text-sm">
          <tbody className="text-gray-700 divide-y divide-gray-100">
            {mockPayments.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <Icon name="CircleDot" className="text-gray-500 hover:text-black" size={15} />
                    <span>{item.title}</span>
                  </div>
                </td>
                <td className={`flex whitespace-nowrap items-center gap-2 px-4 py-3 ${getTypeClass(item.type)}`}>
                  <Icon
                    name="CircleDot"
                    className={`${getTypeClass(item.type)} hover:text-black`}
                    size={15}
                  />
                  {item.type}
                </td>
                <td className="px-6 py-3 text-gray-500">{item.date}</td>
                <td className="px-4 py-3 text-right font-medium text-red-500">{getTypeAmount(item.type)}${item.amount.toFixed(2)}</td>
                <td className="px-4 py-3 text-center text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }