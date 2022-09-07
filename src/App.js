import Header from './Components/Header';
import Hero from './Components/Hero';
import SideNav from './Components/SideNav';
import RightSection from './Components/RightSection';
import './App.css';
import { useEffect, useState } from 'react';
import BottomNav from './Components/BottomNav';
import PreviewModal from './Components/PreviewModal';
import ExploreGroups from './Components/ExploreGroups';

function App() {
  const [animate, setAnimate] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [showGroups, setShowGroups] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(!animate);
    }, 5000);
  }, []);

  const setPreviewModalVisibility = (visibility) => {
    setShowPreview(visibility);
  }

  const setHomeVisibility = (visibility) => {
    debugger;
    setShowHome(visibility);
  }

  const setGroupsVisibility = (visibility) => {
    debugger;
    setShowGroups(visibility);
  }

  const setSettingsVisibility = (visibility) => {
    debugger;
    setShowSettings(visibility);
  }

  return (
    <>
      <div className={`App`}>
        <Header animate={animate} />
        <main className='flex mt-20 mb-20 lg:mb-0 md:mt-[5rem] lg:flex lg:flex-row lg:mt-20'>
          <SideNav animate={animate} isHomeSelected={showHome} isGroupsSelected={showGroups} isSettingsSelected={showSettings} setHomeVisibility={setHomeVisibility} setGroupsVisibility={setGroupsVisibility} setSettingsVisibility={setSettingsVisibility} />
          {showHome && <Hero animate={animate} /> }
          {showGroups && <ExploreGroups /> }
          {(showHome || showGroups) && <RightSection animate={animate} />}          
        </main>
        <BottomNav animate={animate} />

        {/* <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={() => setPreviewModalVisibility(true)}>Dropdown button <svg aria-hidden="true" className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> */}

        <PreviewModal animate={animate} showPreview={showPreview} setPreviewModalVisibility={setPreviewModalVisibility} />
      </div>
    </>
  );
}

export default App;
