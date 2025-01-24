"use client";
import React from "react";
import * as motion from "motion/react-client"
import { useInView } from "framer-motion";
import { useRef } from "react";
import SpotlightCard from "../components/SpotLightCard";


import { useState } from "react";
import "./Style.css";

const Card = (props)=>{
  const ref = useRef(null); // Reference for the element
  const isInView = useInView(ref, { once: true });
  return (
    <>
       <motion.div
        ref={ref} // Attach the ref to the motion.div
        className="resp-card py-4 mb-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">

        <h2 className="text-2xl">{props.work}</h2>
        <div className={`flex justify-evenly mt-8 h-fit ${props.position}`}>
          <img
            src={props.img}
            alt="profile"
            className="w-1/4 object-cover pl-3 pb-3 mb-3"
          />
          <p className="text-2xl w-1/4">{props.description}</p>
        </div>
    </SpotlightCard>
      </motion.div>

    </>
  );

}

const NewCard = ( )=>{
  const ref = useRef(null); // Reference for the element
  const isInView = useInView(ref, { once: true });

  return(
    <motion.div
    ref={ref} // Attach the ref to the motion.div
    className="resp-card py-4 mb-20"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
    transition={{
      duration: 0.4,
      scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
    }}
  >
<SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">

  <ol >
    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur distinctio architecto porro. Distinctio blanditiis soluta consequuntur modi commodi ratione?</p></li>
    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur distinctio architecto porro. Distinctio blanditiis soluta consequuntur modi commodi ratione?</p></li>
    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur distinctio architecto porro. Distinctio blanditiis soluta consequuntur modi commodi ratione?</p></li>
    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur distinctio architecto porro. Distinctio blanditiis soluta consequuntur modi commodi ratione?</p></li>
    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur distinctio architecto porro. Distinctio blanditiis soluta consequuntur modi commodi ratione?</p></li>
    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur distinctio architecto porro. Distinctio blanditiis soluta consequuntur modi commodi ratione?</p></li>
  </ol>
    
</SpotlightCard>
  </motion.div>
  )

}

const Responsibilities = () => {
  // const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div  className="work mt-40">
      <h1 className="text-4xl mb-1 font-bold flex justify-center gap-2"> Your Responsibilities</h1>
      {/* <Card work="Bridge" img="/images/new1.jpg" description="To act as a bridge between COMPOSIT, IIT Kharagpur and your respective college" position="flex-row"/>
      <Card work="Bridge" img="/images/new1.jpg" description="To act as a bridge between COMPOSIT, IIT Kharagpur and your respective college" position="flex-row-reverse"/>
      <Card work="Bridge" img="/images/new1.jpg" description="To act as a bridge between COMPOSIT, IIT Kharagpur and your respective college" position="flex-row"/>
      <Card work="Bridge" img="/images/new1.jpg" description="To act as a bridge between COMPOSIT, IIT Kharagpur and your respective college" position="flex-row-reverse"/>
      <Card work="Bridge" img="/images/new1.jpg" description="To act as a bridge between COMPOSIT, IIT Kharagpur and your respective college" position="flex-row"/> */}
      <NewCard/>
     
    </div>
  );
}






export default Responsibilities
