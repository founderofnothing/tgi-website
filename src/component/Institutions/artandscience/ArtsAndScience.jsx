import React, { useState } from 'react'
import { CaretDown } from "phosphor-react";
// import artsandscience from "../../assets/artsandscience.jpeg";
import artsandscience from "../../../assets/artsandscience.jpeg"

import './artsandscience.css'


const ArtsAndScience = () => {

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
    <div className='artsandscience_container'>
      <h1 className="artsandscience_text_toptitle">THIRAVIUM COLLEGE OF ARTS AND SCIENCE FOR WOMEN </h1>
      <div className="img_artsandscience_wrapper">

      <img  className='img_artsandscience_container' src={artsandscience} alt="college of nursing" />

      </div>
      <div className="artsandscience_text_wrapper">

      <h3 className="top_artsandscience_tagline">“Empowering Women Through Education.” </h3>
    <p  className="top_artsandscience_para">Thiravium College of Arts and Science for Women is dedicated to empowering young women through quality higher education. The college offers a wide range of programmes that help students build strong academic knowledge and essential life skills. 
</p>
    <p  className="top_artsandscience_para">
We focus on developing confidence, communication, and leadership qualities among our students. A safe and supportive environment ensures that every student can learn, grow, and succeed. The institution aims to shape independent and responsible women ready to face the challenges of the modern world.  </p>

<h5 className="top_artsandscience_prince_title">Principal's Desk </h5>
<h5 className="top_artsandscience_sub_title">Dear Students, </h5>
<p className='artsandscience_exp_para'>
It gives me great pride to be a part of an institution that is committed to empowering young women through education. At our college, we believe that every student has the potential to achieve great things when guided in the right direction.  
</p>

<p className='artsandscience_exp_para'>
Education here is not limited to academics alone. We focus on building confidence, communication skills, and leadership qualities. Our aim is to create independent, responsible, and strong individuals who can face the world with courage. 
</p>

<p className='artsandscience_exp_para'>

I encourage all our students to make the best use of the opportunities provided and actively participate in all activities that support their growth. 

</p>

<p className='artsandscience_exp_para'>
I wish you all a successful and meaningful journey ahead. </p>


      </div>

      <div className="artsandscience_course_wrapper">
      {
        courses.map((course) => (

          <div
            key={course.id}
            className={`artsandscience_course_card ${openCard === course.id ? "active_card" : ""}`}
            onClick={() => handleCardToggle(course.id)}
          >

            <div className="course_card_top">

              <h3 className='artsandscience_course_title'>{course.title}</h3>

              <CaretDown
                size={20}
                className='ans_course_card_icons'
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

export default ArtsAndScience
