import React from 'react'
import '../sections/section.css'
import { ReactTyped } from 'react-typed'
import profile from "../assets/images/my_pic.jpeg"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger.js'

gsap.registerPlugin(ScrollTrigger);

function Hero() {



    useGSAP(() => {





        const img = document.querySelector(".hero-img");

        img.addEventListener("mouseenter", () => {
            gsap.to(img, {
                scale: 1.08,
                duration: 0.4,
                boxShadow: `0 0 10px #1aee13e8,
  
                0 0 20px #e5f909,
  
              0 0 40px #1dabf1,
              0 0 80px #ea0e99`,
            });
        });
        img.addEventListener("mouseleave", () => {
            gsap.to(img, {
                scale: 1,
                duration: 0.4,
                boxShadow: "none",
            });
        });




        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero",
                start: "top 100%", // jab top of .about viewport ke 80% par aaye
                toggleActions: "restart none restart none",
                markers: false
            }

        });

        tl.from(".hero-title", {
            x: -50,
            opacity: 0,
            duration: 2,
            ease: "power2.out"

        }, "<0.6");
        tl.from(".hero-subtitle", {
            x: -50,
            opacity: 0,
            duration: 2,
            ease: "power2.out"

        }, "<0.6");
        tl.from(".hero-btn", {
            x: -50,
            opacity: 0,
            duration: 2,
            ease: "power2.out"

        }, "<0.6");
        tl.from(".hero-blck", {
            x: -50,
            opacity: 0,
            duration: 3,
            stagger: 0.6,
            ease: "power2.out"


        }, "<0.2");




        gsap.from(".hero-img", {
            x: 90,
            opacity: 0,
            duration: 3,
            ease: "power2.out",


        })
    })



    return (

        <section className=' text-white aligh-items-center py-5 d-flex hero' style={{ minHeight: "90vh" }}>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6 text-center text-md-start'>
                        <div>
                            <h1 className='display-4 fw-bold hero-title'>
                                Hi I'm  <span className='text-warning'>Abdul</span> <span className='text-warning'>Rehman</span>
                            </h1>
                            <h2 className='mt-3'>
                                <ReactTyped
                                    strings={[
                                        "Full Stack Developer",
                                        "React Developer",
                                        "Backend Engineer",
                                    ]}
                                    typeSpeed={50}
                                    backSpeed={30}
                                    loop
                                />
                            </h2>
                            <div className='p-1 hero-subtitle '>
                                <i className='bi bi-geo-alt '><span className='fw-bold text-warning ms-1 '>Lahore, Pakistan</span></i>
                            </div>
                            <div className='mt-3 hero-btn'>
                                <a href="/abdul.pdf"
                                    download="abdul.pdf"
                                >
                                    <button type="button" className='btn btn-outline-warning px-5 py-2 mt-2 '><i className='bi bi-download '></i><span className='ms-2'>Download CV</span> </button>
                                </a>
                            </div>

                            <div className='d-flex py-2 mt-4 gap-3 '>
                                <div className=' d-flex px-5 py-2 rounded flex-column align-items-center bg-warning hero-blck'>
                                    <span>10+</span>
                                    <span>Projects</span>
                                </div>
                                <div className=' d-flex px-4 py-2 rounded flex-column align-items-center bg-warning hero-blck'>
                                    <span>1+ year</span>
                                    <span>experience</span>
                                </div>
                                <div className=' d-flex px-5 py-2 rounded flex-column align-items-center bg-warning hero-blck'>
                                    <span>10+</span>
                                    <span>clients</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-6 text-center mt-5 mt-md-0'>

                        <img
                            src={profile}
                            alt='profile'
                            className='img-fluid rounded-circle hero-img'
                            style={{ height: "400px", width: "400px", objectFit: "cover", border: "4px solid #ffc107" }}

                        />

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero
