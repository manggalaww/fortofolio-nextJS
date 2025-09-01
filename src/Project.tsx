import React from "react"
import "./project.css"

// Komponen Project menerima props "data" (array daftar project)
export default function Project({ data }) {
  return (
    <section id="projects" className="projects">
      {/* Judul Section */}
      <h2>
        My <span>Projects</span>
      </h2>

      {/* Daftar Project */}
      <div className="project-container">
        {data.map((item) => (
          <div className="project-card" key={item.id}>
            {/* Gambar Project */}
            <img src={item.img} alt={item.title} />

            {/* Judul & Deskripsi */}
            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            {/* Tombol Link ke Project */}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Lihat Project
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
