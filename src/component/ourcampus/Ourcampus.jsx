import React from 'react'
import './ourcampus.css'
import { ArrowRight } from "phosphor-react";

const Ourcampus = () => {
  return (
    <div className='ourcampus_container'>
        <div className="campus_layout_">
        <div className="lhs_our_campus_wrapper">
        <h1  className="ourcampus_title_text">our campus</h1>
        <h2  className="ourcampus_dis_text_field">Thiravium Group of Institutions offers a vibrant and student-friendly campus designed to support academic excellence and personal growth. With over 30 years of educational experience, we provide a space where students feel motivated, safe, and confident.</h2>
     </div>
     <div className="rhs_our_campus_wrapper">
    <p className="rhs_our_campus_para">Our campus brings together multiple disciplines under one roof focuses on building knowledge, skills, and values for a successful future.</p>

<div className="our_campus_cta_wrapper">
    <h2 className='our_campus_cta_title'>see more</h2>
    <div className="our_campus_ar_wrapper">
<ArrowRight className="our_campus_ar_icons"/>
    </div>
</div>

     </div>
        </div>
    
     <div className="img_wrapper_our_campus">
        {/* img */}
     </div>
    </div>
  )
}

export default Ourcampus
