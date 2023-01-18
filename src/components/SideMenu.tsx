import classNames from 'classnames';
import MenuCloseIcon from '/images/icon-menu-close.svg';

type SideMenuProps = {
  isMenuOpen: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const links = ['home', 'new', 'popular', 'trending', 'categories'];

export default function SideMenu({ isMenuOpen, onClick }: SideMenuProps) {
  return (
    <div className={classNames("fixed bg-overlay top-0 left-0 right-0 bottom-0 lg:hidden ease-in-out duration-500",
      { "translate-x-0": isMenuOpen, "translate-x-full": !isMenuOpen },

    )}>
      <div className="bg-off-white w-[256px] h-screen pl-6 pr-[29px] absolute right-0 pt-[27px]">
        <div className='w-[30px] h-[30px] absolute right-7 cursor-pointer' onClick={onClick}>
          <img src={MenuCloseIcon} alt="times icon" />
        </div>
        <ul className='flex flex-col gap-6 mt-[86px]'>
          {links.map((link) => (<li key={link} className='text-dark-space-blue text-lg capitalize cursor-pointer'>{link}</li>))}
        </ul>
      </div>

    </div>
  );
}