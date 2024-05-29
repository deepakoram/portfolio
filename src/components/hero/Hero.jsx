import "./hero.scss"
import { motion } from 'framer-motion';
import { useState } from "react";

const textVariants={
    initial:{
        x:-500,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
}
const sliderVariants={
    initial:{
        x:0,
    },
    animate:{
        x:"-600%",
        opacity:1,
        transition:{
            repeat:Infinity,
            repeatType:'mirror',
            duration:20,
        }
    },
}
const Hero = () => {
    const[bg,setBg] = useState("/hero-b&w.png")
  return (
      <div className="hero">
        {/* <img className="bgimg" src="/BG.jpg" alt=""/> */}
        <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants} whileHover={{color:'orange',fontSize:'35px'}}>DEEPAK ORAM</motion.h2>
            <motion.h1 variants={textVariants}>Frontend Developer</motion.h1>
            <motion.p variants={textVariants}>Crafting Digital Experiences, One Pixel at a Time</motion.p>
            <motion.div className="button" variants={textVariants}>
                <motion.button 
                variants={textVariants} 
                whileHover={{background:"white",color:'black',fontSize:'20px'}}><a href="#Projects">See the latest work</a></motion.button>
                <motion.button variants={textVariants} whileHover={{background:"white",color:'black',fontSize:'20px'}}><a href="#Contact">Contact me</a></motion.button>
            </motion.div>
            <motion.img src="/scroll.png" alt="" variants={textVariants} animate="scrollButton"/>
        </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
            Frontend Developer, Music Producer
        </motion.div>
        <div className="imageContainer">
            <img src={bg} alt="" 
            onMouseEnter={() => setBg("/hero.png")}
            onMouseLeave={() => setBg("/hero-b&w.png")}/>
        </div>
    </div>
  )
}

export default Hero