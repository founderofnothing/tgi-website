import React from 'react'
import {ArrowRight,ArrowLeft} from "phosphor-react";

import "./ourinstitution.css"

const OurInstitutions = () => {
  return (
    <div className='OurInstitution_container'>
      <div className="our_int_cards_wrapper">
      <div className="our_int_card">
      <h1 className='OurInstitution_header_title'>our institution</h1>
      <div className="OurInstitution_cards_textfield_wrapper">
        <h3 className='our_int_card_title' >college of physiotherapy</h3>
        <h6 className='our_int_card_dis'>The College of Physiotherapy provides quality education in physical rehabilitation and therapy. It offers both theoretical learning and practical training to help students understand patient care and recovery</h6>
      </div>

      {/* img section */}
     <div className="OurInstitution_img_section_wrapper">
      <div className="OurInstitution_img_section"></div>
      <h3 className='our_int_card_subtext'>“Restoring Health, Improving Lives”</h3>
     </div>
     <div className="our_int_cards_move_cta_wrapper">
     <ArrowLeft className="our_int_cards_icons" />
     <ArrowRight className="our_int_cards_icons" />
     </div>

      </div>


      <div className="our_int_card">
      <h1 className='OurInstitution_header_title'>our institution</h1>
      <div className="OurInstitution_cards_textfield_wrapper">
        <h3 className='our_int_card_title' >college of physiotherapy</h3>
        <h6 className='our_int_card_dis'>The College of Physiotherapy provides quality education in physical rehabilitation and therapy. It offers both theoretical learning and practical training to help students understand patient care and recovery</h6>
      </div>

      {/* img section */}
     <div className="OurInstitution_img_section_wrapper">
      <div className="OurInstitution_img_section"></div>
      <h3 className='our_int_card_subtext'>“Restoring Health, Improving Lives”</h3>
     </div>
     <div className="our_int_cards_move_cta_wrapper">
     <ArrowLeft className="our_int_cards_icons" />
     <ArrowRight className="our_int_cards_icons" />
     </div>

      </div>
      </div>
      
     
    </div>
  )
}

export default OurInstitutions
