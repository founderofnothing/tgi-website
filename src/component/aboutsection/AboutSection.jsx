import React from 'react'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './aboutsection.css'
const AboutSection = () => {
  const textRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);



  useEffect(() => {
    const ctx = gsap.context(() => {
      const element = textRef.current;
  
      const wrapWords = (node) => {
        if (node.nodeType === 3) {
          const words = node.textContent.split(" ").map(word => {
            return `<span class="word">${word}</span>`;
          }).join(" ");
  
          const span = document.createElement("span");
          span.innerHTML = words;
          node.replaceWith(span);
        } else if (node.nodeType === 1) {
          node.childNodes.forEach(child => wrapWords(child));
        }
      };
  
      wrapWords(element);
  
      const words = element.querySelectorAll(".word");
  
      gsap.fromTo(words,
        {
          opacity: 0,
          y: -20,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power2.out",
          stagger: {
            each: 0.03
          },
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "top 40%",   // animation range
            scrub: 1,         // 🔥 THIS is the magic
          }
        }
      );
  
    });
  
    return () => ctx.revert();
  }, []);

  return (
    <div className='about_container'>
      <div className="abt_lhs_wrapper">
      <h3 ref={textRef} className='abt_main_header'>about </h3>

      </div>
      <div className="abt_rhs_wrapper">
      <p ref={textRef} className='abt_para_text'>
  In this great institute,
  <span className='abt_hlg_para_text'>
    students are supported by excellent resources—a dedicated faculty, a well-stocked library,modern sports facilities,
  </span>
  and diverse extracurricular opportunities
  <span className='abt_hlg_para_text'>
    ranging from entrepreneurship to community service.
  </span>
  They are given the freedom to explore and learn new subjects.
</p>
      </div>


    </div>
  )
}

export default AboutSection
