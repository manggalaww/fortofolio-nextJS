import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import "./App.css";
import "./project.css";

import FotoMakan from "./assets/ManggalaMakan.jpg";
import FotoBis from "./assets/ManggalaFotoSamaBis.jpg";
import FotoWeb from "./assets/Foto-Web.jpg";
import FotoDart from "./assets/dart.jpg";

import TechStack from "./TechStack";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./components/Footer";


function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Fortofolio saat masih menggunakan HTML, CSS, dan Javascript",
      desc: "Website portfolio sederhana yang menampilkan informasi pribadi dan karya.",
      img: FotoWeb,
      link: "https://manggalaww.github.io/Web-Fortofolio/Web%20Fortofolio/fortofolio.html#",
    },
    {
      id: 2,
      title: "Fortofolio Menggunakan Framework React",
      desc: "Website portofolio sederhana. Memang masih seperti kemarin tapi yang kali ini sudah memakai framework yaitu React",
      img: FotoWeb,
      link: "https://fortofolio-manggalaww-react.netlify.app/",
    },
    {
      id: 3,
      title: "Project Ujian Dart",
      desc: "Sebenernya dulu ini adalah hasil dari membuat aplikasi provider. Tapi gatau kenapa mungkin ada satu dan lain hal project ini hilang dan belum bisa di akses :(",
      img: FotoDart,
      link: "https://precious-mandazi-fbd63f.netlify.app/",
    },
  ];

  return (
  <>
    {/* Navbar */}
    <header className="header">
      <a href="#" className="logo">
        Mangga<span>laww.</span>
      </a>
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Project</a>
        <a href="#programming">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    {/* Background Video */}
    <section className="videoBackground">
      <video autoPlay muted loop id="bg-video">
        <source
          src={`${import.meta.env.BASE_URL}VideoDokumenter.mp4`}
          type="video/mp4"
        />
      </video>
      <div className="overlay"></div>
    </section>

    {/* Halaman Awal */}
    <section className="halamanAwal">
      <div className="content-kiri" data-aos="fade-up">
        <h1>
          <span>Manggala</span> Abimata
        </h1>
        <h3>
          Bus <span>Enthusiast!!</span>
        </h3>
        <p>
          Hai! Aku seorang busmania yang suka banget mengabadikan momen bis
          lewat kamera. Karena hobi ini, saya bahkan pernah diliput beberapa
          media—rasanya seru bisa berbagi cerita lewat karya. Di bawah ini,
          ada cerita singkat tentang saya dan seputar hobi saya!
        </p>
      </div>
      <div className="content-kanan" data-aos="fade-up">
        <img src={FotoMakan} alt="Foto Manggala" />
      </div>
    </section>

    {/* Tentang Saya */}
    <section id="about" className="about" data-aos="fade-up">
      <h2>Tentang Saya</h2>
      <div className="saya">
        <div className="foto-bis">
          <img src={FotoBis} alt="Foto Bis Manggala" />
        </div>
        <div className="tentang-saya">
          <h3>Manggala Abimata H.</h3>
          <p>
            Saat ini sedang menempuh pendidikan di SMK Negeri 8 Malang.
            Mengambil program keahlian Rekayasa Perangkat Lunak (RPL). Kenapa
            saya mengambil jurusan ini, walaupun sebenarnya juga ga bisa-bisa
            amat :) yaa.. karena aku pingin mencoba untuk terjun di bidang IT
            yang sekarang lagi pesat - pesatnya.
          </p>
        </div>
      </div>
    </section>

    {/* Projects */}
    <Project data={projects} data-aos="fade-up" />

    {/* Skills */}
    <section id="programming" className="mt-10 px-6" data-aos="fade-up">
      <TechStack />
    </section>

    {/* Contact */}
    <section id="contact" data-aos="fade-up">
      <Contact />
    </section>

    <Footer />
  </>
);
}

export default App;