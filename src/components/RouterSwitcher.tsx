import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import HomePage from '../pages/Home';
import BritishArmy from '../pages/British-Army';
import ACS from '../pages/ACS';
import VirginMedia from '../pages/Virgin-Media';
import CrystalSki from '../pages/CrystalSki';
import Misc from '../pages/Misc';


const RouteSwitcher = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/british-army" element={<BritishArmy/>} />
      <Route path="/acs" element={<ACS/>} />
      <Route path="/virgin-media" element={<VirginMedia />} />
      <Route path="/crystalski" element={<CrystalSki />} />
      <Route path="/Misc" element={<Misc />} />
      
      
    </Routes>
    
  );
};

export default RouteSwitcher;