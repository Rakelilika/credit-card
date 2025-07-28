type CreditBalanceProps = {
    amount: number
}
  
  export default function CreditBalance({ amount }: CreditBalanceProps) {
    return (
        <div className="bg-white border border-gray-300 rounded-xl p-4 w-55 ml-4 text-gray-700 flex items-center justify-center gap-4 border-t">
            <div className="text-center">
                <p className="text-xs text-gray-500">Amount Available</p>
                <p className="font-semibold text-lg">${amount}</p>
            </div>
      </div>
    );
  }