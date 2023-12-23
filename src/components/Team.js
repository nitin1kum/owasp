import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa6';

const Team = () => {

  const handleClick = (e) => {
    let i = 0;
    let elements = document.getElementsByClassName('work-name');
    while (i < elements.length) {
      elements[i].classList.remove('work-button');
      i++;
    }
    e.target.classList.add('work-button')
  }

  return (
    <div className=' faqs-page flex justify-center items-center min-h-screen pt-20 bg-gradient-to-tr pb-5 from-blue-600 to-black'>
      <div className=' h-[95%] w-[95%] m-auto flex flex-col items-center'>
        <div className='font-bold text-[30px] text-white lg:my-6 my-3 '>Team</div>
        <div className="team-work lg:w-1/2 w-full whitespace-nowrap overflow-x-scroll my-4 scroll-bar">
          <span className='font-semibold inline-block work-name px-6 py-2 mx-3 ronded-full text-sm glass-morph text-white work-button' onClick={e => handleClick(e)}>Web Dev</span>
          <span className='font-semibold inline-block work-name px-6 py-2 mx-3 ronded-full text-sm glass-morph text-white' onClick={e => handleClick(e)}>Designer</span>
          <span className='font-semibold inline-block work-name px-6 py-2 mx-3 ronded-full text-sm glass-morph text-white' onClick={e => handleClick(e)}>Co-ordinater</span>
          <span className='font-semibold inline-block work-name px-6 py-2 mx-3 ronded-full text-sm glass-morph text-white' onClick={e => handleClick(e)}>Web Dev</span>
          <span className='font-semibold inline-block work-name px-6 py-2 mx-3 ronded-full text-sm glass-morph text-white' onClick={e => handleClick(e)}>Web Dev</span>
          <span className='font-semibold inline-block work-name px-6 py-2 mx-3 ronded-full text-sm glass-morph text-white' onClick={e => handleClick(e)}>Web Dev</span>
        </div>
        <div className="team-members grid grid-cols-2 sm:flex sm:flex-row sm:justify-center sm:flex-wrap sm:gap-20 gap-2 w-full lg:w-1/2 ">

          <div className="profile-card sm:w-48 sm:h-64 glass-morph p-4">
            <div className='h-3/4 w-full relative'>
              <div className='team-member-contact absolute inset-0 h-full opacity-0  w-full flex justify-between items-end p-2 transition-all duration-500 ease-in-out z-10 bg-gray-900 bg-opacity-80'>
                <a href="#" className='p-2 bg-white rounded-lg cursor-pointer'><BsInstagram className='text-xl text-pink-600' /></a>
                <a href="#" className='p-2 bg-white rounded-lg cursor-pointer'><FaLinkedinIn className='text-xl fill-sky-600' /></a>
              </div>
              <img className='h-full w-full object-cover' src="https://w7.pngwing.com/pngs/247/564/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue-thumbnail.png" alt="" />
            </div>
            <div className='pt-4 text-white'>
              <p className='font-bold whitespace-nowrap text-sm w-full text-center'>Memeber</p>
              <p className='font-medium text-xs w-full text-center'>Post</p>
            </div>
          </div>
          <div className="profile-card sm:w-48 sm:h-64 glass-morph p-4">
            <div className='h-3/4 w-full relative'>
              <div className='team-member-contact absolute inset-0 h-full opacity-0  w-full flex justify-between items-end p-2 transition-all duration-500 ease-in-out z-10 bg-gray-900 bg-opacity-80'>
                <a href="#" className='p-2 bg-white rounded-lg cursor-pointer'><BsInstagram className='text-xl text-pink-600' /></a>
                <a href="#" className='p-2 bg-white rounded-lg cursor-pointer'><FaLinkedinIn className='text-xl fill-sky-600' /></a>
              </div>
              <img className='h-full w-full object-cover' src="https://w7.pngwing.com/pngs/247/564/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue-thumbnail.png" alt="" />
            </div>
            <div className='pt-4 text-white'>
              <p className='font-bold whitespace-nowrap text-sm w-full text-center'>Memeber</p>
              <p className='font-medium text-xs w-full text-center'>Post</p>
            </div>
          </div>
          <div className="profile-card sm:w-48 sm:h-64 glass-morph p-4">
            <div className='h-3/4 w-full relative'>
              <div className='team-member-contact absolute inset-0 h-full opacity-0  w-full flex justify-between items-end p-2 transition-all duration-500 ease-in-out z-10 bg-gray-900 bg-opacity-80'>
                <a href="#" className='p-2 bg-white rounded-lg cursor-pointer'><BsInstagram className='text-xl text-pink-600' /></a>
                <a href="#" className='p-2 bg-white rounded-lg cursor-pointer'><FaLinkedinIn className='text-xl fill-sky-600' /></a>
              </div>
              <img className='h-full w-full object-cover' src="https://w7.pngwing.com/pngs/247/564/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue-thumbnail.png" alt="" />
            </div>
            <div className='pt-4 text-white'>
              <p className='font-bold whitespace-nowrap text-sm w-full text-center'>Memeber</p>
              <p className='font-medium text-xs w-full text-center'>Post</p>
            </div>
          </div>
          <div className="profile-card sm:w-48 sm:h-64 glass-morph p-4">
            <div className='h-3/4 w-full relative'>
              <div className='team-member-contact absolute inset-0 h-full opacity-0  w-full flex justify-between items-end p-2 transition-all duration-500 ease-in-out z-10 bg-gray-900 bg-opacity-80'>
                <a href="#" className='p-2 bg-white rounded-lg cursor-pointer'><BsInstagram className='text-xl text-pink-600' /></a>
                <a href="#" className='p-2 bg-white rounded-lg cursor-pointer'><FaLinkedinIn className='text-xl fill-sky-600' /></a>
              </div>
              <img className='h-full w-full object-cover' src="https://w7.pngwing.com/pngs/247/564/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue-thumbnail.png" alt="" />
            </div>
            <div className='pt-4 text-white'>
              <p className='font-bold whitespace-nowrap text-sm w-full text-center'>Memeber</p>
              <p className='font-medium text-xs w-full text-center'>Post</p>
            </div>
          </div>
          <div className="profile-card sm:w-48 sm:h-64 glass-morph p-4">
            <div className='h-3/4 w-full relative'>
              <div className='team-member-contact absolute inset-0 h-full opacity-0  w-full flex justify-between items-end p-2 transition-all duration-500 ease-in-out z-10 bg-gray-900 bg-opacity-80'>
                <a href="#" className='p-2 bg-white rounded-lg cursor-pointer'><BsInstagram className='text-xl text-pink-600' /></a>
                <a href="#" className='p-2 bg-white rounded-lg cursor-pointer'><FaLinkedinIn className='text-xl fill-sky-600' /></a>
              </div>
              <img className='h-full w-full object-cover' src="https://w7.pngwing.com/pngs/247/564/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue-thumbnail.png" alt="" />
            </div>
            <div className='pt-4 text-white'>
              <p className='font-bold whitespace-nowrap text-sm w-full text-center'>Memeber</p>
              <p className='font-medium text-xs w-full text-center'>Post</p>
            </div>
          </div>
          <div className="profile-card sm:w-48 sm:h-64 glass-morph p-4">
            <div className='h-3/4 w-full relative'>
              <div className='team-member-contact absolute inset-0 h-full opacity-0  w-full flex justify-between items-end p-2 transition-all duration-500 ease-in-out z-10 bg-gray-900 bg-opacity-80'>
                <a href="#" className='p-2 bg-white rounded-lg cursor-pointer'><BsInstagram className='text-xl text-pink-600' /></a>
                <a href="#" className='p-2 bg-white rounded-lg cursor-pointer'><FaLinkedinIn className='text-xl fill-sky-600' /></a>
              </div>
              <img className='h-full w-full object-cover' src="https://w7.pngwing.com/pngs/247/564/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue-thumbnail.png" alt="" />
            </div>
            <div className='pt-4 text-white'>
              <p className='font-bold whitespace-nowrap text-sm w-full text-center'>Memeber</p>
              <p className='font-medium text-xs w-full text-center'>Post</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team