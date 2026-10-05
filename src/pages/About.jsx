import React from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaSchool,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "3rem 1rem",
      }}
    >
      {/* --- About Me + Experience + Education Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          marginTop: "1rem",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.04)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* --- Description --- */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
          }}
        >
          Hi, I’m <strong>Lokesh Ganiga</strong> — an aspiring{" "}
          <strong>Java Full Stack Developer</strong> and{" "}
          <strong>Software Engineer</strong> who enjoys turning ideas into scalable
          applications. I’m passionate about building solutions using Java, Spring Boot,
          React.js, REST APIs, and AI technologies, with a strong interest in backend
          development, distributed systems, and real-world software engineering.
        </p>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)" }}>
          Beyond coding, I enjoy exploring new technologies, building practical
          projects, and experimenting with modern web and AI solutions. I’m always
          looking for ways to combine
          <strong> creative problem-solving</strong> with{" "}
          <strong>technical precision</strong> to build applications that are
          scalable, useful, and impactful.
        </p>

        <p>
          B.E. Computer Science & Engineering graduate with hands-on experience in
          full-stack and AI-integrated projects. Proficient in Java, Spring Boot,
          React.js, REST APIs, MySQL, and Docker. Seeking software development
          opportunities to apply my skills and contribute to scalable, real-world
          applications.
        </p>

        {/* ========================================================= */}
        {/* --- Training & Internship Experience Section --- */}
        {/* ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Training & Internship Experience
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {/* --- Experience Card 1 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "flex-start",
                gap: "1.2rem",
              }}
            >
              <FaBriefcase size={38} color="var(--accent)" />

              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Java Full Stack Developer Trainee
                </h4>

                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Besant Technologies</strong> — Bangalore
                </p>

                <p
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "0.4rem",
                  }}
                >
                  Jan 2026 – July 2026
                </p>

                <p
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    marginBottom: "0.3rem",
                  }}
                >
                  Worked with Java, Spring Boot, React.js, SQL, MongoDB,
                  REST APIs, and full-stack application development.
                </p>

                <p style={{ color: "rgba(255,255,255,0.75)" }}>
                  Developed an AI-powered assistant using{" "}
                  <strong>Spring Boot and Gemini API</strong> and worked on a
                  Chrome extension for fetching and parsing Gmail content
                  through API integration.
                </p>
              </div>
            </motion.div>

            {/* --- Experience Card 2 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "flex-start",
                gap: "1.2rem",
              }}
            >
              <FaBriefcase size={38} color="var(--accent)" />

              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Java Developer Intern
                </h4>

                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Tech Fortune Technology</strong> — Bangalore
                </p>

                <p
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "0.4rem",
                  }}
                >
                  Feb 2025 – June 2025
                </p>

                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Worked on full-stack development using{" "}
                  <strong>Java, Spring Boot, React.js, HTML, CSS,
                  JavaScript, REST APIs, and MySQL</strong>. Built and
                  integrated application features while working with
                  real-world development practices.
                </p>
              </div>
            </motion.div>

            {/* --- Experience Card 3 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "flex-start",
                gap: "1.2rem",
              }}
            >
              <FaBriefcase size={38} color="var(--accent)" />

              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Front-End Developer Intern
                </h4>

                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Techshreshta Solutions LLP</strong> — Kundapura
                </p>

                <p
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "0.4rem",
                  }}
                >
                  Oct 2023 – Dec 2023
                </p>

                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Developed responsive user interfaces using{" "}
                  <strong>React.js, HTML, CSS, and Bootstrap</strong>.
                  Worked with Git and GitHub and followed Agile development
                  practices while building responsive web components.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* --- Education Section --- */}
        {/* ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {/* --- Education Card 1 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaUniversity size={40} color="var(--accent)" />

              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  B.E in Computer Science and Engineering
                </h4>

                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>MITK (VTU)</strong>
                  kundapura Udupi
                </p>

                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Completed | GPA: 7.0
                </p>

                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  2021 – 2025
                </p>
              </div>
            </motion.div>

            {/* --- Education Card 2 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaGraduationCap size={38} color="var(--accent)" />

              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Higher Secondary Education (12th Grade)
                </h4>

                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Government PU College, Byndoor</strong> — Byndoor
                  Udupi
                </p>

                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Karnataka board| Percentage: 65%
                </p>

                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Completed in 2021
                </p>
              </div>
            </motion.div>

            {/* --- Education Card 3 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaSchool size={36} color="var(--accent)" />

              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Secondary Education (10th Grade)
                </h4>

                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>
                    10th — Government High School, Byndoor
                  </strong>{" "}
                  — Byndoor Udupi
                </p>

                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Karnataka Board| Percentage: 62%
                </p>

                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Completed in 2019
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;