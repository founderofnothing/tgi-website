import React, { useState } from 'react'
import './NursingInstitutionLister.css'
// import nursingcollege from "../../assets/nursingcollege.jpg";
import nursingcollege from "../../assets/nursingcollege.webp";
import { CaretDown } from "phosphor-react";



const NursingInstitutionLister = () => {
 
  const [openCard, setOpenCard] = useState(null)

  const courses = [
    // {
    //   id: 1,
    //   title: "B.Com CA",
    //   desc: "We provide a strong foundation through academic learning and practical training."
    // },
    // {
    //   id: 2,
    //   title: "B.Sc Nursing",
    //   desc: "Students are guided to develop professional skills and ethical values."
    // },
    // {
    //   id: 3,
    //   title: "BBA",
    //   desc: "Nursing is not just a profession; it is a service to humanity. At our College of Nursing, we focus on developing both professional skills and a caring attitude among our students. We provide a strong foundation through academic learning and practical training. Our goal is to prepare students who can serve society with compassion, responsibility, and confidence. I encourage every student to take pride in this noble profession and give their best in learning and service. May you all grow into dedicated healthcare professionals."
    // }
  ]

  const handleCardToggle = (id) => {
    setOpenCard(openCard === id ? null : id)
  }
 
  return (
    <div className='NursingInstitutionLister_container'>
      <h1 className="NursingInstitutionLister_text_toptitle">college of nursing</h1>
      <div className="img_NursingInstitutionLister_wrapper">

      <img  className='img_NursingInstitutionLister_container' src={nursingcollege} alt="college of nursing" />

      </div>
      <div className="NursingInstitutionLister_text_wrapper">

      <h3 className="top_NursingInstitutionLister_tagline">Care, Compassion, and Commitment to Health</h3>
    <p  className="top_NursingInstitutionLister_para">The College of Nursing is committed to training students in the field of healthcare with a strong focus on compassion and service. The programmes combine theoretical knowledge with practical clinical experience. </p>
    <p  className="top_NursingInstitutionLister_para">Students are guided to develop professional skills and ethical values required in the medical 
field. The institution aims to produce qualified nurses who can serve society with care, 
dedication, and responsibility. </p>

<h5 className="top_NursingInstitutionLister_prince_title">Principal's Desk </h5>
<h5 className="top_NursingInstitutionLister_sub_title">Dear Students, </h5>
<p className='NursingInstitutionLister_exp_para'>
Nursing is not just a profession; it is a service to humanity. At our College of Nursing, we focus 
on developing both professional skills and a caring attitude among our students. 
We provide a strong foundation through academic learning and practical training. Our goal is to 
prepare students who can serve society with compassion, responsibility, and confidence. 
I encourage every student to take pride in this noble profession and give their best in learning 
and service. 
May you all grow into dedicated healthcare professionals. 
</p>



      </div>

      <div className="NursingInstitutionLister_course_wrapper">
      {
        courses.map((course) => (

          <div
            key={course.id}
            className={`nursing_course_card ${openCard === course.id ? "active_card" : ""}`}
            onClick={() => handleCardToggle(course.id)}
          >

            <div className="course_card_top">

              <h3 className='NursingInstitutionLister_course_title'>{course.title}</h3>

              <CaretDown
                size={20}
                className='nrs_course_card_icons'
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

export default NursingInstitutionLister
