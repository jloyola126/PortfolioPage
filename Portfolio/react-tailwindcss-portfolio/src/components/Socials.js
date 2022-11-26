import React from "react";
import { socials } from "../data";

export default function Socials() {
  return (
    <section id="socials" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Socials
          </h1>        
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:'center'}}>
          {socials.map((social) => (
            <a
              href={social.link}
              key={social.image}
             >
                          
                <span className="title-font font-medium text-white">
                <img
                  alt="gallery"
                  style={{width:'10em',display:"flex",justifyContent:"center",alignItems:'center'}}
                  src={social.image}
                />
                </span>                        
            </a>
          ))}
          <h6 style={{margin:"20px"}}>
            Email: <br/> 
            jloyola@ucsc.edu
          </h6>  
        </div>
      </div>
    </section>
  );
}
