import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
    className="p-5"
      style={{
        background: "rgba(15, 23, 42, 0.95)", // dark glassy background
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255,255,255,0.2)",
        padding: "2rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating shapes */}
      <motion.div
        style={{
          position: "absolute",
          width: "15px",
          height: "15px",
          background: "#ffc107",
          borderRadius: "50%",
          top: "10%",
          left: "5%",
        }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        style={{
          position: "absolute",
          width: "10px",
          height: "10px",
          background: "#0dcaf0",
          borderRadius: "50%",
          bottom: "20%",
          right: "10%",
        }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="container d-flex justify-content-between align-items-center flex-wrap" style={{ position: "relative", zIndex: 2 }}>
        {/* Left: Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ color: "#fff", fontSize: "0.9rem" }}
        >
          &copy; {new Date().getFullYear()} <span className="fw-bold text-warning">Abdul</span> Rehman. All Rights Reserved.
        </motion.div>

        {/* Right: Social + back to top */}
        <div className="d-flex gap-3 align-items-center mt-3 mt-md-0">
          <motion.a
            href="https://github.com/rehman-2811"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2, color: "#ffc107", textShadow: "0 0 8px #ffc107" }}
            style={{ color: "#fff" }}
          >
            <FaGithub size={20} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/abdul-rehman-b9b510364/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2, color: "#0dcaf0", textShadow: "0 0 8px #0dcaf0" }}
            style={{ color: "#fff" }}
          >
            <FaLinkedin size={20} />
          </motion.a>

          <motion.a
            href="mailto:rehman.officials2821@gmail.com"
            whileHover={{ scale: 1.2, color: "#ff6b6b", textShadow: "0 0 8px #ff6b6b" }}
            style={{ color: "#fff" }}
          >
            <FaEnvelope size={20} />
          </motion.a>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.2, color: "#0ff", textShadow: "0 0 8px #0ff" }}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              color: "#fff",
            }}
          >
            <FaArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;