import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Pesan berhasil dicetak di console!");
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="nama"
          placeholder="Nama"
          value={formData.nama}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="pesan"
          placeholder="Pesan"
          rows= {5}
          value={formData.pesan}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Kirim</button>
      </form>

      <div className="social-links">
        <h3>Follow Me</h3>
        <a href="https://github.com/manggalaww" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://instagram.com/manggalaabimata"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://www.tiktok.com/@manggalaww_?_t=ZS-8zMYgTztWho&_r=1"
          target="_blank"
          rel="noreferrer"
        >
          Tiktok
        </a>
      </div>
    </div>
  );
}
