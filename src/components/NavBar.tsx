import { AppShell} from '@mantine/core';
import MainMenu from './ActiveLink';

interface NavbarProps {
  closeMenu: () => void;
}

const Navbar = ({ closeMenu }: NavbarProps) => {
  return (
    <div>
      <AppShell.Navbar className='theme110'>
        <MainMenu closeMenu={closeMenu} />
      </AppShell.Navbar>
    </div>
  );
};

export default Navbar;