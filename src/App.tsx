import React, { useState, useEffect } from 'react';
import './design.css';
import emailjs from "emailjs-com"
import profileImage from './assets/img2.png';



interface Project { //defines structure of projects
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
}

interface ContactFormData { //defines structure of contact form
  name: string;
  email: string;
  message: string;
}

// Header Component
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">Enoabasi Akpata.</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#works">Works</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="availability">
          <span className="status-dot"></span>
          Available for new opportunities
        </div>

        {/*Mobile menu button*/}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      
      {/* Mobile navigation */}
      {menuOpen && (
        <nav className="mobile-nav">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#works" onClick={() => setMenuOpen(false)}>Works</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
};

// Hero Component
const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    //preload image
    const img = new Image();
    img.src = profileImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">

          <div className="hero-bottom">
            <div className="hero-statement">
              <div className="statement-name">HI,</div>
              <div className="statement-name">I AM ENOABASI</div>
            </div>

            <div className={`hero-image ${imageLoaded ? 'loaded' : ''}`}>
              <img
                src={profileImage}
                alt="Enoabasi"
                loading="eager"
              />
            </div>

            <div className="hero-role">
              <div className="role-title">FULL STACK DEVELOPER</div>
            </div>
          </div>

          <div className="hero-description">
            <p>Specialized in Web Development,</p>
            <p>React, TypeScript, and Node.js.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

// About Component
const About: React.FC = () => {
  const skills = [
    'TypeScript',
    'React',
    'Node.js',
    'MySql',
    'Java',
    'PostgreSQL',
    'REST APIs',
    'Git',
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">ABOUT ME</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full stack developer with a love for creating elegant solutions
              to complex problems. With expertise in modern web technologies, I specialize in
              building scalable and performant applications.
            </p>
            <p>
              My approach combines clean code, user-centered design, and a commitment to
              continuous learning. I thrive in collaborative environments and enjoy turning
              ideas into reality.
            </p>
          </div>
          <div className="skills">
            <h3 className="skills-heading">SKILLS & TECHNOLOGIES</h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Component
const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Hotel Menu',
      description:
        'A hotel menu embedded within a QR code.',
      technologies: ['React', 'TypeScript', 'Vite'],
      github: 'https://github.com/enoakpata/kt-menu-v2.git',
      demo: 'https://kt-menu-v2-uor6.vercel.app/',
      image: '/images/ktmenu_home.png',
    },
    {
      id: 2,
      title: 'Shift Management System',
      description:
        'Shift management system that leverages biometrics for signing in and out.',
      technologies: ['Java', 'MySQL'],
      github: 'https://github.com/enoakpata/shift-management-system.git',
      //demo: '#',
      image: '/images/smss.png',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description:
        'Data visualization platform with interactive charts, custom reporting, and real-time data processing for business insights.',
      technologies: ['React', 'TypeScript', 'D3.js', 'PostgreSQL'],
      github: '#',
      demo: '#',
    },
    {
      id: 4,
      title: 'Social Media App',
      description:
        'Feature-rich social platform with user authentication, media sharing, real-time messaging, and activity feeds.',
      technologies: ['React', 'Node.js', 'Socket.io', 'AWS'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="works" className="projects">
      <div className="container">
        <h2 className="section-title">RECENT PROJECTS</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <hr className="divider" />
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} className="project-link">
                      View Code →
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} className="project-link">
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // VALIDATION
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields ❗");
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,

    };

    // SEND EMAIL THROUGH EMAILJS
    emailjs
      .send(
        "service_zbwchpe",
        "template_ao85k6j",
        templateParams,
        "e_8Wb1SkELK7EZ8dB"
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("Something went wrong. Try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setStatus(""), 4000);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">GET IN TOUCH</h2>
        <div className="contact-content">

          {/* LEFT SIDE */}
          <div className="contact-info">
            <h3 className="contact-heading">Let’s work together</h3>
            <p className="contact-text">
              I'm always open to new projects and collaborations.
              Got an idea? I'd love to hear it.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">EMAIL</span>
                <a href="mailto:enoakpata6@gmail.com">enoakpata6@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">LOCATION</span>
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
              ></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="submit-message">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Enoabasi Akpata. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/enoakpata" aria-label="GitHub">GitHub</a>
          <a href="https://www.linkedin.com/in/enoabasi-akpata-892878291/" aria-label="LinkedIn">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;