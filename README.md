Saya telah membuatkan landing page sederhana yang fungsional, clean, dan responsif untuk kelas online **"Mastering LinkedIn for Career Growth"** menggunakan React. Kode ini terstruktur dengan baik dan mudah dipahami.

---

## 💻 Struktur Project

Untuk kemudahan pengelolaan, saya membagi kode menjadi beberapa komponen React. Berikut adalah struktur folder yang direkomendasikan:

```
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx
│   │   ├── BenefitsSection.jsx
│   │   ├── CallToAction.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   └── ...
│   ├── App.css
│   ├── App.jsx
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

---

## 📄 Kode Landing Page

Berikut adalah kode untuk setiap komponen yang dibutuhkan.

### `src/App.jsx`

Ini adalah komponen utama yang menggabungkan semua bagian landing page.

```jsx
import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import BenefitsSection from "./components/BenefitsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CallToAction />
    </div>
  );
}

export default App;
```

---

### `src/components/HeroSection.jsx`

Bagian awal yang menarik perhatian pengunjung dengan judul dan tombol CTA.

```jsx
import React from "react";

function HeroSection() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Mastering LinkedIn for Career Growth</h1>
        <p>Unlock your professional potential and get noticed by top recruiters.</p>
        <a href="#register" className="cta-button">
          Daftar Sekarang
        </a>
      </div>
    </header>
  );
}

export default HeroSection;
```

---

### `src/components/AboutSection.jsx`

Deskripsi singkat tentang kelas yang ditawarkan.

```jsx
import React from "react";

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About the Class</h2>
        <p>
          Kelas ini dirancang untuk membimbing Anda secara menyeluruh dalam memanfaatkan LinkedIn sebagai alat ampuh untuk pengembangan karir. Anda akan belajar cara membangun profil yang menarik, mengoptimalkan jaringan profesional,
          membuat konten yang berdampak, dan strategi untuk mendapatkan peluang kerja impian. Kami akan membongkar rahasia di balik algoritma LinkedIn dan memberikan tips praktis yang bisa langsung Anda terapkan. Baik Anda seorang fresh
          graduate atau profesional yang ingin beralih karir, kelas ini akan memberikan Anda keunggulan kompetitif di pasar kerja.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
```

---

### `src/components/BenefitsSection.jsx`

Menyoroti manfaat utama yang akan didapatkan oleh peserta.

```jsx
import React from "react";

function BenefitsSection() {
  return (
    <section id="benefits" className="benefits-section">
      <div className="container">
        <h2>Key Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h3>Optimize Your Profile</h3>
            <p>Pelajari cara membuat profil LinkedIn yang menarik dan mudah ditemukan oleh rekruter.</p>
          </div>
          <div className="benefit-item">
            <h3>Expand Your Network</h3>
            <p>Bangun koneksi yang berkualitas dan pelajari cara berinteraksi secara efektif.</p>
          </div>
          <div className="benefit-item">
            <h3>Master Content Creation</h3>
            <p>Temukan cara membuat konten yang menunjukkan keahlian Anda dan membangun kredibilitas.</p>
          </div>
          <div className="benefit-item">
            <h3>Secure Your Dream Job</h3>
            <p>Dapatkan wawasan eksklusif tentang strategi pencarian kerja yang efektif di LinkedIn.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
```

---

### `src/components/TestimonialsSection.jsx`

Placeholder untuk menampilkan testimoni dari alumni.

```jsx
import React from "react";

function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2>What Our Alumni Say</h2>
        <div className="testimonial-card">
          <p>"Materi yang disajikan sangat praktis dan mudah diterapkan. Berkat kelas ini, profil LinkedIn saya kini jauh lebih profesional dan saya mulai mendapatkan banyak tawaran pekerjaan!"</p>
          <h4>- Jane Doe, UI/UX Designer</h4>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
```

---

### `src/components/CallToAction.jsx`

Tombol CTA terakhir yang mengarahkan pengunjung untuk mendaftar.

```jsx
import React from "react";

function CallToAction() {
  return (
    <section className="cta-final">
      <div className="container">
        <h2>Siap Mengembangkan Karir Anda?</h2>
        <a href="#register" className="cta-button">
          Daftar Sekarang dan Ambil Langkah Pertama Anda!
        </a>
      </div>
    </section>
  );
}

export default CallToAction;
```

---

### `src/App.css`

Kode CSS untuk memberikan tampilan yang clean, minimalis, dan responsif.

```css
/* General Styles */
:root {
  --primary-color: #0077b5; /* LinkedIn Blue */
  --secondary-color: #2c3e50;
  --text-color: #333;
  --bg-color: #f4f7f6;
  --light-bg: #ffffff;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--bg-color);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

section {
  padding: 80px 0;
}

h1,
h2,
h3 {
  color: var(--secondary-color);
  margin-bottom: 20px;
}

h1 {
  font-size: 3em;
}
h2 {
  font-size: 2.5em;
  text-align: center;
}
h3 {
  font-size: 1.5em;
}
p {
  font-size: 1.1em;
}

/* Buttons */
.cta-button {
  display: inline-block;
  background-color: var(--primary-color);
  color: #fff;
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1.1em;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.cta-button:hover {
  background-color: #005f8d;
  transform: translateY(-3px);
}

/* Hero Section */
.hero {
  background-color: var(--light-bg);
  color: var(--secondary-color);
  text-align: center;
  padding: 150px 0;
  border-bottom: 5px solid var(--primary-color);
}

.hero-content h1 {
  font-size: 4em;
  font-weight: 700;
  line-height: 1.2;
}

.hero-content p {
  font-size: 1.5em;
  margin-bottom: 30px;
}

/* About & Benefits Section */
.about-section,
.testimonials-section,
.cta-final {
  background-color: var(--light-bg);
}

.about-section {
  padding: 80px 0;
}

.benefits-section {
  background-color: var(--bg-color);
  padding: 80px 0;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.benefit-item {
  background-color: var(--light-bg);
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.benefit-item:hover {
  transform: translateY(-10px);
}

/* Testimonials Section */
.testimonial-card {
  background-color: var(--primary-color);
  color: #fff;
  padding: 40px;
  border-radius: 10px;
  max-width: 800px;
  margin: 50px auto 0;
  text-align: center;
}

.testimonial-card p {
  font-size: 1.2em;
  font-style: italic;
  margin-bottom: 20px;
}

.testimonial-card h4 {
  font-weight: normal;
  color: #fff;
}

/* Final CTA Section */
.cta-final {
  text-align: center;
  padding: 100px 0;
  background-color: var(--secondary-color);
}

.cta-final h2 {
  color: #fff;
  margin-bottom: 30px;
}

/* Responsive Design */
@media (max-width: 768px) {
  h1 {
    font-size: 3em;
  }
  h2 {
    font-size: 2em;
  }
  .hero {
    padding: 100px 0;
  }
  .hero-content p {
    font-size: 1.2em;
  }
}
```

---

## 🚀 README.md di GitHub

### Mastering LinkedIn for Career Growth Landing Page

Landing page ini dibuat untuk mempromosikan kelas online tentang optimalisasi LinkedIn untuk pertumbuhan karir. Desainnya clean, minimalis, dan responsif, dibangun dengan teknologi web modern.

### 🛠️ Teknologi yang Digunakan

- **HTML:** Struktur dasar halaman.
- **CSS:** Styling untuk tampilan yang menarik dan responsif.
- **JavaScript (ES6):** Logika interaktif.
- **React:** Library JavaScript untuk membangun antarmuka pengguna berbasis komponen.
- **Node.js & npm:** Lingkungan runtime dan package manager untuk menjalankan project React.

### ⚙️ Cara Menjalankan Project

Ikuti langkah-langkah berikut untuk menjalankan project ini di komputer lokal Anda:

1.  **Pastikan Anda telah menginstal Node.js dan npm.**
2.  **Clone repository ini** dari GitHub ke direktori lokal Anda.
    ```bash
    git clone [url_repo_anda]
    cd [nama_folder_repo]
    ```
3.  **Instal semua dependensi** yang diperlukan.
    ```bash
    npm install
    ```
4.  **Jalankan aplikasi** dalam mode development.
    ```bash
    npm start
    ```
5.  Aplikasi akan secara otomatis terbuka di browser default Anda pada alamat `http://localhost:3000`.
