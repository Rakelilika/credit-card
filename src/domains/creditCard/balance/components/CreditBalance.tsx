type CreditBalanceProps = {
    amount: number
  }
  
  export default function CreditBalance({ amount }: CreditBalanceProps) {
    return (
        <div className="bg-white shadow-md rounded-xl p-4 w-55  text-gray-700 flex items-center justify-center gap-4 border-t">
            <div className="text-center">
                <p className="text-xs text-gray-500">Amount Available</p>
                <p className="font-semibold text-lg">${amount}</p>
            </div>
           
      </div>
    );
  }