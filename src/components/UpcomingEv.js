import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const UpcomingEv = () => {
    return (
        <div className='h-screen w-full flex justify-center pt-20 bg-gradient-to-bl from-zinc-950 to-blue-950 relative'>
            <div className='w-[95%] h-[95%] overflow-hidden'>
                <Swiper
                    breakpoints={{
                        1024: {
                            direction: 'vertical',
                        }
                    }}
                    effect={"coverflow"}
                    mousewheel={{
                        clickable:true,
                        forceToAxis:true
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false
                    }}
                    centeredSlides={true}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}

                    speed={500}
                    spaceBetween={30}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                    }}
                    modules={[Mousewheel, Pagination, Navigation, Autoplay, EffectCoverflow]}
                    shortSwipes={true}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='h-full glass-morph w-full lg:p-8 p-4 lg:gap-6 gap-3 grid grid-rows-2 direc lg:grid-cols-2 lg:grid-rows-1 bg-transparent'>
                            <img className='h-full w-full  object-cover rounded-lg' src="https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png" alt="" />
                            <div className="coming-event-imf text-white lg:py-10 flex flex-col items-center text-sm lg:text-base">
                                <h1 className='event-name lg:text-[50px] text-[30px] py-3 font-bold lg:py-6'>codeforce</h1>
                                <p className="event-details max-h-[40vw] lg:max-h-full overflow-hidden my-3 py-1 overflow-y-scroll scroll-bar lg:h-auto lg:w-4/5 lg:my-6">Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem officia omnis corrupti facilis fuga reprehenderit eaque sed distinctio ex, ipsam similique quod cum praesentium, molestiae explicabo nulla tempora officiis harum perferendis amet consectetur dolor neque. Quae provident similique fuga reprehenderit nihil expedita inventore tempore beatae architecto consequatur? ipsum dolor, sit amet consectetur adipisicing elit. Quidem atque sequi corrupti velit esse repellendus illum, cumque quod distinctio, possimus voluptate necessitatibus ex non odio, numquam nobis perferendis ad quo debitis? Nam, repellat?</p>
                                <div className="date italic font-medium">Date: <span>3rd March 2023 </span>Time:  <span>12:00 PM - 3:00PM</span></div>
                                <button className='h-fit text-black font-bold hover:scale-95 box-shadow transition-all duration-500 w-fit py-2 px-6 mt-10 rounded-lg bg-white'>Register</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-full glass-morph w-full lg:p-8 p-4 lg:gap-6 gap-3 grid grid-rows-2 direc lg:grid-cols-2 lg:grid-rows-1 bg-transparent'>
                            <img className='h-full w-full  object-cover rounded-lg' src="https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png" alt="" />
                            <div className="coming-event-imf text-white lg:py-10 flex flex-col items-center text-sm lg:text-base">
                                <h1 className='event-name lg:text-[50px] text-[30px] py-3 font-bold lg:py-6'>codeforce</h1>
                                <p className="event-details max-h-[40vw] lg:max-h-full overflow-hidden my-3 py-1 overflow-y-scroll scroll-bar lg:h-auto lg:w-4/5 lg:my-6">Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem officia omnis corrupti facilis fuga reprehenderit eaque sed distinctio ex, ipsam similique quod cum praesentium, molestiae explicabo nulla tempora officiis harum perferendis amet consectetur dolor neque. Quae provident similique fuga reprehenderit nihil expedita inventore tempore beatae architecto consequatur? ipsum dolor, sit amet consectetur adipisicing elit. Quidem atque sequi corrupti velit esse repellendus illum, cumque quod distinctio, possimus voluptate necessitatibus ex non odio, numquam nobis perferendis ad quo debitis? Nam, repellat?</p>
                                <div className="date italic font-medium">Date: <span>3rd March 2023 </span>Time:  <span>12:00 PM - 3:00PM</span></div>
                                <button className='h-fit text-black font-bold hover:scale-95 box-shadow transition-all duration-500 w-fit py-2 px-6 mt-10 rounded-lg bg-white'>Register</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-full glass-morph w-full lg:p-8 p-4 lg:gap-6 gap-3 grid grid-rows-2 direc lg:grid-cols-2 lg:grid-rows-1 bg-transparent'>
                            <img className='h-full w-full  object-cover rounded-lg' src="https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png" alt="" />
                            <div className="coming-event-imf text-white lg:py-10 flex flex-col items-center text-sm lg:text-base">
                                <h1 className='event-name lg:text-[50px] text-[30px] py-3 font-bold lg:py-6'>codeforce</h1>
                                <p className="event-details max-h-[40vw] lg:max-h-full overflow-hidden my-3 py-1 overflow-y-scroll scroll-bar lg:h-auto lg:w-4/5 lg:my-6">Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem officia omnis corrupti facilis fuga reprehenderit eaque sed distinctio ex, ipsam similique quod cum praesentium, molestiae explicabo nulla tempora officiis harum perferendis amet consectetur dolor neque. Quae provident similique fuga reprehenderit nihil expedita inventore tempore beatae architecto consequatur? ipsum dolor, sit amet consectetur adipisicing elit. Quidem atque sequi corrupti velit esse repellendus illum, cumque quod distinctio, possimus voluptate necessitatibus ex non odio, numquam nobis perferendis ad quo debitis? Nam, repellat?</p>
                                <div className="date italic font-medium">Date: <span>3rd March 2023 </span>Time:  <span>12:00 PM - 3:00PM</span></div>
                                <button className='h-fit text-black font-bold hover:scale-95 box-shadow transition-all duration-500 w-fit py-2 px-6 mt-10 rounded-lg bg-white'>Register</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-full glass-morph w-full lg:p-8 p-4 lg:gap-6 gap-3 grid grid-rows-2 direc lg:grid-cols-2 lg:grid-rows-1 bg-transparent'>
                            <img className='h-full w-full  object-cover rounded-lg' src="https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png" alt="" />
                            <div className="coming-event-imf text-white lg:py-10 flex flex-col items-center text-sm lg:text-base">
                                <h1 className='event-name lg:text-[50px] text-[30px] py-3 font-bold lg:py-6'>codeforce</h1>
                                <p className="event-details max-h-[40vw] lg:max-h-full overflow-hidden my-3 py-1 overflow-y-scroll scroll-bar lg:h-auto lg:w-4/5 lg:my-6">Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem officia omnis corrupti facilis fuga reprehenderit eaque sed distinctio ex, ipsam similique quod cum praesentium, molestiae explicabo nulla tempora officiis harum perferendis amet consectetur dolor neque. Quae provident similique fuga reprehenderit nihil expedita inventore tempore beatae architecto consequatur? ipsum dolor, sit amet consectetur adipisicing elit. Quidem atque sequi corrupti velit esse repellendus illum, cumque quod distinctio, possimus voluptate necessitatibus ex non odio, numquam nobis perferendis ad quo debitis? Nam, repellat?</p>
                                <div className="date italic font-medium">Date: <span>3rd March 2023 </span>Time:  <span>12:00 PM - 3:00PM</span></div>
                                <button className='h-fit text-black font-bold hover:scale-95 box-shadow transition-all duration-500 w-fit py-2 px-6 mt-10 rounded-lg bg-white'>Register</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-full glass-morph w-full lg:p-8 p-4 lg:gap-6 gap-3 grid grid-rows-2 direc lg:grid-cols-2 lg:grid-rows-1 bg-transparent'>
                            <img className='h-full w-full  object-cover rounded-lg' src="https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png" alt="" />
                            <div className="coming-event-imf text-white lg:py-10 flex flex-col items-center text-sm lg:text-base">
                                <h1 className='event-name lg:text-[50px] text-[30px] py-3 font-bold lg:py-6'>codeforce</h1>
                                <p className="event-details max-h-[40vw] lg:max-h-full overflow-hidden my-3 py-1 overflow-y-scroll scroll-bar lg:h-auto lg:w-4/5 lg:my-6">Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem officia omnis corrupti facilis fuga reprehenderit eaque sed distinctio ex, ipsam similique quod cum praesentium, molestiae explicabo nulla tempora officiis harum perferendis amet consectetur dolor neque. Quae provident similique fuga reprehenderit nihil expedita inventore tempore beatae architecto consequatur? ipsum dolor, sit amet consectetur adipisicing elit. Quidem atque sequi corrupti velit esse repellendus illum, cumque quod distinctio, possimus voluptate necessitatibus ex non odio, numquam nobis perferendis ad quo debitis? Nam, repellat?</p>
                                <div className="date italic font-medium">Date: <span>3rd March 2023 </span>Time:  <span>12:00 PM - 3:00PM</span></div>
                                <button className='h-fit text-black font-bold hover:scale-95 box-shadow transition-all duration-500 w-fit py-2 px-6 mt-10 rounded-lg bg-white'>Register</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default UpcomingEv