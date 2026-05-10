// import React from 'react'
import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "phosphor-react";



import imgone from '../../assets/artsandscience.webp';
import imgtwo from '../../assets/Physiotherapycollege.webp';
import imgfour from '../../assets/nursingcollege.webp';
import imgthree from '../../assets/collegeofeducation.webp';

import './ourinstitution.css'
const OurInstitutions = () => {
  gsap.registerPlugin(ScrollTrigger);
  const scrollRef = useRef(null);
  let timeoutRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
  
    // =========================
    // AUTO SCROLL (your logic)
    // =========================
    const handleScroll = () => {
      clearTimeout(timeoutRef.current);
  
      timeoutRef.current = setTimeout(() => {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }, 6500);
    };
  
    container.addEventListener("scroll", handleScroll);
  
    // =========================
    // GSAP SCROLL-BASED ANIMATION
    // =========================
  
    // 👉 Timeline for LHS
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".lhs_OurInstitution_wrapper",
        start: "top 80%",
        end: "top 30%",
        scrub: true, // 🔥 THIS is the key
      },
    });
  
    tl.from(".lhs_institution_title", {
      y: 60,
      opacity: 0,
      ease: "none",
    })
    .from(".int_lhs_para", {
      y: 60,
      opacity: 0,
      stagger: 0.2,
      ease: "none",
    }, "-=0.2");
  
  
    // 👉 Cards animation (scroll controlled)
    gsap.from(".int_card_container", {
      y: 80,
      opacity: 0,
      stagger: 0.2,
      ease: "none",
      scrollTrigger: {
        trigger: ".int_cards_wrapper",
        start: "top 85%",
        end: "top 20%",
        scrub: true, // 🔥 forward + reverse
      },
    });
  
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const container = scrollRef.current;

    const handleScroll = () => {
      // Clear previous timer
      clearTimeout(timeoutRef.current);

      // Restart timer after user stops scrolling
      timeoutRef.current = setTimeout(() => {
        container.scrollTo({
          left: 0, // 👈 scroll back to start
          behavior: 'smooth'
        });
      }, 6500); // ⏱ delay (1.5 sec)
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (

    <div className="OurInstitution_scroll" ref={scrollRef}>

<div className='OurInstitution_container'>

{/* lhs  */}
<div className="lhs_OurInstitution_wrapper">
  <h1 className='lhs_institution_title'>our institution</h1>
  <div className="int_para_wrapper">
    <p className='int_lhs_para'>Each institution under our group focuses on nurturing talent, building strong </p>
    <p  className='int_lhs_para'>preparing students to contribute meaningfully to society</p>

  </div>
  <div className="int_cta_wrapper">
    <h3 className='int_cta_text'>swipe right</h3>
    <ArrowRight />
  </div>
</div>


{/* rhs */}

<div className="rhs_OurInstitution_wrapper">
<div className="int_cards_wrapper">

{/* cards */}
<div className="int_card_container">
<div className="int_img_wrapper">

<img className='int_img_field' src={imgone} alt="My Image" />
</div>
{/* card text field */}
<div className="int_text_fields">
  <h3 className='int_title_text'>Arts and Science College for Women</h3>
  <p className='int_para_text'>Empowering Women Through Education</p>

</div>
</div>

<div className="int_card_container">
<div className="int_img_wrapper">
<img className='int_img_field' src={imgtwo} alt="My Image" />
</div>
{/* card text field */}
<div className="int_text_fields">
  <h3 className='int_title_text'>college of physiotherapy </h3>
  <p className='int_para_text'>Restoring Health, Improving Lives</p>

</div>
</div>

<div className="int_card_container">
<div className="int_img_wrapper">
<img className='int_img_field' src={imgthree} alt="My Image" />
</div>
{/* card text field */}
<div className="int_text_fields">
  <h3 className='int_title_text'>college of education</h3>
  <p className='int_para_text'>Shaping Future Educators with Knowledge and Values</p>

</div>
</div>

<div className="int_card_container">
<div className="int_img_wrapper">
<img className='int_img_field' src={imgfour} alt="My Image" />
</div>
{/* card text field */}
<div className="int_text_fields">
  <h3 className='int_title_text'>college of nursing</h3>
  <p className='int_para_text'>Care, Compassion, and Commitment to Health</p>

</div>
</div>

</div>
</div>

</div>
    </div>
  
  )
}

export default OurInstitutions