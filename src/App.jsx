import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import "./index.css"
import "./App.css"
import FotoMakan from "./assets/ManggalaMakan.jpg"
import FotoBis from "./assets/ManggalaFotoSamaBis.jpg"

// import komponen baru
import TechStack from "./TechStack"

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      {/* Navbar */}
      <header className="header">
        <a href="#" className="logo">
          Mangga<span>laww.</span>
        </a>
        <nav className="navbar">
          <a href="#">Saya Manggalaw</a>
          <a href="#about">Cerita Singkat</a>
          <a href="#programming">Programming</a>
        </nav>
      </header>

      {/* Background Video */}
      <section className="videoBackground">
        <video autoPlay muted loop id="bg-video">
          <source src="/VideoDokumenter.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
      </section>

      {/* Halaman Awal */}
      <section className="halamanAwal">
        <div className="content-kiri" data-aos="fade-up">
          <h1>Halo, aku Manggala!!</h1>
          <h3>
            Bus Mania, bukan <span>Basuri Mania!</span>
          </h3>
          <p>
            Hai! Aku seorang busmania yang suka banget
            mengabadikan momen bis lewat kamera. Karena hobi ini, saya bahkan
            pernah diliput beberapa media—rasanya seru bisa berbagi cerita lewat karya.
            Di bawah ini, ada cerita singkat tentang saya dan seputar hobi saya!
          </p>
        </div>
        <div className="content-kanan" data-aos="fade-up">
          <img src={FotoMakan} alt="Foto Manggala" />
        </div>
      </section>

      {/* Tentang Saya */}
      <section id="about" className="about" data-aos="fade-up">
        <h2>
          Cerita <span>Singkat</span>
        </h2>
      </section>

      <section className="foto-background"></section>

      <section id="saya" className="saya" data-aos="fade-up">
        <div className="foto-bis">
          <img src={FotoBis} alt="Foto Bis Manggala" />
          <p>Study Tour ke Bali, 18 Mei 2024</p>
        </div>

        <div className="tentang-saya" data-aos="fade-up">
          <h2>Si Paling Bis Mania!</h2>
          <p>
            Aku, Manggala Abimata. Saking sukanya sama transportasi umum bus,
          banyak temanku yang memanggilku dengan julukan "mbisss" (yang artinya
          bis). Awal mulanya saat aku masih mengenyam pendidikan di SD Muhammadiyah 6 Lawang - Malang.
          Waktu sekolah mengadakan "Study Tour" ke Surabaya, tepatnya di Monumen Jalesveva Jayamahe
          dan Kebun Binatang Surabaya (KBS). Kebetulan waktu itu sekolah menyewa
          bus Restu Panda sebagai transportasi selama Study Tour itu berlangsung. Karena 
          Bus Restu Panda ini terkenal dengan livery-nya yang bergambar Panda
          dan "Kids Friendly" banget. Nahhh, disitulah awal mula anak kecil bernama
          Manggala ini suka sama bis!!
          Saat ini, aku juga sering mengabadikan momen ketika saya ketemu / menaiki
          bis. Pasti ada yang kurang rasanya kalau naik bis tapi momen itu
          ga terabadikan!
          </p>
        </div>
      </section>

      {/* Section Bahasa Pemrograman */}
      <section id="skills" className="mt-10 px-6" data-aos="fade-up">
        <TechStack />
      </section>
    </>
  )
}

export default App
