function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Contact</h2>
      <p className="section-subtitle">
        If you want to work together or have a question, feel free to reach out.
      </p>

      <div className="contact-grid">
        <div>
          <h3>Phone</h3>
          <p>+962 78 125 6612</p>
        </div>
        <div>
          <h3>Email</h3>
          <p>saloomshorman@outlook.sa</p>
        </div>
        <div>
          <h3>Location</h3>
          <p>Amman, Jordan • Chicago, USA</p>
          <p></p>
        </div>
        <div>
          <h3>CV PDF</h3>
          <p>
            <a  href="https://drive.google.com/drive/folders/1HTDn59FDGCEGb_OpL1f9aDAmL5blciN9?usp=drive_link" id="cv" target="_blank">CV.pdf</a>
          </p>
        
        </div>
      </div>
    </section>
  );
}

export default Contact;