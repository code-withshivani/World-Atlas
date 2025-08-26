import data from "../api/countryData.json";


export const About = () => {
  return (
  <section className ="section-about container">
    <h2 className="container-title">
      Here are the Interesting facts
      <br />
      we're proud of
    </h2>
   
   <div className="gradient-cards">

    {data.map((country) =>{
     const{id,name,capital,population,fact} = country

      return (
       <div className="card" key={id}>
      <div className="container-card bg-blue-box">
        <div className="card-title"><p>{name}</p>
        <p>
          <span  className="card-description">Capital:</span>{capital}
        </p>
        <p>
          <span  className="card-description">Population:</span>{population}
        </p>
<p>
          <span  className="card-description"> Interesting Facts:</span> {fact}
        </p> 
        </div>
      </div>
    </div>
   ) })} 
   </div>

  </section>
  ) ;
};

 