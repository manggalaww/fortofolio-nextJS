// src/TechStack.jsx
import { FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaGitAlt, } from "react-icons/fa"
import { SiVite, SiDart, SiFlutter, SiReact, } from "react-icons/si"
import "./TechStack.css"

export default function TechStack() {
  return (
    <section id="programming">
    <section className="tech-section">
      <h2 className="tech-title">Bahasa Pemrograman / Stack yang Pernah diPelajari</h2>
      <p className="paragraf-pemrograman">Dikarenakan aku ini bersekolah di SMK Negeri 8 Malang.
        dan masuk di jurusan RPL (Rekayasa Perangkat Lunak) jadi aku haruslah belajar yang namanya Bahasa Pemrograman.
        nah ada banyak sekali Bahasa Pemrograman / Stack yang sudah sempat aku pelajari, seperti dibawah ini yaa. 
      </p>

      <div className="tech-container">
        <div className="tech-card">
          <FaNodeJs className="tech-icon node" />
          <span>Node.js</span>
        </div>
        <div className="tech-card">
          <FaHtml5 className="tech-icon html" />
          <span>HTML5</span>
        </div>
        <div className="tech-card">
          <FaCss3Alt className="tech-icon css" />
          <span>CSS</span>
        </div>
        <div className="tech-card">
          <FaJs className="tech-icon js" />
          <span>Javascript</span>
        </div>
        <div className="tech-card">
          <FaGitAlt className="tech-icon git" />
          <span>Git</span>
        </div>
        <div className="tech-card">
          <FaGithub className="tech-icon github" />
          <span>Github</span>
        </div>
        <div className="tech-card">
          <SiVite className="tech-icon vite" />
          <span>Vite</span>
        </div>
        <div className="tech-card">
          <SiDart className="tech-icon dart" />
          <span>Dart</span>
        </div>
        <div className="tech-card">
          <SiFlutter className="tech-icon flutter" />
          <span>Flutter</span>
        </div>
        <div className="tech-card">
          <SiReact className="tech-icon react" />
          <span>React</span>
        </div>
      </div>
      </section>
    </section>
  )
}
