import { useEffect, useState } from 'react';

const TopContributors = (props) => {
    const { animate, isPreview, appDataPreview } = { ...props };

    const [topContributorsData, setTopContributorsData] = useState({});

    useEffect(() => {
        let appData = {};
        if (isPreview) {
            appData = appDataPreview;
        }
        else {
            appData = JSON.parse(localStorage.getItem("appData"));
        }
        setTopContributorsData(appData);
    }, []);

    return (
        <div className="p-4 w-full max-w-md bg-white border border-gray-200 shadow-md bg-white dark:bg-gray-800 dark:border-gray-700 mt-4">
            <div className="flex justify-between items-center mb-4">
                {animate ?
                    <>
                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-48 animate-pulse"></div>
                    </>
                    :
                    <>
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Top Contributors</h5>
                        <a href="#" className="text-sm font-medium text-[#1c64f2] dark:text-[#3f83f8]">
                            View all
                        </a>
                    </>
                }
            </div>
            <div className="flow-root">
                {animate ?
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 animate-pulse">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center">
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-400"></p>

                                <svg className={`w-11 h-11 text-gray-200 dark:text-gray-700 ml-2`} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>

                                <div className="flex-1 text-left ml-3">
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 lg:w-16 xl:w-20"></div>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-16"></div>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center">
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-400"></p>

                                <svg className={`w-11 h-11 text-gray-200 dark:text-gray-700 ml-2`} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>

                                <div className="flex-1 text-left ml-3">
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 lg:w-16 xl:w-20"></div>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-16"></div>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center">
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-400"></p>

                                <svg className={`w-11 h-11 text-gray-200 dark:text-gray-700 ml-2`} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>

                                <div className="flex-1 text-left ml-3">
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 lg:w-16 xl:w-20"></div>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-16"></div>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center">
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-400"></p>

                                <svg className={`w-11 h-11 text-gray-200 dark:text-gray-700 ml-2`} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>

                                <div className="flex-1 text-left ml-3">
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 lg:w-16 xl:w-20"></div>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-16"></div>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center">
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-400"></p>

                                <svg className={`w-11 h-11 text-gray-200 dark:text-gray-700 ml-2`} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>

                                <div className="flex-1 text-left ml-3">
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 lg:w-16 xl:w-20"></div>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-16"></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    :
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        {topContributorsData &&
                            <>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-400">#1</p>
                                        <div className="inline-flex overflow-hidden relative justify-center items-center w-8 h-8 bg-gray-100 rounded-full dark:bg-gray-600 ring-2 ring-gray-300 ml-3">
                                            <img className='w-8 h-8' src={require('../Assets/Images/member1.png')} alt="member" />
                                        </div>
                                        <div className="flex-1 text-left ml-3">
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
                                                Komal Saxena
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-green-200 dark:text-green-900">1.9k points</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-400">#2</p>
                                        <div className="inline-flex overflow-hidden relative justify-center items-center w-8 h-8 bg-gray-100 rounded-full dark:bg-gray-600 ring-2 ring-gray-300 ml-3">
                                            <img className='w-8 h-8' src={require('../Assets/Images/member2.jpg')} alt="member" />
                                        </div>
                                        <div className="flex-1 text-left ml-3">
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
                                                Amit Trivedi
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-green-200 dark:text-green-900">1.87k points</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-400">#3</p>
                                        <div className="inline-flex overflow-hidden relative justify-center items-center w-8 h-8 bg-gray-100 rounded-full dark:bg-gray-600 ring-2 ring-gray-300 ml-3">
                                            <img className='w-8 h-8' src={require('../Assets/Images/member3.jpg')} alt="member" />
                                        </div>
                                        <div className="flex-1 text-left ml-3">
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
                                                John Ben
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-green-200 dark:text-green-900">1.34k points</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-400">#4</p>
                                        <div className="inline-flex overflow-hidden relative justify-center items-center w-8 h-8 bg-gray-100 rounded-full dark:bg-gray-600 ring-2 ring-gray-300 ml-3">
                                            <img className='w-8 h-8' src={require('../Assets/Images/member4.png')} alt="member" />
                                        </div>
                                        <div className="flex-1 text-left ml-3">
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
                                                Akshata Arora
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-green-200 dark:text-green-900">1.23k points</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-400">#5</p>
                                        <div className="inline-flex overflow-hidden relative justify-center items-center w-8 h-8 bg-gray-100 rounded-full dark:bg-gray-600 ring-2 ring-gray-300 ml-3">
                                            <img className='w-8 h-8' src={require('../Assets/Images/member5.png')} alt="member" />
                                        </div>
                                        <div className="flex-1 text-left ml-3">
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
                                                Rahul Ahuja
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-green-200 dark:text-green-900">767 points</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </>
                        }

                        {!topContributorsData &&
                            <>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-400">#1</p>
                                        <div className="inline-flex overflow-hidden relative justify-center items-center w-8 h-8 bg-gray-100 rounded-full dark:bg-gray-600 ring-2 ring-gray-300 ml-3">
                                            <img className='w-8 h-8' src={require('../Assets/Images/member1.png')} alt="member" />
                                        </div>
                                        <div className="flex-1 text-left ml-3">
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
                                                Komal Saxena
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-green-200 dark:text-green-900">1.9k points</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-400">#2</p>
                                        <div className="inline-flex overflow-hidden relative justify-center items-center w-8 h-8 bg-gray-100 rounded-full dark:bg-gray-600 ring-2 ring-gray-300 ml-3">
                                            <img className='w-8 h-8' src={require('../Assets/Images/member2.jpg')} alt="member" />
                                        </div>
                                        <div className="flex-1 text-left ml-3">
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
                                                Amit Trivedi
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-green-200 dark:text-green-900">1.87k points</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-400">#3</p>
                                        <div className="inline-flex overflow-hidden relative justify-center items-center w-8 h-8 bg-gray-100 rounded-full dark:bg-gray-600 ring-2 ring-gray-300 ml-3">
                                            <img className='w-8 h-8' src={require('../Assets/Images/member3.jpg')} alt="member" />
                                        </div>
                                        <div className="flex-1 text-left ml-3">
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
                                                John Ben
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-green-200 dark:text-green-900">1.34k points</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-400">#4</p>
                                        <div className="inline-flex overflow-hidden relative justify-center items-center w-8 h-8 bg-gray-100 rounded-full dark:bg-gray-600 ring-2 ring-gray-300 ml-3">
                                            <img className='w-8 h-8' src={require('../Assets/Images/member4.png')} alt="member" />
                                        </div>
                                        <div className="flex-1 text-left ml-3">
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
                                                Akshata Arora
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-green-200 dark:text-green-900">1.23k points</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-400">#5</p>
                                        <div className="inline-flex overflow-hidden relative justify-center items-center w-8 h-8 bg-gray-100 rounded-full dark:bg-gray-600 ring-2 ring-gray-300 ml-3">
                                            <img className='w-8 h-8' src={require('../Assets/Images/member5.png')} alt="member" />
                                        </div>
                                        <div className="flex-1 text-left ml-3">
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
                                                Rahul Ahuja
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-green-200 dark:text-green-900">767 points</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </>
                        }
                    </ul>
                }
            </div>
        </div>
    )
}

export default TopContributors;

TopContributors.defaultProps = {
    isPreview: false
}