import { useRef } from 'react';
import './services.scss';
import { animate, motion, useInView } from 'framer-motion';

const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    }
}
const Services = () => {
    const ref = useRef();
    const isInView = useInView(ref,{margin:"-100px"})

    let ImageArr = [
        {
            title:"React.js",
            img:"/react.svg"
        },
        {
            title:"HTML 5",
            img:"/html.png"
        },
        {
            title:"CSS",
            img:"/css.png"
        },
        {
            title:"Javascript",
            img:"/js.png"
        },
    ]

  return (
    <motion.div 
    className='services' 
    // variants={variants} 
    // initial="initial" 
    ref={ref} 
    // animate={isInView && "animate"}
    >
        <motion.div className="textContainer" variants={variants}>
            <p>
                I focus on helping your brand grow
                <br/> and move forward.
            </p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className='title'>
                <img src="/people.webp" alt="" />
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Technologies </motion.b>
                </h1>
            </div>
            <div className='title'>
                <h1>
                    <motion.b whileHover={{color:"orange"}}>For Your </motion.b>Business
                </h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            {ImageArr.map((item,index)=>(
            <motion.div className="box" key={index} 
            whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}>
                <h2>{item.title}</h2>
                <img src={item.img} alt="" />
            </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Services