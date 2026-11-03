import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './design.css';
import emailjs from "emailjs-com"
import ProjectDetail from './components/ProjectDetail';
import { projectDetails } from './data/projects';

interface OtherProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  );
};

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

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

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

// Hero Component — data science positioning
const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-kicker">Data Science · Machine Learning · Lagos</div>
        <h1 className="hero-headline">
          I turn messy data into models you can <em>trust</em>.
        </h1>
        <p className="hero-sub">
          Hi, I'm Enoabasi. I build end-to-end data science and ML projects, from cleaning the
          data to explaining the predictions, with a focus on healthcare and accessibility.
        </p>
        <div className="hero-actions">
          <a href="#works" className="hero-btn primary">See my work</a>
          <a href="#contact" className="hero-btn ghost">Get in touch</a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="hero-stat-value">Multimodal</div>
            <div className="hero-stat-label">PCOS detection fusing imaging and clinical data</div>
          </div>
          <div>
            <div className="hero-stat-value">Scopus Q3</div>
            <div className="hero-stat-label">Manuscript submitted to the Nigerian Journal of Technology</div>
          </div>
          <div>
            <div className="hero-stat-value">SHAP + Grad-CAM</div>
            <div className="hero-stat-label">Explainability built into every model I ship</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Component
const About: React.FC = () => {
  const skills = [
    'Python',
    'scikit-learn',
    'XGBoost',
    'PyTorch',
    'SHAP & Grad-CAM',
    'Streamlit',
    'SQL',
    'Git',
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Computer Science undergraduate focused on machine learning and applied AI,
              drawn to problems where data can meaningfully improve decision-making — especially
              in domains like healthcare and accessibility.
            </p>
            <p>
              My work spans the full ML lifecycle: from data preprocessing and model architecture
              to explainability and deployment. I care as much about whether a model can be trusted
              and understood as I do about how well it performs.
            </p>
          </div>
          <div className="skills">
            <h3 className="skills-heading">Skills &amp; technologies</h3>
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

// Projects Component — AI/ML projects featured, everything else secondary
const Projects: React.FC = () => {
  const aiProjectSlugs = ['pcos-multimodal-detection', 'color-readability-classifier'];
  const aiProjects = aiProjectSlugs.map((slug) => projectDetails[slug]);

  // To add a picture, drop the file in /public/images and set `image` to "/images/<file>".
  // To show "Visit Site", set `demo` to the live URL.
  const otherProjects: OtherProject[] = [
    {
      id: 1,
      title: 'Tavern Residence Website',
      description:
        'Booking website for Tavern Residence, a Lagos hotel under the Keno Tavern group, with online reservations and payments.',
      technologies: ['Vite', 'JavaScript', 'Supabase', 'Paystack'],
      github: 'https://github.com/enoakpata/tavern-residence',
      demo: undefined,
      image: undefined,
    },
  ];

  return (
    <section id="works" className="projects">
      <div className="container">
        {/* Featured AI/ML Projects */}
        <h2 className="section-title">Selected data science work</h2>
        <div className="projects-featured-grid">
          {aiProjects.map((project) => (
            <div key={project.slug} className="featured-project-card">
              <h3 className="featured-project-title">{project.title}</h3>
              <p className="featured-project-tagline">{project.tagline}</p>
              <div className="project-tech">
                {project.techCategories.flatMap((c) => c.items).slice(0, 6).map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubUrl} className="project-link" target="_blank" rel="noreferrer">
                  View Code →
                </a>
                <Link to={`/project/${project.slug}`} className="project-link">
                  View Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="subsection-title">Other projects</h3>
        <div className="projects-grid">
          {otherProjects.map((project) => (
            <div key={project.id} className="project-card">
              <hr className="divider" />
              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
                      View Code →
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} className="project-link" target="_blank" rel="noreferrer">
                      Visit Site →
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

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields ❗");
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

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
        <h2 className="section-title">Get in touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-heading">Let's work together</h3>
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
        <p>&copy; Enoabasi Akpata.</p>
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
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
