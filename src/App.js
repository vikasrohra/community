import Header from './Components/Header';
import Hero from './Components/Hero';
import SideNav from './Components/SideNav';
import './App.css';
import { useEffect, useState } from 'react';

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
      <section className='flex md:flex md:flex-row mt-16 md:mt-20'>
        <SideNav animate={animate} />
        <Hero animate={animate} />
      </section>
    </div>
  );
}

export default App;
