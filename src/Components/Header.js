import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { DarkThemeToggle } from 'flowbite-react/lib/esm/components';

const Header = (props) => {
    const { animate, isPreview, setRightSectionDrawerVisibility, showRightSectionDrawer } = { ...props };

    const displayRightSectionDrawer = (visibility) => {
        setRightSectionDrawerVisibility(visibility);
    }

    return (
        <div className={`${(isPreview || showRightSectionDrawer) ? '' : 'fixed'} top-0 w-full z-40 shadow-md`}>
            <Navbar
                fluid={false}
                rounded={false}
                border={false}
            >
                <Navbar.Brand href="./">
                    {/* Brand - Image and Text */}
                    <img
                        src={require('../Assets/Images/logo.webp')}
                        className={`mr-3 h-6 sm:h-9 ${animate ? "hidden" : ""}`}
                        alt="Coder Community"
                    />
                    <span className={`self-center whitespace-nowrap text-xl font-semibold dark:text-white ${animate ? "hidden" : ""}`}>
                        Coder Community
                    </span>

                    {/* Brand - Image and Text Pulse */}
                    <div className={`flex justify-center items-center bg-gray-300 rounded dark:bg-gray-700 p-2 mr-3 ${animate ? "animate-pulse" : "hidden"}`}>
                        <svg className="h-6 sm:h-9 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                    </div>
                    <div className={`h-3 bg-gray-300 rounded-full dark:bg-gray-600 w-32 ${animate ? "animate-pulse" : "hidden"}`}></div>
                </Navbar.Brand>

                {/* Header - Right */}
                <div className={`hidden lg:flex lg:items-center lg:order-2 lg:space-x-5 lg:${animate ? "hidden" : ""}`}>
                    {/* Notifications */}
                    <div className="relative cursor-pointer">
                        <svg className="w-6 h-6 text-gray-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                        <div className="inline-flex absolute -top-3 -right-3 justify-center items-center w-6 h-6 text-[0.55rem] font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">99+</div>
                    </div>

                    {/* Settings */}
                    <svg className="w-6 h-6 text-gray-700 dark:text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>

                    <DarkThemeToggle />

                    <Dropdown
                        arrowIcon={false}
                        floatingArrow={false}
                        inline={true}
                        label={<Avatar alt="User settings" img={require('../Assets/Images/owner.png')} rounded={true} status="online"
                            statusPosition="bottom-right" bordered={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Vikas Rohra
                            </span>
                            <span className="block truncate text-sm font-medium">
                                @vikasrohra
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            <svg className="w-6 h-6 text-dark-600 dark:text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <svg className="w-6 h-6 text-dark-600 dark:text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            My Profile
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            <svg className="w-6 h-6 text-dark-600 dark:text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                </div>

                {/* Header Right Pulse */}
                <div className={`hidden lg:flex lg:items-center lg:order-2 lg:space-x-5 lg:${animate ? "animate-pulse" : "hidden"}`}>
                    <div className={`h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-8 md:w-8`}></div>
                    <div className={`h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-8 md:w-8`}></div>
                    <div className={`h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-8 md:w-8`}></div>
                    <svg className={`w-14 h-14 text-gray-200 dark:text-gray-700`} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                </div>

                {/* Header Right - md and below devices */}
                <div className="flex items-center space-x-4 lg:hidden">
                    <div className={`border rounded-full border-2 border-gray-400 ${animate ? "hidden" : ""}`}>
                        <Dropdown
                            arrowIcon={false}
                            floatingArrow={false}
                            inline={true}
                            label={<Avatar alt="User settings" img={require('../Assets/Images/owner.png')} rounded={true} />}
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">
                                    Vikas Rohra
                                </span>
                                <span className="block truncate text-sm font-medium">
                                    @vikasrohra
                                </span>
                            </Dropdown.Header>
                            <Dropdown.Item>
                                <svg className="w-6 h-6 text-dark-600 dark:text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                Settings
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <svg className="w-6 h-6 text-dark-600 dark:text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                My Profile
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>
                                <svg className="w-6 h-6 text-dark-600 dark:text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                Sign out
                            </Dropdown.Item>
                        </Dropdown>
                    </div>

                    {/* Menu Icon */}
                    <div onClick={() => displayRightSectionDrawer(true)} className="cursor-pointer">
                        <svg className={`w-6 h-6 text-gray-900 dark:text-gray-300 ${animate ? "hidden" : ""}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </div>
                </div>

                {/* Header Right Pulse - md and below devices */}
                <div className={`flex items-center space-x-4 ${animate ? "animate-pulse" : "hidden"} lg:hidden`}>
                    <svg className={`w-14 h-14 text-gray-200 dark:text-gray-700`} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>

                    {/* Menu Icon */}
                    <svg className="w-6 h-6 text-gray-900 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </div>

                {/* <Navbar.Collapse>
                    <Navbar.Link
                        href="/navbars"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse> */}
            </Navbar>
        </div>
    )
}

export default Header;

Header.defaultProps = {
    isPreview: false
}