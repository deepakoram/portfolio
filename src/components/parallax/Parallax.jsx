import { useRef } from 'react'
import './parallax.scss'
import { motion,useScroll, useTransform } from 'framer-motion'

const Parallax = ({type}) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start","end start" ]
    })
    const yText = useTransform(scrollYProgress,[0,1],["0%","500%"])
    const yPlanet = useTransform(scrollYProgress,[0,1],["0%","100%"])
    const yStar = useTransform(scrollYProgress,[0,1],["0%","10%"])
  return (
    <div className='parallax'
    ref={ref}
    style={{background : "linear-gradient(180deg, #141414, #0a0a0a)"}}
    >
        <motion.h1 style={{y:yText}}>{type === "services" ? "Technologies" : "Projects"}</motion.h1>
        <motion.div className="mountain"></motion.div>
        <motion.div style={{y:yPlanet, backgroundImage:`url(${type === "services" ? "/planets.png" : "/sun.png"})`}} className="planets"></motion.div>
        <motion.div style={{x:yStar}} className="stars"></motion.div>
    </div>
  )
}

export default Parallax