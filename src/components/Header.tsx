import Logo from '/images/logo.svg';
import MenuIcon from '/images/icon-menu.svg';

type HeaderProps = {
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const links = ['home', 'new', 'popular', 'trending', 'categories'];

export default function Header({ onClick }: HeaderProps) {
  return (
    <nav className='flex justify-between items-center pt-7'>
      <div className='w-11 h-7 md:w-16 md:h-[39px]'>
        <img src={Logo} alt="logo" />
      </div>
      <ul className='hidden lg:flex lg:items-center lg:gap-10'>
        {links.map((link) => (<li key={link} className='lg:text-gun-memtal capitalize cursor-pointer hover:text-soft-red transform transition-all'>{link}</li>))}
      </ul>
      <div className='w-10 h-[17px] lg:hidden cursor-pointer' onClick={onClick}>
        <img src={MenuIcon} alt="menu icon" />
      </div>
    </nav>
  );
}