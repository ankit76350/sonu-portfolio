// import React from 'react'
// import './Services.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
// import Services_Data from '../../assets/services_data'
// import arrow_icon from '../../assets/arrow_icon.svg'

// const Services = () => {
//     return (
//         <>
//             <div id='services' className="services">
//                 <div className="services-title">
//                     <h1>My Services</h1>
//                     <img src={theme_pattern} alt="" srcset="" />
//                 </div>
//                 <div className='services-container'>
//                     {Services_Data.map((services, index) => {
//                         return <div key={index} className='services-format'>
//                             <h3>{services.s_no}</h3>
//                             <h2>{services.s_name}</h2>
//                             <p>{services.s_desc}</p>
//                             <div className='services-readmore'>
//                                 <p>Read More</p>
//                                 <img src={arrow_icon} alt="" />
//                             </div>
//                         </div>
//                     })
//                     }
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Services


import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
    return (
        <>
            <div class="flex flex-wrap justify-center mt-10">


<div class="p-4 max-w-sm">
    <div class="flex rounded-lg h-full dark:bg-black-800 bg-teal-400 p-8 flex-col">
        <div class="flex items-center mb-3">
            <div
                class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
            </div>
            <h2 class="text-white dark:text-white text-lg font-medium">Feature 1</h2>
        </div>
        <div class="flex flex-col justify-between flex-grow">
            <p class="leading-relaxed text-base text-white dark:text-gray-300">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
            </p>
            <a href="#" class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>
</div>


<div class="p-4 max-w-sm">
    <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
        <div class="flex items-center mb-3">
            <div
                class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
            </div>
            <h2 class="text-white dark:text-white text-lg font-medium">Feature 2</h2>
        </div>
        <div class="flex flex-col justify-between flex-grow">
            <p class="leading-relaxed text-base text-white dark:text-gray-300">
                Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.
            </p>
            <a href="#" class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>
</div>


<div class="p-4 max-w-sm">
    <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
        <div class="flex items-center mb-3">
            <div
                class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
            </div>
            <h2 class="text-white dark:text-white text-lg font-medium">Feature 3</h2>
        </div>
        <div class="flex flex-col justify-between flex-grow">
            <p class="leading-relaxed text-base text-white dark:text-gray-300">
                Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.
            </p>
            <a href="#" class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>
</div>

</div>

        </>
    )
}

export default Services
