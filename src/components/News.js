import React from 'react'
import { useLocation } from 'react-router-dom'

const News = () => {
    const location = useLocation();
    return (
        <div className={location.pathname === '/' ? 'news-container w-full h-auto flex justify-center items-end py-6 pt-10' : 'news-container w-full h-screen flex justify-center items-end py-6 pt-10'}>
            <div className={location.pathname === '/' ?'h-[95%] w-[95%] glass-morph p-6 scroll-bar' : 'h-[95%] w-[95%] glass-morph p-6 overflow-y-scroll scroll-bar'}>
                <div className='news border-b-[1px] border-white py-2 mb-4 text-white'>
                    <div className='text-sm italic text-red-500'>{new Date().getDate()}-{new Date().getMonth()}-{new Date().getFullYear()}</div>
                    <h2 className='text-sm font-semibold'>News Heading</h2>
                    <div className='flex gap-2'>
                        <p className=' whitespace-nowrap text-sm w-full overflow-hidden'>News details : - Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo numquam suscipit harum officia. Numquam incidunt commodi reiciendis, culpa explicabo eius maxime odio? Inventore, blanditiis! Fugiat, voluptatibus laudantium doloribus beatae minus illo eligendi!</p>
                        <span className='text-sm text-red-500 whitespace-nowrap italic'>Read More</span>
                    </div>
                </div>
                <div className='news border-b-[1px] border-white py-2 mb-4 text-white'>
                    <div className='text-sm italic text-red-500'>{new Date().getDate()}-{new Date().getMonth()}-{new Date().getFullYear()}</div>
                    <h2 className='text-sm font-semibold'>News Heading</h2>
                    <div className='flex gap-2'>
                        <p className=' whitespace-nowrap text-sm w-full overflow-hidden'>News details : - Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo numquam suscipit harum officia. Numquam incidunt commodi reiciendis, culpa explicabo eius maxime odio? Inventore, blanditiis! Fugiat, voluptatibus laudantium doloribus beatae minus illo eligendi!</p>
                        <span className='text-sm text-red-500 whitespace-nowrap italic'>Read More</span>
                    </div>
                </div>
                <div className='news border-b-[1px] border-white py-2 mb-4 text-white'>
                    <div className='text-sm italic text-red-500'>{new Date().getDate()}-{new Date().getMonth()}-{new Date().getFullYear()}</div>
                    <h2 className='text-sm font-semibold'>News Heading</h2>
                    <div className='flex gap-2'>
                        <p className=' whitespace-nowrap text-sm w-full overflow-hidden'>News details : - Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo numquam suscipit harum officia. Numquam incidunt commodi reiciendis, culpa explicabo eius maxime odio? Inventore, blanditiis! Fugiat, voluptatibus laudantium doloribus beatae minus illo eligendi!</p>
                        <span className='text-sm text-red-500 whitespace-nowrap italic'>Read More</span>
                    </div>
                </div>
                <div className='news border-b-[1px] border-white py-2 mb-4 text-white'>
                    <div className='text-sm italic text-red-500'>{new Date().getDate()}-{new Date().getMonth()}-{new Date().getFullYear()}</div>
                    <h2 className='text-sm font-semibold'>News Heading</h2>
                    <div className='flex gap-2'>
                        <p className=' whitespace-nowrap text-sm w-full overflow-hidden'>News details : - Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo numquam suscipit harum officia. Numquam incidunt commodi reiciendis, culpa explicabo eius maxime odio? Inventore, blanditiis! Fugiat, voluptatibus laudantium doloribus beatae minus illo eligendi!</p>
                        <span className='text-sm text-red-500 whitespace-nowrap italic'>Read More</span>
                    </div>
                </div>
                <div className='news border-b-[1px] border-white py-2 mb-4 text-white'>
                    <div className='text-sm italic text-red-500'>{new Date().getDate()}-{new Date().getMonth()}-{new Date().getFullYear()}</div>
                    <h2 className='text-sm font-semibold'>News Heading</h2>
                    <div className='flex gap-2'>
                        <p className=' whitespace-nowrap text-sm w-full overflow-hidden'>News details : - Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo numquam suscipit harum officia. Numquam incidunt commodi reiciendis, culpa explicabo eius maxime odio? Inventore, blanditiis! Fugiat, voluptatibus laudantium doloribus beatae minus illo eligendi!</p>
                        <span className='text-sm text-red-500 whitespace-nowrap italic'>Read More</span>
                    </div>
                </div>
                <div className='news border-b-[1px] border-white py-2 mb-4 text-white'>
                    <div className='text-sm italic text-red-500'>{new Date().getDate()}-{new Date().getMonth()}-{new Date().getFullYear()}</div>
                    <h2 className='text-sm font-semibold'>News Heading</h2>
                    <div className='flex gap-2'>
                        <p className=' whitespace-nowrap text-sm w-full overflow-hidden'>News details : - Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo numquam suscipit harum officia. Numquam incidunt commodi reiciendis, culpa explicabo eius maxime odio? Inventore, blanditiis! Fugiat, voluptatibus laudantium doloribus beatae minus illo eligendi!</p>
                        <span className='text-sm text-red-500 whitespace-nowrap italic'>Read More</span>
                    </div>
                </div>
                <div className='news border-b-[1px] border-white py-2 mb-4 text-white'>
                    <div className='text-sm italic text-red-500'>{new Date().getDate()}-{new Date().getMonth()}-{new Date().getFullYear()}</div>
                    <h2 className='text-sm font-semibold'>News Heading</h2>
                    <div className='flex gap-2'>
                        <p className=' whitespace-nowrap text-sm w-full overflow-hidden'>News details : - Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo numquam suscipit harum officia. Numquam incidunt commodi reiciendis, culpa explicabo eius maxime odio? Inventore, blanditiis! Fugiat, voluptatibus laudantium doloribus beatae minus illo eligendi!</p>
                        <span className='text-sm text-red-500 whitespace-nowrap italic'>Read More</span>
                    </div>
                </div>
                <div className='news border-b-[1px] border-white py-2 mb-4 text-white'>
                    <div className='text-sm italic text-red-500'>{new Date().getDate()}-{new Date().getMonth()}-{new Date().getFullYear()}</div>
                    <h2 className='text-sm font-semibold'>News Heading</h2>
                    <div className='flex gap-2'>
                        <p className=' whitespace-nowrap text-sm w-full overflow-hidden'>News details : - Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo numquam suscipit harum officia. Numquam incidunt commodi reiciendis, culpa explicabo eius maxime odio? Inventore, blanditiis! Fugiat, voluptatibus laudantium doloribus beatae minus illo eligendi!</p>
                        <span className='text-sm text-red-500 whitespace-nowrap italic'>Read More</span>
                    </div>
                </div>
                <div className='news border-b-[1px] border-white py-2 mb-4 text-white'>
                    <div className='text-sm italic text-red-500'>{new Date().getDate()}-{new Date().getMonth()}-{new Date().getFullYear()}</div>
                    <h2 className='text-sm font-semibold'>News Heading</h2>
                    <div className='flex gap-2'>
                        <p className=' whitespace-nowrap text-sm w-full overflow-hidden'>News details : - Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo numquam suscipit harum officia. Numquam incidunt commodi reiciendis, culpa explicabo eius maxime odio? Inventore, blanditiis! Fugiat, voluptatibus laudantium doloribus beatae minus illo eligendi!</p>
                        <span className='text-sm text-red-500 whitespace-nowrap italic'>Read More</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News