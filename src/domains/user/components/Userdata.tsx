type UserDataProps = {
  name: string;
  today: Date;
  avatar: string;
};

export default function CreditCard({ name, today, avatar }: UserDataProps) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-55  text-gray-700 flex items-center justify-center gap-4 border-t">
      <div className="text-center">
            <img
              src={avatar}
              alt={`${name} avatar`}
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="font-semibold text-sm">{name}</p>
            <p className="text-xs text-gray-500">{today.toLocaleDateString()}</p>
        </div>
    </div>
  );
}
