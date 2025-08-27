import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import {NavLink} from "react-router-dom";
export const HeroSection = () => {
 
const[showPopUp ,setShowPopUp] = useState(false);

useEffect(() =>{
  const time =setTimeout(() =>{
    setShowPopUp(true);},5000);
    return() => clearTimeout(time);
},[]);


 
  return(
    <main className="hero-section main">
    <div className="container grid gird-two-cols" style={{display:"grid",
      gridTemplateColumns:"1fr 1fr", gap:"20px"
    }}>
      <div className="hero-content">
        <h1 className="heading-xl">Explore The World, One Country at a Time.</h1>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum natus obcaecati consectetur ipsam aperiam laborum.
        </p>
       <NavLink to="/country">
        <button className="btn btn-darken btn-inline bg-white-box">Start Exploring <FaArrowRight /></button>
        </NavLink>
       </div>
      <div className="hero-image">

        <img src="/world.png" alt="world beauty
        " className="banner-image" />
      </div>
    </div> 

{showPopUp && (
        <div 
        style={{
        position:"fixed",
        top:"17%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        background:"white",
        padding:"20px",
        borderRadius:"10px",
        boxShadow:"0px 0px 10px rgba(0,0,0,3)",
        zIndex:"999" ,
        }}
        >
        <h2 style={{ color: "#030303ff" }}>Welcome to My Website 🌍</h2>
          <p style={{ color: "#030303ff" }}>
            Start exploring countries and learn more!
          </p>
          <button
            style={{ marginTop: "10px" }}
            onClick={() => setShowPopUp(false)}
          >
            Close
          </button>
        </div>
      )};
     
  </main>
  )

}
