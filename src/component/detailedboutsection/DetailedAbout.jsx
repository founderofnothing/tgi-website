import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './detailedabout.css'
import {CaretRight} from "phosphor-react";

// img 
import Secretary  from "../../assets/Secretary.jpeg";
import Chairman  from "../../assets/director.jpg";
import Director  from "../../assets/chairman.jpeg";





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
Thiravium College of Arts and Science for Women is dedicated to empowering young women through quality education. The college focuses on academic excellence, discipline, and overall personal development. It believes education is a powerful tool for growth and social change, helping students become responsible and confident individuals.
</p>


<p  className='DetailedAbout_text_field'>

 Since its establishment in Kailasapatti, Theni, the institution has supported women in building strong intellectual, social, and moral foundations. It creates a learning environment that encourages skill development, confidence, and lifelong learning.

</p>

<p  className='DetailedAbout_text_field'>
 The college emblem represents knowledge, integrity, and service. It reflects the institution’s commitment to shaping educated women who contribute positively to society with dignity and responsibility.

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
  </div>
    </div>


    
  </div>
</div>

    </div>
  )
}

export default DetailedAbout


