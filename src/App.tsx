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
  const [opened, {toggle}] = useDisclosure();

  return (

    <div>
      <ScrollToTop />
      <AppShell className='theme100'
        withBorder={false}
        header={{height: 80}}
        navbar={{width: 300, breakpoint: 'xl', collapsed: {mobile: !opened}}}
      >
        <Header toggle={toggle} opened={opened}/>
        <Navbar />
        <AppShell.Main>
        <RouterSwitcher />
       </AppShell.Main>
       <Footer />

      </AppShell>

      </div>
  );
}

export default App;