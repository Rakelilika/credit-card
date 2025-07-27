type CreditCardProps = {
    number: string
    name: string
    expiry: string
  }
  
  export default function CreditCard({ number, name, expiry }: CreditCardProps) {
    return (
      <div className="bg-white shadow-md rounded-xl p-6 w-80 h-48 flex flex-col justify-between text-sm text-gray-700">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl text-gray-400">••••</div>
          <div className="text-gray-300 text-sm">VISA</div>
        </div>
        <div className="text-xl tracking-widest font-semibold text-600">
          {number}
        </div>
        <div className="flex justify-between text-xs">
          <div>{name}</div>
          <div className="text-gray-500">{expiry}</div>
        </div>
      </div>
    )
  }