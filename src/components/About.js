import React from 'react';
import about from '../assets/images/about.png'
export default function About(){
return(
    < >

<div className='acolor'>
         <br />
         
     <h1 className=' skillhead fw-bold'> About Us</h1>
     <div className="my-5 container">
      <div className='my-3 row'>
        <div className=" justify-content-center text-center col-lg-6 col-md-12 col-sm-12">
         <p className='mx-3 left'>I am a passionate and driven computer science undergraduate with a deep curiosity for technology and a strong desire to make a positive impact on the world through innovation. My journey in the field of computer science began with a fascination for problem-solving and a love for coding, and it has since evolved into a rewarding educational and professional experience.
I am currently pursuing a Bachelor of Science in Computer Science at [Your University]. Throughout my academic journey, I have gained a solid foundation in computer science principles, algorithms, data structures, and programming languages,.</p>
        </div>
        <div className="justify-content-center text-center col-lg-6 col-md-6 col-sm-6">
        <img id='aboutimg' src={about} alt="h22ee" />
        </div>
        </div>
        </div>   
        </div>

    </>
)


}