import React from 'react'
import { useEffect } from "react";
import gsap from "gsap";
import { ArrowRight } from "phosphor-react";
import './herosection.css'






const HeroSection = () => {


  useEffect(() => {

    const tl = gsap.timeline();
  
    // 👉 Title (main animation)
    tl.from(".hero_section_maintag", {
      y: 40,
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power3.out",
    });
  
    // 👉 Paragraph
    tl.from(".herosection_para_field", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.5"); // overlap for smooth feel
  
    // 👉 Image
    tl.from(".img_wrapper", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.4");
  
  }, []);

  return (


<div className="hero_section_container">

<div className="hero_section_text_wrapper">
       <div className="hero_section_main_wrapper">

       <h1 className='hero_section_maintag'>
      The goal of  <span className='herosection_maintag_hlg'> true education </span>is a holistic  development
       </h1>

       </div>
      <div className="hero_section_sec_main_wrapper">
       <p className='herosection_para_field'>We believe in balanced learning that blends knowledge, skills, ethics, and creativity.</p>

      </div>
      

       </div>

{/* NEW WRAPPER */}
<div className="hero_visual_wrapper">

  <div className="img_wrapper">
  <svg width="0" height="0">

{/* <!-- Desktop --> */}
<clipPath id="myClip" clipPathUnits="objectBoundingBox">
  <path d="M 0 0 
  L 1 0 
  L 1 1 
  L 0.38 1 
  Q 0.36 1 0.36 0.92 
  Q 0.36 0.8 0.30 0.8 
  L 0.34 0.8 
  L 0 0.8
   Z"/>
</clipPath>

{/* <!-- Tablet --> */}
<clipPath id="clipTablet" clipPathUnits="objectBoundingBox">
  <path d="
  M 0 0
  L 1 0
  L 1 1

  L 0.40 1
  Q 0.36 1 0.36 0.92
  Q 0.36 0.86 0.32 0.82

  L 0.05 0.82
  Q 0.01 0.82 0 0.79

  Z"/>
</clipPath>

{/* <!-- Mobile --> */}
<clipPath id="clipLargeMobile" clipPathUnits="objectBoundingBox">
  <path d="
  M 0 0
  L 1 0
  L 1 1
  

  L 0.42 1
  Q 0.38 1 0.38 0.92
  Q 0.38 0.86 0.34 0.83

  L 0 0.83

  Z
  "/>
</clipPath>

<clipPath id="clipMediumMobile" clipPathUnits="objectBoundingBox">
  <path d="
  M 0 0
  L 1 0
  L 1 1

  L 0.72 1
    Q 0.68 1 0.68 0.94
    Q 0.68 0.88 0.62 0.85

    L 0 0.85
  Z
  "/>
</clipPath>


<clipPath id="clipSmallMobile" clipPathUnits="objectBoundingBox">
  <path d="
  M 0 0
  L 1 0
  L 1 1

  L 0.72 1
    Q 0.68 1 0.68 0.93
    Q 0.68 0.87 0.62 0.85

    L 0 0.85

    Z
  "/>
</clipPath>

</svg>
  </div>

  {/* CTA OUTSIDE */}
  <div className="cta_wrapper">
    <div className="prm_cta_wrapper">
      <h2 className='prm_cta_text'>admission</h2>
    </div>
    <div className="rhs_prm_cta_wrapper">
    <ArrowRight className='prm_cta_icon' />

    </div>

  </div>

</div>

</div>
  )
}

export default HeroSection
