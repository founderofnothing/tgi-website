// import React from 'react'
import { useEffect ,useState } from "react";
import gsap from "gsap";
import { ArrowRight } from "phosphor-react";
import './herosection.css'

import herosectionimg from "../../assets/artsandscience.webp"





const HeroSection = () => {

  


    // INSTITUTION API DATA
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [institutions, setInstitutions] = useState([]);

    // COURSE LIST BASED ON SELECTED INSTITUTION
    const [courses, setCourses] = useState([]);
  
    // LOADING STATE
    const [loading, setLoading] = useState(true);



    useEffect(() => {

      if (isPopupOpen) {
    
        document.body.style.overflow = "hidden";
    
      } else {
    
        document.body.style.overflow = "auto";
    
      }
    
      return () => {
        document.body.style.overflow = "auto";
      };
    
    }, [isPopupOpen]);
  
    // FORM DATA
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      mobile: "",
      state: "",
      city: "",
      institution: "",
      course: "",
    });
  
  
  
    // FETCH INSTITUTION + COURSE DATA
    useEffect(() => {
  
      const fetchInstitutions = async () => {
  
        try {
  
          const response = await fetch(
            "https://admin.thiraviumgroupofinstitution.com/wp-json/tgi/v1/institutions"
          );
  
          const data = await response.json();
  
          setInstitutions(data);
  
        } catch (error) {
  
          console.log(error);
  
        } finally {
  
          setLoading(false);
  
        }
      };
  
      fetchInstitutions();
  
    }, []);
  
  
  
  
    // HANDLE INPUT CHANGE
    const handleChange = (e) => {
  
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
  
    };
  
  
  
  
    // HANDLE INSTITUTION CHANGE
    const handleInstitutionChange = (e) => {
  
      const selectedInstitutionName = e.target.value;
  
      // UPDATE FORM
      setFormData({
        ...formData,
        institution: selectedInstitutionName,
        course: "",
      });
  
      // FIND MATCHING INSTITUTION
      const selectedInstitution = institutions.find(
        (institution) =>
          institution.institution_name === selectedInstitutionName
      );
  
      // SET COURSES
      if (selectedInstitution) {
  
        setCourses(selectedInstitution.courses);
  
      } else {
  
        setCourses([]);
  
      }
  
    };
  
  
  
  
    // HANDLE FORM SUBMIT
    const handleSubmit = async (e) => {
  
      e.preventDefault();
  
      try {
  
        const response = await fetch(
          "https://admin.thiraviumgroupofinstitution.com/wp-json/tgi/v1/admission",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
  
        const data = await response.json();
  
        console.log(data);
  
        if (data.success) {
  
          alert("Admission Submitted Successfully");
  
          // RESET FORM
          setFormData({
            name: "",
            email: "",
            mobile: "",
            state: "",
            city: "",
            institution: "",
            course: "",
          });
  
          setCourses([]);
  
        }
  
      } catch (error) {
  
        console.log(error);
  
      }
  
    };


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

{
  isPopupOpen && (

    <div
      className="admission_popup_overlay"
      onClick={() => setIsPopupOpen(false)}
    >

      <div
        className="admission_form_container"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="close_popup_btn"
          onClick={() => setIsPopupOpen(false)}
        >
          ✕
        </button>

        <h1 className="add_form_title_text">Admission Form</h1>

        <form className="admission_form_wrapper" onSubmit={handleSubmit}>

          {/* NAME */}
          <input
            type="text"
            name="name"
            className="popup_text_area"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            className="popup_text_area"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* MOBILE */}
          <input
            type="text"
            name="mobile"
            className="popup_text_area"
            placeholder="Enter Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          {/* STATE */}
          <input
            type="text"
            name="state"
            className="popup_text_area"
            placeholder="Enter State"
            value={formData.state}
            onChange={handleChange}
          />

          {/* CITY */}
          <input
            type="text"
            name="city"
            className="popup_text_area"
            placeholder="Enter City"
            value={formData.city}
            onChange={handleChange}
          />

          {/* INSTITUTION */}
          <select
            value={formData.institution}
            onChange={handleInstitutionChange}
            required
            className="popup_text_area"
          >

            <option value="">
              Select Institution
            </option>

            {loading ? (

              <option>
                
                Loading Institutions...
              </option>

            ) : (

              institutions.map((institution) => (

                <option
                  key={institution.id}
                  value={institution.institution_name}
                >
                  {institution.institution_name}
                </option>

              ))

            )}

          </select>

          {/* COURSE */}
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="popup_text_area"
          >

            <option value="">
              Select Course
            </option>

            {courses.map((course) => (

              <option
                key={course.id}
                value={course.title}
              >
                {course.title}
              </option>

            ))}

          </select>

          <h3 className="add_form_cta" type="submit">
            Submit Admission
          </h3>

        </form>

      </div>

    </div>

  )
}

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

  <div   className="img_wrapper"
  style={{
    backgroundImage: `url(${herosectionimg})`,
  }}>
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
  {/* <div className="cta_wrapper">
    <div className="prm_cta_wrapper">
      <h2 className='prm_cta_text'>admission</h2>
    </div>
    <div className="rhs_prm_cta_wrapper">
    <ArrowRight className='prm_cta_icon' />

    </div>

  </div> */}
  <div
  className="cta_wrapper"
  onClick={() => setIsPopupOpen(true)}
>
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


// <div className="admission_form_container">

// <h1>Admission Form</h1>

// <form onSubmit={handleSubmit}>

//   {/* NAME */}
//   <input
//     type="text"
//     name="name"
//     placeholder="Enter Name"
//     value={formData.name}
//     onChange={handleChange}
//     required
//   />



//   {/* EMAIL */}
//   <input
//     type="email"
//     name="email"
//     placeholder="Enter Email"
//     value={formData.email}
//     onChange={handleChange}
//     required
//   />



//   {/* MOBILE */}
//   <input
//     type="text"
//     name="mobile"
//     placeholder="Enter Mobile Number"
//     value={formData.mobile}
//     onChange={handleChange}
//     required
//   />



//   {/* STATE */}
//   <input
//     type="text"
//     name="state"
//     placeholder="Enter State"
//     value={formData.state}
//     onChange={handleChange}
//   />



//   {/* CITY */}
//   <input
//     type="text"
//     name="city"
//     placeholder="Enter City"
//     value={formData.city}
//     onChange={handleChange}
//   />



//   {/* INSTITUTION SELECT */}
//   <select
//     value={formData.institution}
//     onChange={handleInstitutionChange}
//     required
//   >

//     <option value="">
//       Select Institution
//     </option>

//     {loading ? (

//       <option>
//         Loading Institutions...
//       </option>

//     ) : (

//       institutions.map((institution) => (

//         <option
//           key={institution.id}
//           value={institution.institution_name}
//         >
//           {institution.institution_name}
//         </option>

//       ))

//     )}

//   </select>




//   {/* COURSE SELECT */}
//   <select
//     name="course"
//     value={formData.course}
//     onChange={handleChange}
//     required
//   >

//     <option value="">
//       Select Course
//     </option>

//     {courses.map((course) => (

//       <option
//         key={course.id}
//         value={course.title}
//       >
//         {course.title}
//       </option>

//     ))}

//   </select>




//   {/* SUBMIT BUTTON */}
//   <button type="submit">
//     Submit Admission
//   </button>

// </form>

// </div>