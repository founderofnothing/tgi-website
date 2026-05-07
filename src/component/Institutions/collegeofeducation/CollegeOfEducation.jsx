import React, { useState } from 'react'
import { CaretDown } from "phosphor-react";
import collegeofeducation from '../../../assets/collegeofeducation.jpg'
import './collegeofeducation.css'
const CollegeOfEducation = () => {

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


    <div className='collegeofeducation_container'>
    <h1 className="collegeofeducation_text_toptitle">COLLEGE OF EDUCATION </h1>
    <div className="img_collegeofeducation_wrapper">

    <img  className='img_collegeofeducation_container' src={collegeofeducation} alt="collegeofeducation" />

    </div>
    <div className="collegeofeducation_text_wrapper">

    <h3 className="top_collegeofeducation_tagline">Shaping Future Educators with Knowledge and Values. </h3>
  <p  className="top_collegeofeducation_para">The College of Education prepares students to become skilled and dedicated teachers. It focuses on modern teaching methods, practical training, and classroom management skills.  
</p>
  <p  className="top_collegeofeducation_para">
  Students are trained to inspire young minds and contribute to society through education. The institution builds strong professional values and a passion for lifelong learning. It aims to 
produce competent educators who can make a positive difference in the field of education. </p>

<h5 className="top_collegeofeducation_prince_title">Principal's Desk </h5>
<h5 className="top_collegeofeducation_sub_title">Dear Students, </h5>
<p className='collegeofeducation_exp_para'>
Education is the foundation of a progressive society, and teachers play a vital role in shaping the future. At our College of Education, we are dedicated to preparing skilled, committed, and passionate educators. 

</p>

<p className='collegeofeducation_exp_para'>
We believe that a good teacher not only teaches but also inspires and guides. Through practical training and modern teaching methods, we help our students become confident professionals.</p>

<p className='collegeofeducation_exp_para'>

I encourage all our students to make the best use of the opportunities provided and actively participate in all activities that support their growth. 

</p>

<p className='collegeofeducation_exp_para'>
Wishing you success in your noble journey as educators.  </p>


    </div>

    <div className="collegeofeducation_course_wrapper">
    {
      courses.map((course) => (

        <div
          key={course.id}
          className={`collegeofeducation_course_card ${openCard === course.id ? "active_card" : ""}`}
          onClick={() => handleCardToggle(course.id)}
        >

          <div className="course_card_top">

            <h3 className='collegeofeducation_course_title'>{course.title}</h3>

            <CaretDown
              size={20}
              className='coe_course_card_icons'
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

export default CollegeOfEducation
