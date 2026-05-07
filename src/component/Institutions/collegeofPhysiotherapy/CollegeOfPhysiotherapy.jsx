import React, { useState } from 'react'
import { CaretDown } from "phosphor-react";
import './collegeofPhysiotherapy.css'
import collegeofPhysiotherapy from "../../../assets/physiotherapycollege.jpg"
const CollegeOfPhysiotherapy = () => {

    const [openCard, setOpenCard] = useState(null)

    const courses = [
      {
        id: 1,
        title: "B.Com CA",
        desc: "We provide a strong foundation through academic learning and practical training."
      },
      {
        id: 2,
        title: "B.Sc Nursing",
        desc: "Students are guided to develop professional skills and ethical values."
      },
      {
        id: 3,
        title: "BBA",
        desc: "Nursing is not just a profession; it is a service to humanity. At our College of Nursing, we focus on developing both professional skills and a caring attitude among our students. We provide a strong foundation through academic learning and practical training. Our goal is to prepare students who can serve society with compassion, responsibility, and confidence. I encourage every student to take pride in this noble profession and give their best in learning and service. May you all grow into dedicated healthcare professionals."
      }
    ]
  
    const handleCardToggle = (id) => {
      setOpenCard(openCard === id ? null : id)
    }

  return (
    <div className='collegeofPhysiotherapy_container'>
    <h1 className="collegeofPhysiotherapy_text_toptitle">COLLEGE OF PHYSIOTHERAPY (CO-EDUCATION) </h1>
    <div className="img_collegeofPhysiotherapy_wrapper">

    <img  className='img_collegeofPhysiotherapy_container' src={collegeofPhysiotherapy} alt="collegeofPhysiotherapy" />

    </div>
    <div className="collegeofPhysiotherapy_text_wrapper">

    <h3 className="top_collegeofPhysiotherapy_tagline">“Restoring Health, Improving Lives.” 
 </h3>
  <p  className="top_collegeofPhysiotherapy_para">The College of Physiotherapy provides quality education in physical rehabilitation and therapy. 
It offers both theoretical learning and practical training to help students understand patient care and recovery. 
  
</p>
  <p  className="top_collegeofPhysiotherapy_para">
  Students are trained to improve physical health and support individuals in leading active lives. The co-educational environment promotes equal learning opportunities and professional growth. 
   </p>
   <p  className="top_collegeofPhysiotherapy_para">
   The institution prepares students to become skilled physiotherapists with a strong sense of care and responsibility.  </p>

<h5 className="top_collegeofPhysiotherapy_prince_title">Principal's Desk </h5>
<h5 className="top_collegeofPhysiotherapy_sub_title">Dear Students, </h5>
<p className='collegeofPhysiotherapy_exp_para'>
“Healing Through Knowledge and Care.” 
Dear Students, 
Physiotherapy is a field that brings positive change in people’s lives. At our college, we focus on 
providing quality education and practical training in rehabilitation and patient care. 
We believe that dedication, patience, and skill are essential in this profession. Our aim is to guide 
students to become competent professionals who can make a real difference in society. 
I encourage you to learn with interest and commitment, and to grow both professionally and 
personally. 
Wishing you success in your journey ahead. 
</p>




    </div>

    <div className="collegeofPhysiotherapy_course_wrapper">
    {
      courses.map((course) => (

        <div
          key={course.id}
          className={`collegeofPhysiotherapy_course_card ${openCard === course.id ? "active_card" : ""}`}
          onClick={() => handleCardToggle(course.id)}
        >

          <div className="course_card_top">

            <h3 className='collegeofPhysiotherapy_course_title'>{course.title}</h3>

            <CaretDown
              size={20}
              className='cop_course_card_icons'
              // className={openCard === course.id ? "rotate_icon" : ""}
            />

          </div>

          {
            openCard === course.id && (
              <p className="course_reveal_para">
                {course.desc}
              </p>
            )
          }

        </div>

      ))
    }

     
    </div>

  </div>  
  )
}

export default CollegeOfPhysiotherapy
