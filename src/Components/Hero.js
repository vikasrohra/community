import { Card } from "flowbite-react/lib/esm/components";

const Hero = (props) => {
    const { animate } = {...props};

    return (
        <>
            {animate ?
                <div role="status" class="shadow animate-pulse dark:border-gray-700 w-full text-left m-4 md:m-0 md:ml-[16.9rem] md:mr-4 md:mt-4">
                    <div class="flex justify-center items-center mb-4 h-[100vh] bg-gray-300 rounded dark:bg-gray-700">
                        <svg class="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                    </div>
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4 ml-4"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2.5 ml-4"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2.5 ml-4"></div>
                </div> :
                <div className="w-full text-left mx-4 md:m-0 md:ml-[16.9rem] md:mr-4">
                    <Card imgSrc={require('../Assets/Images/hero.webp')}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Coder Community
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Welcome to coder community. You might be learning from any place, company or resource, we are here to help you. Post any of your doubt and there are other fellow coders along with our team to solve your doubts.
                        </p>
                    </Card>
                </div>
                // <div class="w-full bg-white rounded-md shadow-lg text-left m-4 md:ml-0 dark:bg-gray-800">
                //     <div>
                //         <img class="rounded-t-md w-full" src={require('../Assets/Images/hero.webp')} alt="" />
                //     </div>
                //     <div>
                //         <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Coder Community</h5>
                //         <p class="font-normal text-gray-700 dark:text-gray-400">Welcome to coder community. You might be learning from any place, company or resource, we are here to help you. Post any of your doubt and there are other fellow coders along with our team to solve your doubts.</p>
                //     </div>
                // </div>
            }
        </>
    )
}

export default Hero;