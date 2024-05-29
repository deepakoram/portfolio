import Sidebar from '../sidebar/Sidebar';
import './navbar.scss';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
        <div className="wrapper">
            {/* <motion.img 
            className='logo-img' 
            src="/photo.png" 
            initial={{opacity:0, scale:0.5}}
            animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}
            /> */}
            <motion.div className="social"
            initial={{opacity:0, scale:0.5}}
            animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}
            >
                <motion.a href="#"  
                whileHover={{ scale: 1.5, rotate: 360 }}
                whileTap={{scale: 0.8,}}
                ><img src="/spotify.svg" alt="facebook"/></motion.a>
                <motion.a href="#" 
                whileHover={{ scale: 1.5, rotate: 360 }}
                whileTap={{scale: 0.8,}}
                ><img src="/instagram.svg" alt="facebook"/></motion.a>
                <motion.a href="#" 
                whileHover={{ scale: 1.5, rotate: 360 }}
                whileTap={{scale: 0.8,}}
                ><img src="/youtube.svg" alt="facebook"/></motion.a>
            </motion.div>
        </div>
    </div>
  )
}

export default Navbar