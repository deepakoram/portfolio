import { useRef } from "react"
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const item = [
  {
    id:1,
    title:"PayU India",
    img:"/payu-india.jpg",
    desc:"Payu offers the country’s businesses & consumers with financial services & products they need to thrive.",
    link:"https://corporate.payu.in/careers/"
  },
  {
    id:2,
    title:"Shree Maruti Courier Pvt. Ltd.",
    img:"/SMCS.png",
    desc:"SMCS is a ntegrated logistics solutions for businesses across India and cater to all their supply-chain needs in one place.",
    link:"https://www.shreemaruti.com/network-map"
  },
  {
    id:3,
    title:"Nata Farming",
    img:"https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc:""
  },
  {
    id:4,
    title:"Test Dashboard",
    img:"https://www.webstacks.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F9qa6g0dkae5p%2F5YZv9xIcoJPASz7tj4yHzD%2F6f5ef537f8191d19108fee724b47babe%2Ffintech-websites-collage.jpg&w=3840&q=75",
    desc:"",
    link:"https://juspay-dashboard-psi.vercel.app"
  }
]
const Single = ({item})=>{
  const ref = useRef();
  const {scrollYProgress} = useScroll({target:ref})
  const y = useTransform(scrollYProgress,[0,1], [-200,200])
  return(
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
        <motion.div className="textContainer" style={{y}}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button><a href={item.link || "#"} rel="noopener noreferrer" target="_blank">See Demo</a></button>
        </motion.div>
        </div>
      </div>
    </section>
  )
}
const Portfolio = () => {
  const ref = useRef()
  const {scrollYProgress} = useScroll({target:ref, offset:["end end","start start"]})
  const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping: 30
  })
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className="progressBar">

        </motion.div>
      </div>
      {item.map((item)=>(
        <Single key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default Portfolio