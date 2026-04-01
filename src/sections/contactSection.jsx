import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com"

const ContactSection = () => {
    const sendEmail =(e)=>{
        e.preventDefault();
        emailjs.sendForm(
            "service_oes6uv9",
            "template_r3a1h4w",
            e.target,
            "hZXY-6y-Duq2ry5Ih"
        ).then(()=>{
             console.log("SUCCESS:", result.text);
            alert("message sent!!")
        })
        .catch((error)=>{
            console.log(error)
            alert("failed to sent")
        });
        e.target.reset();
    };
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "#0f172a",
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE SOCIALS */}
          <div className="col-md-6 mb-4 mb-md-0">

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
            >
              <h3 className="mb-4 text-warning">Get in Touch</h3>

              {/* GitHub */}
              <motion.a
                href="https://github.com/rehman-2811"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center gap-3 mb-3 text-decoration-none text-white"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <FaGithub size={25} />
                <span>GitHub</span>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/abdul-rehman-b9b510364/"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center gap-3 mb-3 text-decoration-none text-white"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <FaLinkedin size={25} />
                <span>LinkedIn</span>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:rehman.officials2821@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center gap-3 text-decoration-none text-white"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <FaEnvelope size={25} />
                <span>rehman.officials2821@gmail.com</span>
              </motion.a>
            </motion.div>

          </div>

          {/* RIGHT SIDE FORM */}
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
            >
              <h3 className="mb-4 text-warning">Send Message</h3>

              <form onSubmit={sendEmail}>
                <input
                    name="name"
                  type="text"
                  placeholder="Your Name"
                  className="form-control mb-3"
                  required
                />

                <input
                name="email"
                  type="email"
                  placeholder="Your Email"
                  className="form-control mb-3"
                  required
                />

                <textarea
                name="message"
                  placeholder="Your Message"
                  className="form-control mb-3"
                  rows="4"
                  required
                />

                <button className="btn btn-warning w-100">
                  Send Message
                </button>
              </form>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;