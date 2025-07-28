type UserDataProps = {
  name: string;
  today: Date;
  avatar: string;
};

import Image from "next/image";

export default function CreditCard({ name, today, avatar }: UserDataProps) {
  return (
    <div className="bg-white border border-gray-300 rounded-xl p-4 w-55 ml-4 text-gray-700 flex items-center justify-center gap-4 border-t">
      <div className="text-center"> 
        <Image
          src={avatar}
          alt={`${name} avatar`}
          width={40}
          height={40}
          className="rounded-full object-cover"
          style={{display:'inline'}}
        />
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-xs text-gray-500">{today.toLocaleDateString()}</p>
      </div>
    </div>
  );
}
