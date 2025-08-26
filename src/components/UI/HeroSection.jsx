 import { FaArrowRight } from "react-icons/fa";

export const HeroSection = () => {

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
        <button className="btn btn-darken btn-inline bg-white-box">Start Exploring <FaArrowRight /></button>
      </div>
      <div className="hero-image">

        <img src="/world.png" alt="world beauty
        " className="banner-image" />
      </div>
    </div> 
  </main>
  )

}