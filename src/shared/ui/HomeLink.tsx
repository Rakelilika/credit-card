import Link from 'next/link';

type HomeLinkProps = {
  text?: string;
  className?: string;
};

export default function HomeLink({
  text = '< Back to Home',
  className = 'text-2xl text-600 font-bold hover:underline mb-8 block',
}: HomeLinkProps) {
  return (
    <Link href="/" className={className}>
      {text}
    </Link>
  );
}