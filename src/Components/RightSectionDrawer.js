import CommunityOwner from "./CommunityOwner";
import TopContributors from "./TopContributors";

const RightSectionDrawer = (props) => {
    const { showRightSectionDrawer, setRightSectionDrawerVisibility } = { ...props };

    const closeRightSectionDrawer = (visibility) => {
        setRightSectionDrawerVisibility(visibility);
    }

    return (
        <>
            {showRightSectionDrawer && <div className="lg:hidden cursor-pointer fixed top-4 left-4 z-[70]">
                <svg className="w-8 h-8 text-gray-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => closeRightSectionDrawer(false)}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>}
            <div className={`lg:hidden md:w-[50vw] w-[90vw] h-screen fixed top-0 left-0 z-[60] top-0 p-4 overflow-y-auto bg-white dark:bg-gray-800 ${showRightSectionDrawer ? '-translate-x-0' : '-translate-x-full'} ease-in-out duration-500 opacity-100 shaow-inner`}>
                <div className="mt-12">
                    <CommunityOwner />
                    <TopContributors />
                </div>
            </div>
        </>
    )
}

export default RightSectionDrawer;