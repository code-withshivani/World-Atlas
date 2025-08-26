 
 export const Contact = () => {

const handleFormSubmit =(formData) =>{
  const formInputData = Object.fromEntries(formData.entries());
  console.log(formInputData);
};

  return <section className="section-contact">
    
    <h2 className="container-title">Contact Us</h2>
    
    <div className="contact-wrapper container">
    <form action={handleFormSubmit}>
     <input type="text"
     required autoComplete="false"
     placeholder="Enter your name"
     name="username"/>

     <input type="email" 
     className="form-control"
     required autoComplete="false"
     placeholder="Enter your e-mail"
     name="email"
     />

     <textarea name="message" 
     className="form-control"
     required autoComplete="false"
     placeholder="Enter your message"
     rows="10"
     ></textarea>

  <button type="submit">send</button>     
 
    </form>
</div>

  </section>
};

 