import { Navbar } from "flowbite-react";
import { DarkThemeToggle } from 'flowbite-react/lib/esm/components';

const BottomNav = (props) => {
    const { animate } = { ...props };

    return (
        <div className="fixed bottom-0 w-full lg:hidden shadow-md">
            <Navbar
                fluid={false}
                rounded={false}
                border={false}
            >
                {/* Bottom Nav */}
                <div className={`w-full flex justify-evenly items-center ${animate ? "hidden" : ""} lg:hidden`}>
                    {/* Home */}
                    <svg className="w-6 h-6 text-gray-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>

                    {/* Explore Groups */}
                    <svg className="w-6 h-6 text-gray-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>

                    {/* Notifications */}
                    <svg className="w-6 h-6 text-gray-700 dark:text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>

                    {/* Settings */}
                    <svg className="w-6 h-6 text-gray-700 dark:text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>

                    <DarkThemeToggle />
                </div>

                {/* Bottom Nav Pulse */}
                <div className={`w-full flex justify-evenly items-center ${animate ? "animate-pulse" : "hidden"} lg:hidden`}>
                    <div className={`h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-8 md:w-8`}></div>
                    <div className={`h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-8 md:w-8`}></div>
                    <div className={`h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-8 md:w-8`}></div>
                    <div className={`h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-8 md:w-8`}></div>
                    <div className={`h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-8 md:w-8`}></div>
                </div>
            </Navbar>
        </div>
    )
}

export default BottomNav;