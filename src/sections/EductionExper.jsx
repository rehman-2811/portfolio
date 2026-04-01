import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

// EDUCATION DATA
const educationData = [
    {
        Degree: "Bachelor of Science in Information Technology",
        school: "University of the Punjab",
        Year: "2022-2026",
        Description: "Specialized in Full Stack Development, Data Structures, and Web Technologies."
    },
    {
        Degree: "Intermediate",
        school: "Apex Group of Colleges",
        Year: "2020-2021",
        Description: "Focus on computer and Mathematics for further development"
    },
    {
        Degree: "Matriculation",
        school: "Govt.Boys high school",
        Year: "2017-2019",
        Description: "Focus on personal growth and upcoming challenges.."
    }
]


const experienceData = [
    {
        role: "Full Stack Developer Intern",
        company: "MH Technologies",
        year: "continue..",
        description: "Developed full-stack features using React and Node.js in a real-world project."
    },
]
const EducationExperience = () => {
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "#0f172a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* FLOATING SHAPES */}
      <motion.div
        className="position-absolute"
        style={{
          width: "200px",
          height: "200px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "50%",
          top: "10%",
          left: "5%",
          zIndex: 0,
        }}
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="position-absolute"
        style={{
          width: "150px",
          height: "150px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "50%",
          bottom: "10%",
          right: "5%",
          zIndex: 0,
        }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row">

          {/* EDUCATION */}
          <div className="col-md-6 mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="fw-bold mb-4 text-white">Education</h2>

              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  className="mb-4 p-4 rounded shadow-lg"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "#fff",
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <h5 className="fw-bold d-flex gap-2">
                    <FaGraduationCap className="text-warning" />
                    {edu.Degree}
                  </h5>

                 <div className="d-flex mt-3 justify-content-between">
                   <p className="mb-1">{edu.school}</p>
                  <small className="text-light ">{edu.Year}</small>

                 </div>
                  <p className="mt-2">{edu.Description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* EXPERIENCE */}
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="fw-bold mb-4 text-white">Experience</h2>

              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  className="mb-4 p-4 rounded shadow-lg"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "#fff",
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <h5 className="fw-bold d-flex align-items-center gap-2">
                    <FaBriefcase className="text-info" />
                    {exp.role}
                  </h5>

                  <p className="mb-1">{exp.company}</p>
                  <small className="text-light">{exp.year}</small>
                  <p className="mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationExperience;