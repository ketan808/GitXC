import './theme.css';
import {useDisclosure} from '@mantine/hooks';
import ScrollToTop from "./utils/ScrollToTop";
import {
  AppShell, 
} from '@mantine/core';
import Navbar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import RouterSwitcher from './components/RouterSwitcher';

function App() {
  const [opened, {toggle, close}] = useDisclosure();

  return (
    <div>
      <ScrollToTop />
      <AppShell className='theme100'
        withBorder={true}
        header={{height: 80}}
        navbar={{width: 300, breakpoint: '88em', collapsed: {mobile: !opened}}}
      >
        <Header toggle={toggle} opened={opened}/>
        <Navbar closeMenu={close} />
        <AppShell.Main>
          <RouterSwitcher />
        </AppShell.Main>
        <Footer />
      </AppShell>
    </div>
  );
}

export default App;