import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import NewsData from '../data/NewsData';
import { useInView } from 'framer-motion';

function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref}>
            <div
                style={{
                    transform: isInView ? "translateY(0)" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                }}
            >
                {children}
            </div>
        </section>
    );
}

const News = () => {
    const location = useLocation();
    return (
        <div className={location.pathname === '/' ? 'news-container w-full h-auto flex justify-center items-end py-6 pt-10' : 'news-container w-full h-screen flex justify-center items-end py-6 pt-10'}>
            <div className={location.pathname === '/' ? 'h-[95%] w-[95%] glass-morph p-6 scroll-bar' : 'h-[95%] w-[95%] glass-morph p-6 overflow-y-scroll scroll-bar'}>
                {NewsData.map((data, index) => {
                    return (
                        <Section>
                            <div className='news border-b-[1px] border-white py-2 mb-4 text-white'>
                                <div className='text-sm italic text-red-500'>{data.Date}</div>
                                <h2 className='text-sm font-semibold'>{data.Heading}</h2>
                                <div className='flex gap-2'>
                                    <p className=' whitespace-nowrap text-sm w-full overflow-hidden'>{data.Details}</p>
                                    <span className='text-sm text-red-500 whitespace-nowrap italic'>Read More</span>
                                </div>
                            </div>
                        </Section>
                    )
                })}
            </div>
        </div>
    )
}

export default News