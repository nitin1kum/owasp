import React, { useEffect, useRef, useState } from 'react'
import { GoChevronDown } from 'react-icons/go'

const Faqs = () => {
    const [element, setElement] = useState({
        elem: 0,
        show : false
    });

    let queries = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div className=' faqs-page lg:h-[calc(100vh-160.8px)] min-h-screen pt-20 bg-gradient-to-tr pb-5 from-blue-600 to-black'>
            <div className=' h-[95%] w-[95%] m-auto lg:grid lg:grid-cols-2 flex flex-col lg:gap-10 gap-6 p-6 glass-morph'>
                <div className='relative flex h-72 lg:h-full w-full items-center justify-start p-6 lg:p-10'>
                    <img className='absolute -z-10 inset-0 w-full h-full lg:object-cover object-cover  rounded-lg' src="./images/97bede65cebaf9444d1f1a4212b75204.jpg" alt="" />
                    <div>
                        <p className='lg:text-[50px] text-[30px] capitalize query-text  text-white'>have a query ?</p>
                        <p className='text-white w-2/3'>Join with OWASP and experience the breeze of hackathon with us.</p>
                    </div>
                </div>
                <div className='queries h-full overflow-y-scroll scroll-bar'>
                    {queries.map((data, index) => {
                        return (
                            <div className='query w-full border-b-[1px] my-4 py-2 cursor-pointer border-white text-white' onClick={(e) =>   setElement((prev)=>{
                                return{
                                    ...prev,
                                    elem:index+1,
                                    show:!prev.show
                                }
                            })}>
                                <div className='w-full flex font-semibold text-sm items-center justify-between py-4'><p>Query?</p><i className={(element.elem === index + 1 && element.show) ? 'rotate-180 transition-all duration-500':'rotate-0 transition-all duration-500'}><GoChevronDown /></i></div>
                                <p className={(element.elem === index + 1 && element.show) ? 'text-sm max-h-48 overflow-hidden transition-all duration-500 italic':'max-h-0 overflow-hidden transition-all duration-500 text-sm italic'} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum molestiae minima ullam iste quas, vel numquam at officiis rerum.</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Faqs
