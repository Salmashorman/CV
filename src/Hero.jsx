function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hello, I'm <span className="name">SALMA </span></h1>
          <h2>Computer Engineering</h2>
          <p>
            I'm a passionate computer engineering student with a knack for
            developing innovative solutions. I love coding, problem-solving, and
            creating impactful projects.  
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View My Work</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>

        <div className="hero-image">
          <div className="avatar"><img  src="/public/WhatsApp Image 2025-12-11 at 17.02.57_749e50ab.jpg" alt="" /></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;