import { Accordion } from "flowbite-react/lib/esm/components";
import { HiOutlineArrowCircleDown } from "flowbite";

import { useEffect, useState } from 'react';

const FAQs = () => {
    const [faqsData, setFAQsData] = useState({});

    useEffect(() => {
        let appData = JSON.parse(localStorage.getItem("appData"));
        setFAQsData(appData);
    }, []);

    return (
        <>
            <div>
                {faqsData && faqsData.faqs &&
                    <Accordion arrowIcon={HiOutlineArrowCircleDown} alwaysOpen={false}>
                        {faqsData.faqs.map((item, index) => {
                            return (
                                <Accordion.Panel key={index}>
                                    <Accordion.Title>
                                        {item.q}
                                    </Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400 flex">
                                            <svg className="w-16 h-16 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            <span className="ml-3">{item.a}</span>
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                            )
                        })}
                    </Accordion>
                }

                {!faqsData &&
                    <Accordion arrowIcon={HiOutlineArrowCircleDown} alwaysOpen={false}>
                        <Accordion.Panel>
                            <Accordion.Title>
                                What is the goal of this community?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400 flex">
                                    <svg className="w-16 h-16 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    <span className="ml-3">The goal of this community is providing a platform for developers to learn, interact, share ideas, support each other and grow.</span>
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                How to ask questions on this community?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400 flex">
                                    <svg className="w-20 h-20 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    <span className="ml-3">You have to post your questions in the respective group, someone from our team or a developer like you who knows the answer will reply to your question.</span>
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Who can join this community?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400 flex">
                                    <svg className="w-20 h-20 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    <span className="ml-3">This community is open for all who are eager to help others in software development or someone who needs help in software development.</span>
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                }
            </div>
        </>
    )
}

export default FAQs;