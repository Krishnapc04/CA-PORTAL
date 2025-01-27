import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import SpotlightCard from './SpotLightCard';
import * as motion from "motion/react-client"
import { useInView } from "framer-motion";
import { useRef } from "react";
import "../Pages/Style.css";
import { PiCertificate } from "react-icons/pi";
import { RiDiscountPercentFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { FaGifts } from "react-icons/fa6";
import { MdSocialDistance } from "react-icons/md";



// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Card = (props)=>{
    const ref = useRef(null); // Reference for the element
    const isInView = useInView(ref, { once: true });
    return (
      <>
         <motion.div
          ref={ref} // Attach the ref to the motion.div
          className="resp-card py-4 mb-10 benifit-card min-h-48 "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
      <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">

            <div className={`flex flex-row justify-evenly w-full  h-fit ${props.position}`}>

            {props.icon && <props.icon className="img " />}


            {/* <img
              src={props.img}
              alt="profile"
              className="w-1/2 object-cover pl-3 pb-3 m-auto mb-3 "
            /> */}
            <p className="w-full text-center ">{props.description}</p>
          </div>
      </SpotlightCard>
        </motion.div>
  
      </>
    );
  
  }



const Benifities = () => {
 return (
   <>
   <div className="mt-20">

   <h2 className='text-4xl mt-10 text-yellow-300 font-bold'>Benifities of Campus Ambassador</h2>
   <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 mt-10 '>
    <Card  img="/images/Benifities/certi.png" icon={PiCertificate} description="Receive a prestigious certificate signed by the Head of the Department, IIT Kharagpur, as recognition for your efforts." />
    <Card  img="/images/new1.jpg" icon={RiDiscountPercentFill} description="Get special discounts on accommodation during the fest, based on the number of registrations you bring" />
    <Card  img="/images/new1.jpg" icon={HiUserGroup} description="Build valuable connections with IIT KGP professors and students, enhancing your academic and professional network" />
    <Card  img="/images/new1.jpg"  icon={MdSocialDistance} description="Get featured in a special post on all official COMPOSIT social media handles if you rank among the top 20 ambassadors." />
    <Card  img="/images/new1.jpg" icon={FaGifts} description="Enjoy exciting goodies and gifts as a token of appreciation after the fest." />
    {/* <Card  img="/images/new1.jpg" description="To act as a bridge between COMPOSIT, IIT Kharagpur and your respective college" /> */}

   </div>



   </div>
   </>
  );
}

export default Benifities
