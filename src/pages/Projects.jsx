import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '🔎 Loki’s Engine – Custom Search Engine',
    desc: 'Self-hosted privacy-focused metasearch engine using SearXNG and Docker, aggregating results from multiple search engines through a unified web interface.',
    ss: './search.png',
    tech: ['SearXNG', 'Docker', 'Docker Compose', 'YAML', 'Git', 'Linux/WSL2'],
    live: '#',
    code: 'https://github.com/Lokesh-ganig-24/Own-Search-engine.git'
  },
  {
  title: '🧠 Mem0 AI Agent',
  desc: 'AI-powered memory-enabled agent using Mem0 to store and retrieve user context, enabling persistent memory and personalised responses across conversations.',
  ss: './MEMO.jpg',
  tech:['Python', 'Mem0', 'AI/LLM', 'REST APIs', 'Git', 'GitHub'],
  live: '#',
  code: 'https://github.com/Lokesh-ganig-24/mem0-ai-agent.git'
  },
  {
    title: '⚡ Java Redis – Key-Value Database',
    desc: 'Redis-inspired in-memory key-value database built from scratch in Java, implementing command-based data storage and retrieval with efficient in-memory data access.',
    ss: './redis.jpg',
    tech: ['Java', 'Data Structures', 'Key-Value Storage', 'In-Memory Database', 'Git', 'GitHub'],
    live: '#',
    code: 'https://github.com/Lokesh-ganig-24/java-redis.git'
  },
  {
  title: '❤️ Heart Abnormality Detection System',
  desc: 'CNN-based deep learning system for detecting cardiac arrhythmia from ECG signals, deployed through a Flask web application with REST APIs for real-time predictions',
  ss: './Heartt.jpg',
  tech:['Python', 'Flask', 'Java', 'Deep Learning', 'CNN', 'ECG Signal Processing', 'REST APIs'],
  live: '#',
  code: 'https://github.com/Lokesh-ganig-24/heart-abnormality-detection.git'
  },
  {
    title: '🐞 Issue Tracker System',
    desc: 'Full-stack issue management system with JWT authentication, issue assignment, status tracking, comments, and dashboard statistics using React.js, Spring Boot, and MySQL.',
    ss: './ISSUE.jpg',
    tech: ['React.js', 'Spring Boot', 'MySQL', 'Spring Security', 'JWT', 'REST APIs', 'Axios'],
    live: '#',
    code: 'https://github.com/Lokesh-ganig-24/issue-tracker-system.git'
  },
  {
    title: '⚡ Distributed Cache',
    desc: 'Distributed sharded and replicated in-memory cache built from scratch in Java with consistent hashing, virtual nodes, failure detection, automatic failover, asynchronous replication, and optional HTTP cache loading',
    ss: './chache.jpg',
    tech:  ['Java', 'Spring Boot', 'Docker', 'Distributed Systems', 'Consistent Hashing', 'Replication', 'Failover', 'REST APIs'],
    live: '#',
    code: 'https://github.com/Lokesh-ganig-24/distributed-cache-java.git'
  },
  {
    title: '🎬 Movie Ticket Booking System',
    desc: 'Web-based movie ticket booking system with movie browsing, showtime management, seat selection, ticket booking, booking history, and REST API-based backend.',
    ss: './movies.jpg',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Responsive UI'],
    live: '#',
    code: 'https://github.com/Lokesh-ganig-24/MovieTicketBooking.git'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
