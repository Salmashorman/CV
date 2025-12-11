function Services() {
  return (
    <section id="services" className="section services">
      <h2>Services</h2>
      <p className="section-subtitle">
        Here are some of the things I can help you with.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>
            Building responsive websites using HTML, CSS, JavaScript and React.
          </p>
        </div>

        <div className="service-card">
          <h3>UI Design</h3>
          <p>
            Designing clean and modern interfaces with focus on user experience.
          </p>
        </div>

        <div className="service-card">
          <h3>Performance</h3>
          <p>
            Programming & AI: Developing applications and AI/ML projects using Python and C++.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;