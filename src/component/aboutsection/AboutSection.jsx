import React from 'react'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "phosphor-react";


import './aboutsection.css'
const AboutSection = () => {
  const textRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);



  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const element = textRef.current;
  
  //     const wrapWords = (node) => {
  //       if (node.nodeType === 3) {
  //         const words = node.textContent.split(" ").map(word => {
  //           return `<span class="word">${word}</span>`;
  //         }).join(" ");
  
  //         const span = document.createElement("span");
  //         span.innerHTML = words;
  //         node.replaceWith(span);
  //       } else if (node.nodeType === 1) {
  //         node.childNodes.forEach(child => wrapWords(child));
  //       }
  //     };
  
  //     wrapWords(element);
  
  //     const words = element.querySelectorAll(".word");
  
  //     gsap.fromTo(words,
  //       {
  //         opacity: 0,
  //         y: -20,
  //         scale: 0.95
  //       },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         scale: 1,
  //         ease: "power2.out",
  //         stagger: {
  //           each: 0.03
  //         },
  //         scrollTrigger: {
  //           trigger: element,
  //           start: "top 85%",
  //           end: "top 40%",   // animation range
  //           scrub: 1,         // 🔥 THIS is the magic
  //         }
  //       }
  //     );
  
  //   });
  
  //   return () => ctx.revert();
  // }, []);

  return (
    <div className='about_container'>
      <h2 className='abt_title_text'>about</h2>
      <div className="abt_lhs_wrapper">
        <p className='abt_sml_text_para'>dedicated to academic excellence,character formation,and the empowerment of women.</p>
        <div className="abt_sec_para_wrapper">
        <h2 className='abt_big_dis'>Guided by the ideals of knowledge, discipline,and empowerment,  <span className='abt_big_dis_hlg'>  to promote academic excellence and holistic development among young women.</span> The institution firmly believes that education is a powerful tool for personal growth and social transformation</h2>
        <h2 className='abt_big_dis'>Through its commitment to quality higher education, the college aims to nurture responsible citizens who contribute meaningfully to society.</h2>
    

        <div className="abt_cta_wrapper">
      <h4 className="abt_cta_text_field"> see more</h4>
      <ArrowRight className="abt_cta_icon"/>
      </div>

      </div>
      </div>
     
      
     
 


    </div>
  )
}

export default AboutSection
