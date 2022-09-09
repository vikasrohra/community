import { useEffect, useState } from 'react';

const Members = () => {
    const [membersData, setMembersData] = useState({});

    useEffect(() => {
        let appData = JSON.parse(localStorage.getItem("appData"));
        setMembersData(appData);
    }, []);

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-0 mx-auto">
                <div className="flex flex-wrap -m-2">
                    {membersData && membersData.members &&
                        membersData.members.map((item, index) => {
                            return (
                                <div className="p-2 lg:w-1/2 xl:w-1/3 md:w-1/2 w-full" key={index}>
                                    <div className="h-full flex items-center border p-4 rounded border-gray-200 dark:border-gray-700">
                                        {item.imgLink &&
                                            <div className="inline-flex overflow-hidden relative justify-center items-center w-12 h-12 bg-gray-100 rounded-full dark:bg-gray-600 mr-4 ring-2 ring-gray-300">
                                                <img className='w-24 h-12' src={`data:image/png;base64,${item.imgLink}`} alt="member" />
                                            </div>
                                        }

                                        {!item.imgLink &&
                                            <div className="inline-flex overflow-hidden relative justify-center items-center w-12 h-12 bg-gray-100 rounded-full dark:bg-gray-600 mr-4 ring-2 ring-gray-300">
                                                <span className="font-medium text-gray-600 dark:text-gray-300">{item.initials}</span>
                                            </div>
                                        }
                                        <div className="flex-grow">
                                            <h2 className="border-gray-700 title-font font-medium text-gray-700 dark:text-gray-400">{item.name}</h2>
                                            <p className="text-gray-500 text-[0.75rem]">{item.designation}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {!membersData &&
                        <>
                            <div className="p-2 lg:w-1/2 xl:w-1/3 md:w-1/2 w-full">
                                <div className="h-full flex items-center border p-4 rounded border-gray-200 dark:border-gray-700">
                                    <div className="inline-flex overflow-hidden relative justify-center items-center w-12 h-12 bg-gray-100 rounded-full dark:bg-gray-600 mr-4 ring-2 ring-gray-300">
                                        <span className="font-medium text-gray-600 dark:text-gray-300">KS</span>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="border-gray-700 title-font font-medium text-gray-700 dark:text-gray-400">Komal Saxena</h2>
                                        <p className="text-gray-500 text-[0.75rem]">UI Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 lg:w-1/2 xl:w-1/3 md:w-1/2 w-full">
                                <div className="h-full flex items-center border p-4 rounded border-gray-200 dark:border-gray-700">
                                    <div className="inline-flex overflow-hidden relative justify-center items-center w-12 h-12 bg-gray-100 rounded-full dark:bg-gray-600 mr-4 ring-2 ring-gray-300">
                                        <span className="font-medium text-gray-600 dark:text-gray-300">AT</span>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="border-gray-700 title-font font-medium text-gray-700 dark:text-gray-400">Amit Trivedi</h2>
                                        <p className="text-gray-500 text-[0.75rem]">Front-End Web Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 lg:w-1/2 xl:w-1/3 md:w-1/2 w-full">
                                <div className="h-full flex items-center border p-4 rounded border-gray-200 dark:border-gray-700">
                                    <div className="inline-flex overflow-hidden relative justify-center items-center w-12 h-12 bg-gray-100 rounded-full dark:bg-gray-600 mr-4 ring-2 ring-gray-300">
                                        <span className="font-medium text-gray-600 dark:text-gray-300">JB</span>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="border-gray-700 title-font font-medium text-gray-700 dark:text-gray-400">John Ben</h2>
                                        <p className="text-gray-500 text-[0.75rem]">Senior Software Engineer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 lg:w-1/2 xl:w-1/3 md:w-1/2 w-full">
                                <div className="h-full flex items-center border-gray-200 dark:border-gray-700 border p-4 rounded">
                                    <div className="inline-flex overflow-hidden relative justify-center items-center w-12 h-12 bg-gray-100 rounded-full dark:bg-gray-600 mr-4 ring-2 ring-gray-300">
                                        <span className="font-medium text-gray-600 dark:text-gray-300">AA</span>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="border-gray-700 title-font font-medium text-gray-700 dark:text-gray-400">Akshata Arora</h2>
                                        <p className="text-gray-500 text-[0.75rem]">JavaScript Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 lg:w-1/2 xl:w-1/3 md:w-1/2 w-full">
                                <div className="h-full flex items-center border-gray-200 dark:border-gray-700 border p-4 rounded">
                                    <div className="inline-flex overflow-hidden relative justify-center items-center w-12 h-12 bg-gray-100 rounded-full dark:bg-gray-600 mr-4 ring-2 ring-gray-300">
                                        <span className="font-medium text-gray-600 dark:text-gray-300">RA</span>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="border-gray-700 title-font font-medium text-gray-700 dark:text-gray-400">Rahul Ahuja</h2>
                                        <p className="text-gray-500 text-[0.75rem]">Learner</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 lg:w-1/2 xl:w-1/3 md:w-1/2 w-full">
                                <div className="h-full flex items-center border-gray-200 dark:border-gray-700 border p-4 rounded">
                                    <div className="inline-flex overflow-hidden relative justify-center items-center w-12 h-12 bg-gray-100 rounded-full dark:bg-gray-600 mr-4 ring-2 ring-gray-300">
                                        <span className="font-medium text-gray-600 dark:text-gray-300">BD</span>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="border-gray-700 title-font font-medium text-gray-700 dark:text-gray-400">Barkha Dandekar</h2>
                                        <p className="text-gray-500 text-[0.75rem]">Senior Programmer Analyst</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 lg:w-1/2 xl:w-1/3 md:w-1/2 w-full">
                                <div className="h-full flex items-center border-gray-200 dark:border-gray-700 border p-4 rounded">
                                    <div className="inline-flex overflow-hidden relative justify-center items-center w-12 h-12 bg-gray-100 rounded-full dark:bg-gray-600 mr-4 ring-2 ring-gray-300">
                                        <span className="font-medium text-gray-600 dark:text-gray-300">LW</span>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="border-gray-700 title-font font-medium text-gray-700 dark:text-gray-400">Lokesh Wadhwa</h2>
                                        <p className="text-gray-500 text-[0.75rem]">Data Scientist</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 lg:w-1/2 xl:w-1/3 md:w-1/2 w-full">
                                <div className="h-full flex items-center border-gray-200 dark:border-gray-700 border p-4 rounded">
                                    <div className="inline-flex overflow-hidden relative justify-center items-center w-12 h-12 bg-gray-100 rounded-full dark:bg-gray-600 mr-4 ring-2 ring-gray-300">
                                        <span className="font-medium text-gray-600 dark:text-gray-300">HC</span>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="border-gray-700 title-font font-medium text-gray-700 dark:text-gray-400">Harsh Choudhary</h2>
                                        <p className="text-gray-500 text-[0.75rem]">Data Analyst</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 lg:w-1/2 xl:w-1/3 md:w-1/2 w-full">
                                <div className="h-full flex items-center border-gray-200 dark:border-gray-700 border p-4 rounded">
                                    <div className="inline-flex overflow-hidden relative justify-center items-center w-12 h-12 bg-gray-100 rounded-full dark:bg-gray-600 mr-4 ring-2 ring-gray-300">
                                        <span className="font-medium text-gray-600 dark:text-gray-300">MB</span>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="border-gray-700 title-font font-medium text-gray-700 dark:text-gray-400">Manoj Bajpayee</h2>
                                        <p className="text-gray-500 text-[0.75rem]">Senior Software Tester</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
            <div className="mt-7 flex flex-col items-center space-y-4 cursor-pointer text-gray-700 dark:text-gray-400">
                <p className="text-lg font-medium">
                    Load more members
                </p>
                <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" /></svg>
            </div>
        </section>
    )
}

export default Members;