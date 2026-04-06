import React from 'react'
import { motion, scale } from 'framer-motion';
import '../sections/section.css'
import profile from "../assets/images/my_pic_2.jpeg"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const About = () => {

    useGSAP(() => {

        const img = document.querySelector(".about-img");
        const txt = document.querySelector(".about-title");

        txt.addEventListener("mouseenter", () => {
            gsap.to(txt, {
                duration: 0.8,
                ease: "power2.out",
                textShadow: `
  
                0 0 10px #f09401,
  
                0 0 20px #fffb00,
  
              0 0 40px #ed0d5c
`


            });
        });
        txt.addEventListener("mouseleave", () => {
            gsap.to(txt, {
                ease: "power2.out",
                textShadow: "none"
            });
        });



        img.addEventListener("mouseenter", () => {
            gsap.to(img, {
                scale: 1.08,
                duration: 0.8,
                ease: "power2.out",
                boxShadow: `
  
                0 0 10px #f89d0b,
  
                0 0 20px #ffbf00,
  
              0 0 40px #ffbf00
`


            });
        });
        img.addEventListener("mouseleave", () => {
            gsap.to(img, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
                boxShadow: "none"
            });
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".about",
                start: "top 100%", // jab top of .about viewport ke 80% par aaye
                toggleActions: "restart none restart none",
                markers: false
            }
        });

        // Image (timeline me add karo)
        tl.from(".about-img", {
            x: -90,
            opacity: 0,  // start invisible
            duration: 1,
            ease: "power2.out",
            rotationX: "+=360"
        }, "<0.5");

        // Title
        tl.from(".about-title", {
            x: 50,
            opacity: 0,
            duration: 2,
            ease: "power2.out",
            color: "#e47e0a",

        }, "<0.5");

        // Subtitle
        tl.from(".about-subtitle", {
            x: 50,
            opacity: 0,
            duration: 2.5,
            ease: "power2.out",
            color: "#ffffff"
        }, "<0.5");

        // Cards
        tl.from(".sk_card", {
            x: 50,
            opacity: 0,
            duration: 3,
            rotationX: "+=180",
            stagger: 0.2,
            ease: "power2.out",
        }, "<0.8");



    });

    return (
        <section className=' py-5 about'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6 text-center mb-4 md-mb-0 '>
                        <img
                            src={profile}
                            alt='about'
                            className='img-fluid rounded-pill mt-4 about-img'
                            style={{ height: "450px", width: "400px" }}

                        />


                    </div>

                    <div className='col-md-6 text-white'>
                        <div

                        >
                            <h2 className='fw-bold mb-3 about-title'>About Me</h2>

                            <p className='text-warning about-subtitle'>I am a passionate Full Stack Developer with experience in building
                                modern web applications using React, Node.js, and databases.
                                I love creating clean and user-friendly interfaces.</p>

                            <p className='text-warning about-subtitle'>My journey in web development started with a curiosity about how websites work, and it has evolved into a deep passion for creating beautiful, functional, and user-friendly applications. I constantly learn and adapt to new technologies to deliver the best solutions</p>

                            <div className='row mt-4'>
                                <div className='col-6 col-md-4 mb-3'>
                                    <div className='card text-center shadow-sm p-3 sk_card'>
                                        React
                                    </div>
                                </div>

                                <div className='col-6 col-md-4 mb-3'>
                                    <div className='card text-center shadow-sm p-3 sk_card'>
                                        Node.js
                                    </div>
                                </div>
                                <div className='col-6 col-md-4 mb-3'>
                                    <div className='card text-center shadow-sm p-3 sk_card'>
                                        Express.js
                                    </div>
                                </div>
                                <div className='col-6 col-md-4 mb-3'>
                                    <div className='card text-center shadow-sm p-3 sk_card'>
                                        Javascript
                                    </div>
                                </div>
                                <div className='col-6 col-md-4 mb-3'>
                                    <div className='card text-center shadow-sm p-3 sk_card'>
                                        Prisma
                                    </div>
                                </div>
                                <div className='col-6 col-md-4 mb-3'>
                                    <div className='card text-center shadow-sm p-3 sk_card'>
                                        Mongo
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default About;
