import Link from 'next/link';

type NavLinkProps = {
  text: string;
  isActive: boolean;
  href: string;
  backgroundClass: string;
  onClick: () => void;
};
const NavLink: React.FC<NavLinkProps> = ({
  text,
  isActive,
  href,
  backgroundClass,
  onClick,
}) => {
  return (
    <Link
      href={href}
      className={`touch z-20 grid aspect-square place-items-center rounded-full p-2 delay-0 ${
        isActive ? backgroundClass : 'bg-transparent'
      }`}
      transition-style={isActive ? 'in:circle:hesitate' : ''}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default NavLink;
