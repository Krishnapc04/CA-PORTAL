import React from 'react'
import BlurText from '../components/BlurText'
import "./Style.css"

const About = () => {

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
        };

        


  return (
    <div className='text-white mt-20 flex flex-col gap-5 w-full m-auto border-2 px-5 py-7 md:w-3/4 sm:px-10' id='about'>
      <h1 className='text-5xl mb-3 font-bold'>About Us</h1>
    {/* <p className='text-lg'> */}
    <BlurText
text="
COMPOSIT (Congress of Metallurgical Professionals involving Students, Industry, and Teachers) is one of India’s largest materials science fests, organized by the Society of Metallurgical Engineers, IIT Kharagpur. Since its inception in 1994, it has been a premier platform for students, professionals, and academicians to explore innovations, share expertise, and celebrate advancements in materials science. With a mission to inspire and connect bright minds, COMPOSIT fosters knowledge-sharing, talent showcasing, and interaction with industry stalwarts, promising an exciting journey of events and opportunities for aspiring enthusiasts."
delay={100}
animateBy="words"
direction="top"
onAnimationComplete={handleAnimationComplete}
className="text-sm sm:text-md md:text-2xl mb-8"
/>
       
    </div>
  )
}

export default About
