import { Tabs } from "flowbite-react"
import FAQs from "./FAQs";
import Members from "./Members";
import Posts from "./Posts";
import Testimonials from "./Testimonials";

import { useEffect, useState } from 'react';

const SectionTabs = (props) => {
    const { animate, isPreview, appDataPreview } = { ...props };

    const [communityDesc, setCommunityDesc] = useState({});

    useEffect(() => {
        let appData = {};
        if (isPreview) {
            appData = appDataPreview;
        }
        else {
            appData = JSON.parse(localStorage.getItem("appData"));
        }
        setCommunityDesc(appData);
    }, []);

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
                        {communityDesc && communityDesc.community &&
                            <blockquote className="text-md text-gray-900 dark:text-gray-400 font-normal">
                                <p>
                                    {communityDesc.community.description1}
                                </p>

                                <p className="mt-4">{communityDesc.community.description2}</p>

                                <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
                                    <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">{`"${communityDesc.community.quote}"`}</p>
                                </blockquote>
                            </blockquote>
                        }

                        {!communityDesc &&
                            <blockquote className="text-md text-gray-900 dark:text-gray-400 font-normal">
                                <p>
                                    The goal of Communion community is providing a platform for developers to learn, interact, share ideas, support each other and grow.
                                </p>

                                <p className="mt-4">If you want to grow as a developer, I can't over-emphasize the benefits of joining a Communion community. There are many advantages, from peer-programming to sharing knowledge, mentorship, sharing support, sharing tools, code reviews, answering questions, and much more.</p>

                                <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
                                    <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">"If you want to go quickly, go alone. If you want to go far, go together."</p>
                                </blockquote>
                            </blockquote>
                        }
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