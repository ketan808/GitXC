import { AppShell} from '@mantine/core';
import MainMenu from './ActiveLink';

const Navbar = () => {


  return (


 <div>

<AppShell.Navbar className='theme90' >


{/* <NavLink
        href="#required-for-focus"
        label="Home"
        onClick={() => navigate('/home-page')}
        leftSection={<IconHome2 size="1rem" stroke={1.5} />}
      /> */}

    

<MainMenu />


</AppShell.Navbar>

</div>

  );
};




export default Navbar;