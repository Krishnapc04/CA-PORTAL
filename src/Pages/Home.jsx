import React from 'react'
import GradientText from '../components/GradientText'

const Home = () => {
  return (
    <div className='pt-10 text-white' style={{marginTop:"30px"}}>
        <GradientText
colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
animationSpeed={8}
showBorder={false}
className="custom-class"
>
    <h1 className='font-bold text-7xl'> <span className='mb-10px pb-3'>
            CAMPUS</span> <br /> AMBASSADOR </h1>
</GradientText>

        <p className='text-2xl w-2/4 m-auto mt-16 leading-relaxed'>COMPOSIT, IIT Kharagpur presents the Campus Ambassador Programme with the goal of fostering in you the essential leadership qualities.</p>
    </div>
  )
}

export default Home
