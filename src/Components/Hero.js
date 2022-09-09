import { useEffect, useState } from 'react';
import SectionTabs from './SectionTabs';

const Hero = (props) => {
    const { animate } = { ...props };

    const [heroData, setHeroData] = useState({});

    useEffect(() => {
        let appData = JSON.parse(localStorage.getItem("appData"));
        setHeroData(appData);
    }, []);

    return (
        <>
            {animate ?
                <div role="status" className="shadow animate-pulse dark:border-gray-700 w-full text-left m-4 lg:m-0 lg:ml-[16.9rem] lg:mr-4 lg:mt-4">
                    <div className="h-36 md:h-72 lg:h-80 flex justify-center items-center mb-4 bg-gray-300 rounded dark:bg-gray-700">
                        <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-8 ml-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[90%] md:w-[96%] mb-2.5 ml-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[90%] md:w-[96%] mb-2.5 ml-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[90%] md:w-[96%] mb-2.5 ml-4"></div>
                    {/* Tabs */}
                    <SectionTabs animate={animate} />
                </div> :
                <>
                    <div className="w-full bg-white border border-gray-200 dark:border-gray-700 shadow-md text-left mx-4 lg:m-0 lg:ml-[16rem] xl:ml-[16.9rem] lg:mr-4 dark:bg-gray-800">
                        <div className='overflow-hidden'>
                            {heroData && heroData.community && <img className="w-full hover:scale-125 ease-in-out duration-200" src={`data:image/png;base64,${heroData.community.image}`} alt="Hero" />}
                            {!heroData && <img className="w-full hover:scale-125 ease-in-out duration-200" src={require('../Assets/Images/hero.jpg')} alt="Hero" />}
                        </div>
                        <div className="p-5 pb-0">
                            {heroData && heroData.community &&
                                <>
                                    <div className='flex flex-col md:flex-row md:justify-between '>
                                        <div>
                                            <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">{heroData.community.name}</h5>
                                            <p className='text-gray-500 text-sm flex items-center space-x-6 dark:text-gray-400'>
                                                <div className='flex items-center space-x-1'>
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

                                                    <span>{heroData.community.creationDate}</span>
                                                </div>
                                                <div className='flex items-center space-x-1'>
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>

                                                    <span>{heroData.community.membersCount}</span>
                                                </div>
                                            </p>
                                        </div>
                                        <div className="flex -space-x-5 mt-4 cursor-pointer md:mt-0">
                                            <img className="w-12 h-12 rounded-full ring-2 ring-gray-300 border-2 border-white dark:border-gray-800" src={require('../Assets/Images/member2.webp')} alt="1" />

                                            <img className="w-12 h-12 rounded-full ring-2 ring-gray-300 border-2 border-white dark:border-gray-800" src={require('../Assets/Images/member1.jpg')} alt="2" />

                                            <img className="w-12 h-12 rounded-full ring-2 ring-gray-300 border-2 border-white dark:border-gray-800" src={require('../Assets/Images/member9.jpg')} alt="3" />

                                            <a className="flex justify-center items-center ring-2 ring-gray-300 w-12 h-12 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800" href="#">99+</a>
                                        </div>
                                    </div>
                                    <div className='flex flex-col md:flex md:flex-row lg:flex lg:flex-col xl:flex xl:flex-row'>
                                        <p className="font-normal text-md text-gray-700 dark:text-gray-400 mt-4">{heroData.community.highlightText1}</p>
                                        <p className="font-normal text-gray-700 dark:text-gray-400 mt-3 md:mt-4 md:ml-2 lg:ml-0 xl:ml-2">
                                            <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold mr-2 px-2 py-1 rounded dark:bg-yellow-200 dark:text-yellow-900">
                                                {heroData.community.highlightText2}
                                            </span>
                                        </p>
                                    </div>
                                </>
                            }
                            {!heroData &&
                                <>
                                    <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">Communion</h5>
                                    <p className='text-gray-500 text-sm flex items-center space-x-6 dark:text-gray-400'>
                                        <div className='flex items-center space-x-1'>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

                                            <span>September 2022</span>
                                        </div>
                                        <div className='flex items-center space-x-1'>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>

                                            <span>1002</span>
                                        </div>
                                    </p>

                                    <div className='flex flex-col md:flex md:flex-row lg:flex lg:flex-col xl:flex xl:flex-row'>
                                        <p className="font-normal text-md text-gray-700 dark:text-gray-400 mt-4">Welcome to Communion Community.</p>
                                        <p className="font-normal text-gray-700 dark:text-gray-400 mt-3 md:mt-4 md:ml-2 lg:ml-0 xl:ml-2">
                                            <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold mr-2 px-2 py-1 rounded dark:bg-yellow-200 dark:text-yellow-900">
                                                A place to help others and to get help from others!
                                            </span>
                                        </p>
                                    </div>
                                </>
                            }
                        </div>

                        {/* Tabs */}
                        <SectionTabs animate={animate} />
                    </div>
                </>
            }
        </>
    )
}

export default Hero;