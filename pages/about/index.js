import React, { useState } from 'react'

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        message: 'HTML || CSS ||'
      },
    ],
  },
];

import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const About = () => {
  const [index, setIndex] = useState(0)
  console.log(index)
  return (
  <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles />
    <motion.div 
    variants={fadeIn('right', 0.2)} 
    initial='hidden' animate='show' 
    exit='hidden' 
    className='hidden xl:flex absolute bottom-0 -left-[370px]'>
      <Avatar />
    </motion.div>
    <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
      <div className='flex-1 flex flex-col justify-center'>
        <h2></h2>
      </div>
      <div className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex)=> {
            return (
              <div
              key={itemIndex}
              className={`${
                index === itemIndex &&
                'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300' }
                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              > {item.title} </div>
            )
          })}
        </div>
        <div className='bg-pink-400/10 py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
          {aboutData[index].info.map((item, itemIndex)=> {
            return (
              <div key={itemIndex}
              className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
              >
                
                <div className='font-light mb02 md:mb-0'>{item.title}</div>
                <div className='hidden md:flex'>-</div>
                <p className='font-semibold'>HTML 5 // JAVASCRIPT // NEXT.JS // TYPESCRIPT // TAILWINDCSS</p>
                <div>{item.stage}</div>
                <div className='flex gap-x-4'>
                    {item.icons?.map((icon, itemIndex) => {
                      return
                    })}
                </div>
              </div>
              )
          })}
        </div>
      </div>
    </div>
  </div>
  )
};

export default About;
