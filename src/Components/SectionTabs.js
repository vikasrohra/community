import { Tabs } from "flowbite-react"
import FAQs from "./FAQs";
import Members from "./Members";
import Posts from "./Posts";
import Testimonials from "./Testimonials";

const SectionTabs = (props) => {
    const { animate } = { ...props };

    return (
        <div className="p-4">
            {animate ?
                <Tabs.Group
                    aria-label="Tabs with icons"
                    style="underline"
                >
                    <Tabs.Item
                        title={<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse w-11"></div>}
                        active={true}
                    >
                        <Posts animate={animate} />
                    </Tabs.Item>
                    <Tabs.Item
                        title={<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse w-11"></div>}
                    >
                        <blockquote className="text-md text-gray-900 dark:text-gray-400 font-normal">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </blockquote>
                    </Tabs.Item>
                    <Tabs.Item
                        title={<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse w-11"></div>}
                    >
                        <Members />
                    </Tabs.Item>
                    <Tabs.Item
                        title={<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse w-11"></div>}
                    >
                        <FAQs />
                    </Tabs.Item>
                    <Tabs.Item
                        title={<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse w-11"></div>}
                    >
                        <Testimonials />
                    </Tabs.Item>
                </Tabs.Group>
                :
                <Tabs.Group
                    aria-label="Tabs with icons"
                    style="underline"
                >
                    <Tabs.Item
                        title="Posts"
                        active={true}
                    >
                        <Posts animate={animate} />
                    </Tabs.Item>
                    <Tabs.Item
                        title="About"
                    >
                        <blockquote className="text-md text-gray-900 dark:text-gray-400 font-normal">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </blockquote>
                    </Tabs.Item>
                    <Tabs.Item
                        title="Members"
                    >
                        <Members />
                    </Tabs.Item>
                    <Tabs.Item
                        title="FAQs"
                    >
                        <FAQs />
                    </Tabs.Item>
                    <Tabs.Item
                        title="Testimonials"
                    >
                        <Testimonials />
                    </Tabs.Item>
                </Tabs.Group>
            }
        </div>
    )
}

export default SectionTabs;