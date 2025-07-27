import * as Icons from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

type IconName = keyof typeof Icons;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export default function Icon({ name, size = 20, className = '' }: IconProps) {
  const LucideIcon = Icons[name] as LucideIcon;

  if (!LucideIcon) return null;

  return <LucideIcon size={size} className={className} />;
}