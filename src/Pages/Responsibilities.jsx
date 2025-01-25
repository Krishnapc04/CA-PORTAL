"use client";
import React from "react";
import * as motion from "motion/react-client"
import { useInView } from "framer-motion";
import { useRef } from "react";
import SpotlightCard from "../components/SpotLightCard";


import { useState } from "react";
import "./Style.css";



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
    <li><p>Act as a vital link between COMPOSIT, IIT Kharagpur, and your college, ensuring seamless communication and collaboration.</p></li>
    <li><p>Encourage and ensure active participation of students from your college in various events, workshops, and competitions.</p></li>
    <li><p>Publicize COMPOSIT and its events within your college, spreading awareness and excitement about the fest.</p></li>
    <li><p>Promote COMPOSIT's initiatives through social media platforms and word-of-mouth campaigns.
    </p></li>
    <li><p>Represent your college at COMPOSIT and showcase its talent on a prestigious platform.
    </p></li>
    {/* <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur distinctio architecto porro. Distinctio blanditiis soluta consequuntur modi commodi ratione?</p></li> */}
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
