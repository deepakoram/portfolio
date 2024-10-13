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
                ><a href="https://open.spotify.com/track/4H5657KtvtfvGCZ6WNlT7W?si=afc6483b648a45e8" target='_blank' rel="noreferrer"><img src="/spotify.svg" alt="facebook"/></a></motion.a>
                <motion.a href="#" 
                whileHover={{ scale: 1.5, rotate: 360 }}
                whileTap={{scale: 0.8,}}
                ><a href="https://www.instagram.com/deepvkmusic/" target='_blank' rel="noreferrer"><img src="/instagram.svg" alt="facebook"/></a></motion.a>
                <motion.a href="#" 
                whileHover={{ scale: 1.5, rotate: 360 }}
                whileTap={{scale: 0.8,}}
                ><a href="https://www.youtube.com/@DK-qz5nz" target='_blank' rel="noreferrer"><img src="/youtube.svg" alt="facebook"/></a></motion.a>
            </motion.div>
        </div>
    </div>
  )
}

export default Navbar