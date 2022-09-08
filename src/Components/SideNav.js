import { Sidebar, Accordion } from "flowbite-react/lib/esm/components";
import { HiOutlineArrowCircleDown } from "flowbite";

const SideNav = (props) => {
    const { animate, isPreview, isHomeSelected, isGroupsSelected, isSettingsSelected, setHomeVisibility, setGroupsVisibility, setSettingsVisibility } = { ...props };

    const setSectionVisibility = (isHome, isGroup, isSettting) => {
        setHomeVisibility(isHome);
        setGroupsVisibility(isGroup);
        setSettingsVisibility(isSettting);
    }

    return (
        <aside className={`hidden xl:w-64 lg:w-60 lg:block overflow-y-auto h-[100vh] fixed ${animate ? "mt-0" : "-mt-[1rem]"} ${!animate && isPreview ? "-mt-6" : "-mt-5"}`} aria-label="Sidebar">
            {animate ?
                <div className="py-4 px-3 bg-white shadow-md dark:bg-gray-800">
                    <ul className="space-y-2">
                        <li className="pb-4">
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse"></div>
                        </li>
                        <li className="pb-4">
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse"></div>
                        </li>
                        <li className="pb-4">
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse"></div>
                        </li>
                    </ul>
                    <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
                        <li className="pb-4">
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse"></div>
                        </li>
                    </ul>
                    <ul className="ml-4 space-y-2">
                        <li className="pb-4">
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse"></div>
                        </li>
                    </ul>
                    <ul className="ml-4 space-y-2">
                        <li className="pb-4 flex justify-between">
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse w-[40%]"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse w-[10%]"></div>
                        </li>
                        <li className="pb-4 flex justify-between">
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse w-[40%]"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse w-[10%]"></div>
                        </li>
                        <li className="pb-4 flex justify-between">
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse w-[40%]"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse w-[10%]"></div>
                        </li>
                        <li className="pb-4 flex justify-between">
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse w-[40%]"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse w-[10%]"></div>
                        </li>
                        <li className="pb-4 flex justify-between">
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse w-[40%]"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse w-[10%]"></div>
                        </li>
                    </ul>
                    <ul className="ml-4 space-y-2">
                        <li className="pb-4">
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse"></div>
                        </li>
                    </ul>
                    <ul className="ml-4 space-y-2">
                        <li className="pb-4 flex justify-between">
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse w-[40%]"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse w-[10%]"></div>
                        </li>
                        <li className="pb-4 flex justify-between">
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse w-[40%]"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse w-[10%]"></div>
                        </li>
                        <li className="pb-4 flex justify-between">
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse w-[40%]"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse w-[10%]"></div>
                        </li>
                        <li className="pb-4 flex justify-between">
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse w-[40%]"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse w-[10%]"></div>
                        </li>
                        <li className="pb-4 flex justify-between">
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse w-[40%]"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 m-2 animate-pulse w-[10%]"></div>
                        </li>
                    </ul>
                </div>
                :
                // <div className="py-4 px-3 bg-white shadow-md dark:bg-gray-800">
                <div className="py-4 px-3 bg-white shadow-md dark:bg-[#111827]">
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className={`flex items-center p-2 text-base font-semibold text-gray-900 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${isHomeSelected ? 'bg-gray-300 dark:bg-gray-500 hover:bg-gray-300 dark:hover:bg-gray-500' : ''}`} onClick={() => setSectionVisibility(true, false, false)}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                <span className="ml-3">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={`flex items-center p-2 text-base font-semibold text-gray-900 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${isGroupsSelected ? 'bg-gray-300 dark:bg-gray-500 hover:bg-gray-300 dark:hover:bg-gray-500' : ''}`} onClick={() => setSectionVisibility(false, true, false)}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="ml-3">Explore Groups</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={`flex items-center p-2 text-base font-semibold text-gray-900 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${isSettingsSelected ? 'bg-gray-300 dark:bg-gray-500 hover:bg-gray-300 dark:hover:bg-gray-500' : ''}`} onClick={() => setSectionVisibility(false, false, true)}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span className="ml-3">Settings</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <span className="uppercase">Groups</span>
                            </a>
                        </li>
                    </ul>
                    <Accordion arrowIcon={HiOutlineArrowCircleDown} alwaysOpen={true} flush={true}>
                        <Accordion.Panel>
                            <Accordion.Title>
                                JavaScript
                            </Accordion.Title>
                            <Accordion.Content>
                                <ul className="text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-900 dark:text-white text-left space-y-2">
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># General</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">43</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg border-b border-b-0 border-gray-200 dark:border-gray-600 flex justify-between cursor-pointer">
                                        <span># ReactJS</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">7</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg border-b border-b-0 border-gray-200 dark:border-gray-600 flex justify-between cursor-pointer">
                                        <span># Angular</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">2</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg border-b border-b-0 border-gray-200 dark:border-gray-600 flex justify-between cursor-pointer">
                                        <span># VueJS</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">2</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg border-b border-b-0 border-gray-200 dark:border-gray-600 flex justify-between cursor-pointer">
                                        <span># NodeJS</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">10</span>
                                    </li>
                                </ul>
                            </Accordion.Content>
                        </Accordion.Panel>                        
                    </Accordion>
                    <Accordion arrowIcon={HiOutlineArrowCircleDown} alwaysOpen={true} flush={true}>                        
                        <Accordion.Panel>
                            <Accordion.Title>
                                Front-End
                            </Accordion.Title>
                            <Accordion.Content>
                                <ul className="text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-900 dark:text-white text-left space-y-2">
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># General</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">43</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># HTML & CSS</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">7</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># Bootstrap</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">2</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># Tailwind</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">2</span>
                                    </li>
                                </ul>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                    <Accordion arrowIcon={HiOutlineArrowCircleDown} alwaysOpen={true} flush={true}>                        
                        <Accordion.Panel>
                            <Accordion.Title>
                                Python
                            </Accordion.Title>
                            <Accordion.Content>
                                <ul className="text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-900 dark:text-white text-left space-y-2">
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># General</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">43</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># HTML & CSS</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">7</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># Bootstrap</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">2</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># Tailwind</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">2</span>
                                    </li>
                                </ul>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                    <Accordion arrowIcon={HiOutlineArrowCircleDown} alwaysOpen={true} flush={true}>                        
                        <Accordion.Panel>
                            <Accordion.Title>
                                Datas Structure & Algorithm
                            </Accordion.Title>
                            <Accordion.Content>
                                <ul className="text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-900 dark:text-white text-left space-y-2">
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># General</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">43</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># HTML & CSS</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">7</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># Bootstrap</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">2</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># Tailwind</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">2</span>
                                    </li>
                                </ul>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                    <Accordion arrowIcon={HiOutlineArrowCircleDown} alwaysOpen={true} flush={true}>                        
                        <Accordion.Panel>
                            <Accordion.Title>
                                DevOps
                            </Accordion.Title>
                            <Accordion.Content>
                                <ul className="text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-900 dark:text-white text-left space-y-2">
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># General</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">43</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># HTML & CSS</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">7</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># Bootstrap</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">2</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># Tailwind</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">2</span>
                                    </li>
                                </ul>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                    <Accordion arrowIcon={HiOutlineArrowCircleDown} alwaysOpen={true} flush={true}>                        
                        <Accordion.Panel>
                            <Accordion.Title>
                                Database
                            </Accordion.Title>
                            <Accordion.Content>
                                <ul className="text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-900 dark:text-white text-left space-y-2">
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># General</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">43</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># HTML & CSS</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">7</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># Bootstrap</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">2</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># Tailwind</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">2</span>
                                    </li>
                                </ul>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                    <Accordion arrowIcon={HiOutlineArrowCircleDown} alwaysOpen={true} flush={true}>                        
                        <Accordion.Panel>
                            <Accordion.Title>
                                Software Testing
                            </Accordion.Title>
                            <Accordion.Content>
                                <ul className="text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-900 dark:text-white text-left space-y-2">
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># General</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">43</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># HTML & CSS</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">7</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># Bootstrap</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">2</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># Tailwind</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">2</span>
                                    </li>
                                </ul>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                    <Accordion arrowIcon={HiOutlineArrowCircleDown} alwaysOpen={true} flush={true}>                        
                        <Accordion.Panel>
                            <Accordion.Title>
                                Cloud
                            </Accordion.Title>
                            <Accordion.Content>
                                <ul className="text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-900 dark:text-white text-left space-y-2">
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># General</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">43</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># HTML & CSS</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">7</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># Bootstrap</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">2</span>
                                    </li>
                                    <li className="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># Tailwind</span>
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">2</span>
                                    </li>
                                </ul>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>
            }
        </aside>
    )
}

export default SideNav;

SideNav.defaultProps = {
    isPreview: false
}