import Header from './Components/Header';
import Hero from './Components/Hero';
import SideNav from './Components/SideNav';
import RightSection from './Components/RightSection';
import './App.css';
import { useEffect, useState } from 'react';
import BottomNav from './Components/BottomNav';
import ExploreGroups from './Components/ExploreGroups';
import RightSectionDrawer from './Components/RightSectionDrawer';
import Settings from './Components/Settings';
import {appData} from './Assets/Data/appData';

function App() {
  const [animate, setAnimate] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const [showRightSectionDrawer, setShowRightSectionDrawer] = useState(false);
  const [showBottomNav, setShowBottomNav] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [showGroups, setShowGroups] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(!animate);
    }, 3000);
    localStorage.setItem("appData", JSON.stringify(appData));
  }, []);

  const setPreviewModalVisibility = (visibility) => {
    setShowPreview(visibility);
  }

  const setRightSectionDrawerVisibility = (visibility) => {
    setShowRightSectionDrawer(visibility);
  }

  const setBottomNavVisibility = (visibility) => {
    setShowBottomNav(visibility);
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
      <div className={`App ${showRightSectionDrawer ? 'opacity-20 dark:opacity-50 lg:opacity-100 dark:opacity-100' : ''} bg-white dark:bg-[#111827] ${(showHome || showGroups) ? "-mt-4 lg:-mt-5 pt-4" : ""}`}>
        <Header animate={animate} setRightSectionDrawerVisibility={setRightSectionDrawerVisibility} showRightSectionDrawer={showRightSectionDrawer} isHomeSelected={showHome} isGroupsSelected={showGroups} isSettingsSelected={showSettings} setHomeVisibility={setHomeVisibility} setGroupsVisibility={setGroupsVisibility} setSettingsVisibility={setSettingsVisibility} />
        <main className={`flex mt-20 pb-10 lg:pb-0 lg:mb-0 md:mt-[5rem] lg:flex lg:flex-row lg:mt-20 ${showRightSectionDrawer ? "mt-4 md:mt-4 lg:mt-20" : "mt-20 md:mt-[5rem] lg:mt-20"}`}>
        {(showHome || showGroups) &&<SideNav animate={animate} isHomeSelected={showHome} isGroupsSelected={showGroups} isSettingsSelected={showSettings} setHomeVisibility={setHomeVisibility} setGroupsVisibility={setGroupsVisibility} setSettingsVisibility={setSettingsVisibility} />}
          {showHome && <Hero animate={animate} />}
          {showGroups && <ExploreGroups />}
          {showSettings && <Settings setPreviewModalVisibility={setPreviewModalVisibility} animate={animate} showPreview={showPreview} />}
          {(showHome || showGroups) && <RightSection animate={animate} />}
        </main>
        <BottomNav animate={animate} isHomeSelected={showHome} isGroupsSelected={showGroups} isSettingsSelected={showSettings} setHomeVisibility={setHomeVisibility} setGroupsVisibility={setGroupsVisibility} setSettingsVisibility={setSettingsVisibility} showRightSectionDrawer={showRightSectionDrawer} showBottomNav={showBottomNav} setBottomNavVisibility={setBottomNavVisibility} />        
      </div>
      <RightSectionDrawer showRightSectionDrawer={showRightSectionDrawer} setRightSectionDrawerVisibility={setRightSectionDrawerVisibility} />
    </>
  );
}

export default App;
