import { motion } from "framer-motion";
import '../sections/section.css'

// FRONTEND SKILLS
const frontendSkills = [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Bootstrap", level: 80 },
    { name: "gsap", level: 40 },
];

// BACKEND SKILLS
const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 80 },
    { name: "Prisma", level: 75 },
    { name: "MongoDb", level: 70 },
];

const Skills = () => {
    return (
        <section
            className="py-5"
            style={{
                
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div className="container">
                <h2 className="text-center text-warning fw-bold mb-5">
                    Skills & Expertise
                </h2>

                <div className="row">

                    {/* FRONTEND */}
                    <div className="col-md-6 mb-4">
                        <motion.div
                            className="p-4 rounded shadow-lg"
                            style={{
                                background: "rgba(255,255,255,0.08)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(255,255,255,0.2)",
                                color: "#fff",
                            }}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            whileHover={{ scale: 1.07 }}
                        >
                            <h4 className="mb-4 text-warning">Frontend</h4>

                            {frontendSkills.map((skill, index) => (
                                <div key={index} className="mb-3">
                                    <div className="d-flex justify-content-between">
                                        <span>{skill.name}</span>
                                        <span>{skill.level}%</span>
                                    </div>

                                    <div className="progress" style={{ height: "8px" }}>
                                        <motion.div
                                            className="progress-bar bg-warning"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: index * 0.2 }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* BACKEND */}
                    <div className="col-md-6">
                        <motion.div
                            className="p-4 rounded shadow-lg"
                            style={{
                                background: "rgba(255,255,255,0.08)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(255,255,255,0.2)",
                                color: "#fff",
                            }}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            whileHover={{ scale: 1.07 }}
                        >
                            <h4 className="mb-4 text-info">Backend</h4>

                            {backendSkills.map((skill, index) => (
                                <div key={index} className="mb-3">
                                    <div className="d-flex justify-content-between">
                                        <span>{skill.name}</span>
                                        <span>{skill.level}%</span>
                                    </div>

                                    <div className="progress" style={{ height: "8px" }}>
                                        <motion.div
                                            className="progress-bar bg-info"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: index * 0.2 }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;