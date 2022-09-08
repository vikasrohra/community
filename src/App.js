import Header from './Components/Header';
import Hero from './Components/Hero';
import SideNav from './Components/SideNav';
import RightSection from './Components/RightSection';
import './App.css';
import { useEffect, useState } from 'react';
import BottomNav from './Components/BottomNav';
import PreviewModal from './Components/PreviewModal';
import ExploreGroups from './Components/ExploreGroups';
import RightSectionDrawer from './Components/RightSectionDrawer';

function App() {
  const [animate, setAnimate] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const [showRightSectionDrawer, setShowRightSectionDrawer] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [showGroups, setShowGroups] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(!animate);
    }, 3000);
  }, []);

  const setPreviewModalVisibility = (visibility) => {
    setShowPreview(visibility);
  }

  const setRightSectionDrawerVisibility = (visibility) => {
    setShowRightSectionDrawer(visibility);
  }

  const setHomeVisibility = (visibility) => {
    setShowHome(visibility);
  }

  const setGroupsVisibility = (visibility) => {
    setShowGroups(visibility);
  }

  const setSettingsVisibility = (visibility) => {
    setShowSettings(visibility);
  }

  return (
    <>
      <div className={`App ${showRightSectionDrawer ? 'opacity-20 lg:opacity-100' : ''}`}>
        <Header animate={animate} setRightSectionDrawerVisibility={setRightSectionDrawerVisibility} showRightSectionDrawer={showRightSectionDrawer} />
        <main className={`flex mt-20 mb-20 lg:mb-0 md:mt-[5rem] lg:flex lg:flex-row lg:mt-20 ${showRightSectionDrawer ? "mt-4 md:mt-4 lg:mt-20" : "mt-20 md:mt-[5rem] lg:mt-20"}`}>
          <SideNav animate={animate} isHomeSelected={showHome} isGroupsSelected={showGroups} isSettingsSelected={showSettings} setHomeVisibility={setHomeVisibility} setGroupsVisibility={setGroupsVisibility} setSettingsVisibility={setSettingsVisibility} />
          {showHome && <Hero animate={animate} />}
          {showGroups && <ExploreGroups />}
          {(showHome || showGroups) && <RightSection animate={animate} />}
        </main>
        <BottomNav animate={animate} isHomeSelected={showHome} isGroupsSelected={showGroups} isSettingsSelected={showSettings} setHomeVisibility={setHomeVisibility} setGroupsVisibility={setGroupsVisibility} setSettingsVisibility={setSettingsVisibility} showRightSectionDrawer={showRightSectionDrawer} />

        {/* <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={() => setPreviewModalVisibility(true)}>Dropdown button <svg aria-hidden="true" className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> */}

        <PreviewModal animate={animate} showPreview={showPreview} setPreviewModalVisibility={setPreviewModalVisibility} />
      </div>
      <RightSectionDrawer showRightSectionDrawer={showRightSectionDrawer} setRightSectionDrawerVisibility={setRightSectionDrawerVisibility} />
    </>
  );
}

export default App;
