import React from 'react'
import { motion } from 'framer-motion';
import '../sections/section.css'
import profile from "../assets/images/my_pic_2.jpeg"
const About = () => {
    return (
        <section className='bg-dark py-5'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6 text-center mb-4 md-mb-0'>
                        <motion.img
                            src={profile}
                            alt='about'
                            className='img-fluid rounded-pill shadow mt-4 '
                            style={{ height: "450px", width: "400px" }}

                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            whileHover={{ scale: (1.07) }}

                        />


                    </div>

                    <div className='col-md-6 text-white'>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className='fw-bold mb-3'>About Me</h2>

                            <p className='text-warning'>I am a passionate Full Stack Developer with experience in building
                                modern web applications using React, Node.js, and databases.
                                I love creating clean and user-friendly interfaces.</p>

                            <p className='text-warning'>My journey in web development started with a curiosity about how websites work, and it has evolved into a deep passion for creating beautiful, functional, and user-friendly applications. I constantly learn and adapt to new technologies to deliver the best solutions</p>

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
                                        MongoDb
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default About;
