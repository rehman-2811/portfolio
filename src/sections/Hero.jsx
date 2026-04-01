import React from 'react'
import '../sections/section.css'
import { motion } from 'framer-motion'
import { ReactTyped } from 'react-typed'
import profile from "../assets/images/my_pic.jpeg"

function Hero() {
    return (

        <section className='bg-black text-white aligh-items-center py-5 d-flex' style={{ minHeight: "90vh" }}>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6 text-center text-md-start'>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1  }}
                        >
                            <h1 className='display-4 fw-bold'>
                                Hi I'm  <span className='text-warning-emphasis'>Abdul</span> <span className='text-warning'>Rehman</span>
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
                            <div className='mt-3'>
                                <a href="/abdul.pdf"
                                download="abdul.pdf"
                                >
                                    <button type="button" className='btn btn-outline-warning px-5 py-2 mt-4'> Download CV</button>
                                </a>
                            </div>

                        </motion.div>
                    </div>
                    <div className='col-md-6 text-center mt-5 mt-md-0'>

                        <motion.img
                            src={profile}
                            alt='profile'
                            className='img-fluid rounded-circle shadow-lg '
                            style={{ height: "400px", width: "400px", objectFit: "cover", border: "4px solid #ffc107" }}


                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}

                            whileHover={{ scale: 1.05 }}

                        />

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero
