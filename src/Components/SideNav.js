import { Sidebar, Accordion } from "flowbite-react/lib/esm/components";
import { HiOutlineArrowCircleDown } from "flowbite";

const SideNav = (props) => {
    const {animate} = {...props};

    return (
        <div className={`hidden md:w-fit md:block border-0 rounded-md fixed ${animate ? "md:mt-4" : "md:mt-0"} max-h-[100vh] overflow-y-auto`}>
            <Sidebar aria-label="Sidebar with content separator example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="#"
                        >
                            <span className="flex justify-start items-center">
                                <svg class="w-6 h-6 text-gray-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                <span className="ml-2 font-bold">Home</span>
                            </span>
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                        >
                            <span className="flex justify-start items-center">
                                <svg class="w-6 h-6 text-gray-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                <span className="ml-2 font-bold">Explore Groups</span>
                            </span>
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="#"
                        >
                            <span className="flex justify-start items-center">
                                <span className="font-bold uppercase">Groups</span>
                            </span>
                        </Sidebar.Item>
                        {/* <Sidebar.Item
                            href="#"
                        >
                            <span className="flex justify-start items-center">
                                <svg class="w-6 h-6 text-gray-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                <span className="ml-2 font-semibold">JavaScript Community</span>
                            </span>
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                        >
                            <span className="flex justify-start items-center">
                                <svg class="w-6 h-6 text-gray-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                <span className="ml-2 font-semibold">ReactJS Community</span>
                            </span>
                        </Sidebar.Item> */}
                    </Sidebar.ItemGroup>
                    <Accordion arrowIcon={HiOutlineArrowCircleDown} alwaysOpen={true} flush={true}>
                        <Accordion.Panel>
                            <Accordion.Title>
                                JavaScript
                            </Accordion.Title>
                            <Accordion.Content>
                                <ul class="text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-900 dark:text-white text-left space-y-2">
                                    <li class="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># General</span>
                                        <span class="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">43</span>
                                    </li>
                                    <li class="py-2 w-full rounded-t-lg border-b border-b-0 border-gray-200 dark:border-gray-600 flex justify-between cursor-pointer">
                                        <span># ReactJS</span>
                                        <span class="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">7</span>
                                    </li>
                                    <li class="py-2 w-full rounded-t-lg border-b border-b-0 border-gray-200 dark:border-gray-600 flex justify-between cursor-pointer">
                                        <span># Angular</span>
                                        <span class="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">2</span>
                                    </li>
                                    <li class="py-2 w-full rounded-t-lg border-b border-b-0 border-gray-200 dark:border-gray-600 flex justify-between cursor-pointer">
                                        <span># VueJS</span>
                                        <span class="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">2</span>
                                    </li>
                                    <li class="py-2 w-full rounded-t-lg border-b border-b-0 border-gray-200 dark:border-gray-600 flex justify-between cursor-pointer">
                                        <span># NodeJS</span>
                                        <span class="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">10</span>
                                    </li>
                                </ul>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Front-End
                            </Accordion.Title>
                            <Accordion.Content>
                                <ul class="text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-900 dark:text-white text-left space-y-2">
                                    <li class="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># General</span>
                                        <span class="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">43</span>
                                    </li>
                                    <li class="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># HTML & CSS</span>
                                        <span class="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">7</span>
                                    </li>
                                    <li class="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># Bootstrap</span>
                                        <span class="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">2</span>
                                    </li>
                                    <li class="py-2 w-full rounded-t-lg flex justify-between cursor-pointer">
                                        <span># Tailwind</span>
                                        <span class="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">2</span>
                                    </li>
                                </ul>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </Sidebar.Items>
            </Sidebar>
        </div>
    )
}

export default SideNav;