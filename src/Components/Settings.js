import { Tooltip } from 'flowbite-react';
import { useEffect, useState, useRef } from 'react';
import PreviewModal from './PreviewModal';

const Settings = (props) => {
    const { setPreviewModalVisibility, animate, showPreview } = { ...props };

    const [appData, setAppData] = useState({});
    const [showCommunityDetails, setShowCommunityDetails] = useState(true);
    const [showCommunityOwner, setShowCommunityOwner] = useState(false);
    const [showGroupList, setShowGroupList] = useState(false);
    const [showTestimonials, setShowTestimonials] = useState(false);
    const [showFAQs, setShowFAQs] = useState(false);
    const [appDataPreview, setAppDataPreview] = useState({});

    const hiddenFileInputForLogo = useRef(null);
    const hiddenFileInputForBanner = useRef(null);

    const[previewModalToggler, setPreviewModalToggler] = useState(false);

    useEffect(() => {
        setPreviewModalToggler(!previewModalToggler);
    }, []);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("appData"));
        localStorage.setItem("appDataPreview", JSON.stringify(data));
        setAppData(data);
        setAppDataPreview(data);
    }, []);

    useEffect(() => {
        if (Object.keys(appDataPreview).length > 0) {
            localStorage.setItem("appDataPreview", JSON.stringify(appDataPreview));
        }
    }, [appDataPreview]);

    const showPreviewModal = (visibility) => {
        setPreviewModalVisibility(visibility);
    }

    const handleLogoClick = event => {
        hiddenFileInputForLogo.current.click();
    };

    const handleHiddenFileForLogoChange = event => {
        const fileUploaded = event.target.files[0];

        getBase64(fileUploaded)
            .then(result => {
                let data = { ...appData };
                data.community.logo = result;

                setAppDataPreview({ ...data });
            })
            .catch(err => {
                console.log(err);
            });
    };

    const handleBannerClick = event => {
        hiddenFileInputForBanner.current.click();
    };

    const handleHiddenFileForBannerChange = event => {
        const fileUploaded = event.target.files[0];

        getBase64(fileUploaded)
            .then(result => {
                let data = { ...appData };
                data.community.image = result;

                setAppDataPreview({ ...data });
            })
            .catch(err => {
                console.log(err);
            });
    };

    const handleCNameChange = (event) => {
        let data = { ...appData };
        data.community.name = event.target.value;

        setAppDataPreview({ ...data });
    }

    const handleTL1Change = (event) => {
        let data = { ...appData };
        data.community.highlightText1 = event.target.value;

        setAppDataPreview({ ...data });
    }

    const handleTL2Change = (event) => {
        let data = { ...appData };
        data.community.highlightText2 = event.target.value;

        setAppDataPreview({ ...data });
    }

    const handleDesc1Change = (event) => {
        let data = { ...appData };
        data.community.description1 = event.target.value;

        setAppDataPreview({ ...data });
    }

    const handleDesc2Change = (event) => {
        let data = { ...appData };
        data.community.description2 = event.target.value;

        setAppDataPreview({ ...data });
    }

    const handleQuoteChange = (event) => {
        let data = { ...appData };
        data.community.quote = event.target.value;

        setAppDataPreview({ ...data });
    }

    const getBase64 = file => {
        return new Promise(resolve => {
            let fileInfo;
            let baseURL = "";
            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object
                baseURL = reader.result;
                resolve(baseURL);
            };
        });
    };

    const setVisibility = (communityDetailsFlag, communityOwnerFlag, groupListFlag, testimonialsFlag, faqaFlag) => {
        setShowCommunityDetails(communityDetailsFlag);
        setShowCommunityOwner(communityOwnerFlag);
        setShowGroupList(groupListFlag);
        setShowTestimonials(testimonialsFlag);
        setShowFAQs(faqaFlag);
    }

    const handleUploadClick = () => {
        debugger;
        localStorage.setItem("appData", JSON.stringify(appDataPreview));
        localStorage.removeItem("appDataPreview");
        window.location.href = "./";
    }

    return (
        <div className="bg-gradient-to-r from-cyan-400 to-blue-700 w-full h-52 -mt-5 -z-1">
            <div className="p-4 w-[95vw] lg:w-[80vw] mx-auto mt-28 bg-white border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gr5y-700">
                {appData && appData.community &&
                    <div className='w-full flex justify-end'>
                        <Tooltip content="Preview" animation="duration-500" placement="top">
                            <button disabled={Object.keys(appDataPreview).length === 0} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" onClick={() => showPreviewModal(true)}>
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                </span>
                            </button>
                        </Tooltip>
                        <Tooltip content="Publish" animation="duration-500" placement="top">
                            <button disabled={Object.keys(appDataPreview).length === 0} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400" onClick={handleUploadClick}>
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                                </span>
                            </button>
                        </Tooltip>
                    </div>
                }
                <div className='flex flex-col lg:flex-row'>
                    {/* Sidebar */}
                    <aside className={`w-full lg:w-[25vw] border border-gray-200 dark:border-gray-700 shadow-md text-left`} aria-label="Sidebar">
                        <div className="overflow-y-auto py-4 px-3 bg-white dark:bg-gray-800">
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className={`${showCommunityDetails ? "bg-gray-300 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-900" : ""} flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`} onClick={() => setVisibility(true, false, false, false, false)}>
                                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                                        <span className="ml-3">Community Details</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className={`${showCommunityOwner ? "bg-gray-300 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-900" : ""} flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`} onClick={() => setVisibility(false, true, false, false, false)}>
                                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Community Owner</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className={`${showGroupList ? "bg-gray-300 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-900" : ""} flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`} onClick={() => setVisibility(false, false, true, false, false)}>
                                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Group List</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className={`${showTestimonials ? "bg-gray-300 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-900" : ""} flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`} onClick={() => setVisibility(false, false, false, true, false)}>
                                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Testimonials</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className={`${showFAQs ? "bg-gray-300 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-900" : ""} flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`} onClick={() => setVisibility(false, false, false, false, true)}>
                                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">FAQs</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>
                    {/* Content */}
                    <div className='mt-8 lg:mt-0 lg:ml-8 w-full'>
                        {appData && appData.community &&
                            <>
                                {showCommunityDetails &&
                                    <div>
                                        {/* Community Details */}
                                        <Tooltip content="Click to change Banner" animation="duration-500" placement="bottom">
                                            <img className="w-full mb-6 cursor-pointer border border-gray-200 dark:border-gray-700" src={`${appData.community.image}`} alt="Banner" onClick={handleBannerClick} />
                                            <input
                                                type="file"
                                                ref={hiddenFileInputForBanner}
                                                onChange={handleHiddenFileForBannerChange}
                                                className="hidden"
                                            />
                                        </Tooltip>
                                        <div className='flex flex-col items-center space-y-4 lg:space-y-0 lg:flex-row lg:justify-between'>
                                            <Tooltip content="Click to change Logo" animation="duration-500">
                                                <figure>
                                                    <img className="w-36 rounded-full border border-gray-200 dark:border-gray-700 cursor-pointer" src={`${appData.community.logo}`} alt="description" onClick={handleLogoClick} />
                                                    <input
                                                        type="file"
                                                        ref={hiddenFileInputForLogo}
                                                        onChange={handleHiddenFileForLogoChange}
                                                        className="hidden"
                                                    />
                                                </figure>
                                            </Tooltip>
                                            <div className='w-full ml-6'>
                                                <div className="grid gap-6 mb-6 md:grid-cols-2">
                                                    <div>
                                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left">Comunity Name <span className='text-red-400'>*</span></label>
                                                        <input type="text" id="communityName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Communion" required onChange={(e) => handleCNameChange(e)} value={appData.community.name} />
                                                    </div>
                                                    <div>
                                                        <label className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-gray-300">Tag Line 1 <span className='text-red-400'>*</span></label>
                                                        <input type="text" id="tagLine1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Welcome to Communion Community" required onChange={(e) => handleTL1Change(e)} value={appData.community.highlightText1} />
                                                    </div>
                                                    <div>
                                                        <label className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-gray-300">Tag Line 2 (Optional)</label>
                                                        <input type="text" id="tagLine1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="A place to help others and to get help from others" onChange={(e) => handleTL2Change(e)} value={appData.community.highlightText2} />
                                                    </div>
                                                </div>
                                                <div className="mb-6">
                                                    <label className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-gray-400">Descripton Paragraph 1 <span className='text-red-400'>*</span></label>
                                                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your description..." required onChange={(e) => handleDesc1Change(e)} value={appData.community.description1}></textarea>
                                                </div>
                                                <div className="mb-6">
                                                    <label className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-gray-400">Descripton Paragraph 2 (Optional)</label>
                                                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your description..." onChange={(e) => handleDesc2Change(e)} value={appData.community.description2}></textarea>
                                                </div>
                                                <div className="mb-6">
                                                    <label className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-gray-400">Quote (Optional)</label>
                                                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your quote..." onChange={(e) => handleQuoteChange(e)} value={appData.community.quote}></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </>
                        }

                        {!appData &&
                            <p className='text-2xl text-gray-800 dark:text-gray-500'>Currently data is not present!</p>
                        }
                    </div>
                </div>
                {appData && appData.community &&
                    <div className='w-full flex justify-end'>
                        <Tooltip content="Preview" animation="duration-500" placement="top">
                            <button disabled={Object.keys(appDataPreview).length === 0} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" onClick={() => showPreviewModal(true)}>
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                </span>
                            </button>
                        </Tooltip>
                        <Tooltip content="Publish" animation="duration-500" placement="top">
                            <button disabled={Object.keys(appDataPreview).length === 0} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400" onClick={handleUploadClick}>
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                                </span>
                            </button>
                        </Tooltip>
                    </div>
                }
            </div>
            <PreviewModal animate={animate} showPreview={showPreview} setPreviewModalVisibility={setPreviewModalVisibility} appDataPreview={appDataPreview} />
        </div >
    )
}

export default Settings;