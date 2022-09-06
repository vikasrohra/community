import Header from './Components/Header';
import Hero from './Components/Hero';
import SideNav from './Components/SideNav';
import RightSection from './Components/RightSection';
import './App.css';
import { useEffect, useState } from 'react';
import BottomNav from './Components/BottomNav';

function App() {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(!animate);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <Header animate={animate} />
      <section className='flex mt-20 mb-20 lg:mb-0 md:mt-[5rem] lg:flex lg:flex-row lg:mt-20'>
        <SideNav animate={animate} />
        <Hero animate={animate} />
        <RightSection animate={animate} />
      </section>      
      <BottomNav animate={animate} />
    </div>
  );
}

export default App;
