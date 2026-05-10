import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './detailedabout.css'
import {CaretRight} from "phosphor-react";

// img 


import Secretary from"../../assets/Secretary.webp";
import Director  from"../../assets/Director.jpg";
import Chairman from "../../assets/chairman.webp"



const DetailedAbout = () => {
gsap.registerPlugin(ScrollTrigger);


useEffect(() => {

  gsap.from(".DetailedAbout_mng_card", {
    x: 120,
    opacity: 0,
    scale: 0.95,
    stagger: 0.25,
    ease: "none",

    scrollTrigger: {
      trigger: ".DetailedAbout_mng_cards",
      start: "top 85%",
      end: "top 30%",
      scrub: 1,
    }
  });

}, []);


  return (
    <div className='DetailedAbout_container'>
      <h3 className='DetailedAbout_container_header'> about us</h3>

<p className='DetailedAbout_text_field'>
Guided by the ideals of knowledge, discipline, and empowerment, Thiravium College of Arts and Science for Women strives to promote academic excellence and holistic development among young women. The institution firmly believes that education is a powerful tool for personal growth and social transformation. Through its commitment to quality higher education, the college aims to nurture responsible citizens who contribute meaningfully to society. 
</p>

<p className='DetailedAbout_text_field'>
Since its establishment, Thiravium College of Arts and Science for Women, Kailasapatti, Theni, has been dedicated to empowering women through education. The institution has played a significant role in shaping the lives of many students by providing them with opportunities to develop intellectually, socially, and morally. By fostering a culture of discipline, dedication, and lifelong learning, the college continues to create graduates who are confident, skilled, and socially responsible. 
</p>


<p className='DetailedAbout_text_field'>
The college emblem symbolizes the ideals and aspirations of the institution. It represents the pursuit of knowledge, integrity, and service to society. The elements in the emblem reflect the values of wisdom, enlightenment, and empowerment, which guide the academic and cultural life of the college. Through its emblem and motto, the institution reaffirms its commitment to nurturing educated women who will serve society with dignity and responsibility. 

</p>

{/* our inst */}

<h3 className='DetailedAbout_container_header'> OUR INSTITUTIONS </h3>


<p className='DetailedAbout_text_field'>
Thiravium Group of Institutions is a trusted centre of learning with over 30 years of excellence in education. The group is committed to providing quality education across multiple disciplines, ensuring that students receive both knowledge and practical skills for their future. 

</p>

<p className='DetailedAbout_text_field'>
Our institutions are designed to meet the needs of today’s world, offering opportunities for academic growth, professional development, and personal transformation. With experienced faculty, modern facilities, and a student-friendly environment, we guide learners to achieve their goals with confidence. 
</p>



<div className="DetailedAbout_managment_person_container">
  <div className="DetailedAbout_mng_cards">
    <div className="DetailedAbout_mng_card">
      <div className="lhs_DetailedAbout_mng_field">
      <div className="lhs_detailedabout_img_wrapper">
      <img className='lhs_detail_aboutsection_img_field' src={Chairman} alt="My Image" />
</div>
<div className="mid_detailAbout_text_fields">
  <h3 className='mid_detailAbout_title_text'>Dr. T. Pandiaraj </h3>
  <h5  className='mid_detailAbout_title_para'>Chairman</h5>
</div>
      </div>

     
      <div className="detailedaboutarrow_container">
      <CaretRight />
      </div>

      <div className="hover_card">
    <p className='detailedabout_hover_textfield'> I strongly believe that, over the years, this institution will grow into a centre of excellence in knowledge and learning. It will not only serve the educational needs of students but also stand as 
a pioneer in setting high academic standards across the state. </p>
<p className='detailedabout_hover_textfield'> by Dr. T. Pandiaraj </p>
  </div>
    </div>

    <div className="DetailedAbout_mng_card">
      <div className="lhs_DetailedAbout_mng_field">
      <div className="lhs_detailedabout_img_wrapper">
      <img className='lhs_detail_aboutsection_img_field' src={Secretary} alt="My Image" />

</div>
<div className="mid_detailAbout_text_fields">
  <h3  className='mid_detailAbout_title_text'>Dr. Hemalatha Pandiaraj </h3>
  <h5  className='mid_detailAbout_title_para'>Secretary</h5>
</div>
      </div>

     
      <div className="detailedaboutarrow_container">
      <CaretRight />
      </div>
      <div className="hover_card">
    <p className='detailedabout_hover_textfield'> It gives me great joy to see our students succeed and proudly acknowledge the role of our institution in their achievements. Their growth and accomplishments inspire us to continue our journey with greater commitment and dedication.  </p>
    <p className='detailedabout_hover_textfield'>by Dr. Hemalatha Pandiaraj </p>
  </div>
    </div>

    <div className="DetailedAbout_mng_card">
      <div className="lhs_DetailedAbout_mng_field">
      <div className="lhs_detailedabout_img_wrapper">
      <img className='lhs_detail_aboutsection_img_field' src={Director} alt="My Image" />
</div>
<div className="mid_detailAbout_text_fields">
  <h3  className='mid_detailAbout_title_text'>Dr. P. Immanuel Judah </h3>
  <h5  className='mid_detailAbout_title_para'>Director</h5>
</div>
      </div>

     
      <div className="detailedaboutarrow_container">
      <CaretRight />
      </div>
      <div className="hover_card">
    <p className='detailedabout_hover_textfield'> We are dedicated to creating a learning environment that encourages curiosity, innovation, and excellence. Every student who joins us is guided to discover their potential and grow into a responsible and capable individual. </p>
    <p className='detailedabout_hover_textfield'>Dr. P. Immanuel Judah </p>
  </div>
    </div>


    
  </div>
</div>

    </div>
  )
}

export default DetailedAbout


