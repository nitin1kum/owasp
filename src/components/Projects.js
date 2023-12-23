import React from 'react'
import { useLocation } from 'react-router-dom'

const Projects = () => {
  const location = useLocation();
    return (
      <div className={location.pathname === '/' ? 'projects-container w-full h-auto flex justify-center items-end py-6 pt-10':'projects-container w-full h-screen flex justify-center items-end py-6 pt-10'}>
        <div className={location.pathname === '/'?'h-[95%] w-[95%] py-6 rounded-lg scroll-bar grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8':'h-[95%] w-[95%] py-6 rounded-lg overflow-y-scroll scroll-bar grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'}>
          <div className='grid grid-rows-2 glass-morph project-container overflow-hidden text-white h-min'>
            <div className='h-full w-full overflow-hidden  project-image relative'>
              <img className='h-full transition-all duration-500 w-full rounded-lg object-cover' src="https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Cyber-Security-Projects-2048x1000.png" alt="" />
            </div>
            <div className='p-3 h-full project-details relative'>
              <h2 className="project-name text-3xl mb-2 font-semibold">Project Name</h2>
              <div>
                <p className="project-details text-sm max-h-[100px] overflow-hidden">Lorem ny dkjfs skhks kfhks  ipsum dolor, sit amet consectetur adipisicing elit. Tempora facilis consequatur aperiam ratione eos officia atque voluptatibus enim praesentium vel! Voluptatibus et nisi ea, iusto molestias dolores voluptas aliquid quaerat mollitia nobis beatae, esse praesentium laudantium architecto quae?</p>
                <span className='text-sm text-red-500 italic'>Read More</span>
              </div>
              
            </div>
          </div>
          <div className='grid grid-rows-2 glass-morph project-container overflow-hidden text-white h-min'>
            <div className='h-full w-full overflow-hidden  project-image relative'>
              <img className='h-full transition-all duration-500 w-full rounded-lg object-cover' src="https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Cyber-Security-Projects-2048x1000.png" alt="" />
            </div>
            <div className='p-3 h-full project-details relative'>
              <h2 className="project-name text-3xl mb-2 font-semibold">Project Name</h2>
              <div>
                <p className="project-details text-sm max-h-[100px] overflow-hidden">Lorem ny dkjfs skhks kfhks  ipsum dolor, sit amet consectetur adipisicing elit. Tempora facilis consequatur aperiam ratione eos officia atque voluptatibus enim praesentium vel! Voluptatibus et nisi ea, iusto molestias dolores voluptas aliquid quaerat mollitia nobis beatae, esse praesentium laudantium architecto quae?</p>
                <span className='text-sm text-red-500 italic'>Read More</span>
              </div>
              
            </div>
          </div>
          <div className='grid grid-rows-2 glass-morph project-container overflow-hidden text-white h-min'>
            <div className='h-full w-full overflow-hidden  project-image relative'>
              <img className='h-full transition-all duration-500 w-full rounded-lg object-cover' src="https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Cyber-Security-Projects-2048x1000.png" alt="" />
            </div>
            <div className='p-3 h-full project-details relative'>
              <h2 className="project-name text-3xl mb-2 font-semibold">Project Name</h2>
              <div>
                <p className="project-details text-sm max-h-[100px] overflow-hidden">Lorem ny dkjfs skhks kfhks  ipsum dolor, sit amet consectetur adipisicing elit. Tempora facilis consequatur aperiam ratione eos officia atque voluptatibus enim praesentium vel! Voluptatibus et nisi ea, iusto molestias dolores voluptas aliquid quaerat mollitia nobis beatae, esse praesentium laudantium architecto quae?</p>
                <span className='text-sm text-red-500 italic'>Read More</span>
              </div>
              
            </div>
          </div>
          <div className='grid grid-rows-2 glass-morph project-container overflow-hidden text-white h-min'>
            <div className='h-full w-full overflow-hidden  project-image relative'>
              <img className='h-full transition-all duration-500 w-full rounded-lg object-cover' src="https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Cyber-Security-Projects-2048x1000.png" alt="" />
            </div>
            <div className='p-3 h-full project-details relative'>
              <h2 className="project-name text-3xl mb-2 font-semibold">Project Name</h2>
              <div>
                <p className="project-details text-sm max-h-[100px] overflow-hidden">Lorem ny dkjfs skhks kfhks  ipsum dolor, sit amet consectetur adipisicing elit. Tempora facilis consequatur aperiam ratione eos officia atque voluptatibus enim praesentium vel! Voluptatibus et nisi ea, iusto molestias dolores voluptas aliquid quaerat mollitia nobis beatae, esse praesentium laudantium architecto quae?</p>
                <span className='text-sm text-red-500 italic'>Read More</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
}

export default Projects