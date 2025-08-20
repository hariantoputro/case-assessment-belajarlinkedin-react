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
