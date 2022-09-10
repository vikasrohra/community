import { useEffect, useState } from 'react';

const Testimonials = () => {
    const [testimonialData, setTestimonialData] = useState({});

    useEffect(() => {
        let appData = JSON.parse(localStorage.getItem("appData"));
        setTestimonialData(appData);
    }, []);

    return (
        <section>
            {testimonialData && testimonialData.testimonials &&
                <>
                    {testimonialData.testimonials.map((item, index) => {
                        if (index === testimonialData.testimonials.length) {
                            return (
                                <figure className="max-w-screen-md" key={index}>
                                    <blockquote>
                                        <p className="text-md font-normal text-gray-900 dark:text-gray-400 italic">{`"${item.description}"`}</p>
                                    </blockquote>
                                    <figcaption className="flex items-center mt-3 space-x-3 justify-center md:justify-end">
                                        <img className="w-6 h-6 rounded-full" src={`${item.logo}`} alt="profile" />
                                        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                                            <cite className="pr-3 font-medium text-gray-900 dark:text-white">{item.name}</cite>
                                            <cite className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">SDE</cite>
                                        </div>
                                    </figcaption>
                                </figure>
                            )
                        }
                        else {
                            return (
                                <div key={index}>
                                    <figure className="max-w-screen-md">
                                        <blockquote>
                                            <p className="text-md font-normal text-gray-900 dark:text-gray-400 italic">{`"${item.description}"`}</p>
                                        </blockquote>
                                        <figcaption className="flex items-center mt-3 space-x-3 justify-center md:justify-end">
                                            <img className="w-6 h-6 rounded-full" src={`${item.logo}`} alt="profile" />
                                            <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                                                <cite className="pr-3 font-medium text-gray-900 dark:text-white">{item.name}</cite>
                                                <cite className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{item.designation}</cite>
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                                </div>
                            )
                        }
                    })}
                </>
            }

            {!testimonialData &&
                <>
                    <figure className="max-w-screen-md">
                        <blockquote>
                            <p className="text-md font-normal text-gray-900 dark:text-gray-400 italic">"A robust congratulations to the team at Flatworld Solutions for a job well done."</p>
                        </blockquote>
                        <figcaption className="flex items-center mt-3 space-x-3 justify-center md:justify-end">
                            <img className="w-6 h-6 rounded-full" src={require("../Assets/Images/testimonial1.jpg")} alt="profile" />
                            <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                                <cite className="pr-3 font-medium text-gray-900 dark:text-white">John Wacko</cite>
                                <cite className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Web Developer</cite>
                            </div>
                        </figcaption>
                    </figure>
                    <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                    <figure className="max-w-screen-md">
                        <blockquote>
                            <p className="text-md font-normal text-gray-900 dark:text-gray-400 italic">"We thank Community Community for the wonderful job in helping us develop our program. Everyone was professional, excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in the future."</p>
                        </blockquote>
                        <figcaption className="flex items-center mt-3 space-x-3 justify-center md:justify-end">
                            <img className="w-6 h-6 rounded-full" src={require("../Assets/Images/testimonial2.jpg")} alt="profile" />
                            <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                                <cite className="pr-3 font-medium text-gray-900 dark:text-white">Kiran Mane</cite>
                                <cite className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">SSE</cite>
                            </div>
                        </figcaption>
                    </figure>
                    <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                    <figure className="max-w-screen-md">
                        <blockquote>
                            <p className="text-md font-normal text-gray-900 dark:text-gray-400 italic">"We are very happy with Community Community; very serious and consistent in their work. Joseph and his team of programmers have always been there for us all the time. This is a company I can recommend to anyone to perform any work."</p>
                        </blockquote>
                        <figcaption className="flex items-center mt-3 space-x-3 justify-center md:justify-end">
                            <img className="w-6 h-6 rounded-full" src={require("../Assets/Images/testimonial3.jpg")} alt="profile" />
                            <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                                <cite className="pr-3 font-medium text-gray-900 dark:text-white">Ashutosh Wahkhede</cite>
                                <cite className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">SDE</cite>
                            </div>
                        </figcaption>
                    </figure>
                </>
            }
        </section>
    )
}

export default Testimonials;