import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../design.css';
import { projectDetails } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectDetails[slug] : undefined;

  if (!project) {
    return (
      <div className="project-detail">
        <section className="project-hero">
          <div className="container">
            <Link to="/#works" className="back-link">← Back to Projects</Link>
            <h1 className="project-detail-title">Project not found</h1>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="project-detail">
      {/* Hero Section */}
      <section className="project-hero">
        <div className="container">
          <Link to="/#works" className="back-link">← Back to Projects</Link>
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-tagline">{project.tagline}</p>
          <div className="project-meta">
            <span className="meta-item">
              <strong>Duration:</strong> {project.duration}
            </span>
            <span className="meta-item">
              <strong>Year:</strong> {project.year}
            </span>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="project-section">
        <div className="container-narrow">
          <h2 className="section-heading">Overview</h2>
          <p className="project-text">{project.overview}</p>
        </div>
      </section>

      {/* Screenshots Section — only renders once real screenshots exist */}
      {project.screenshots.length > 0 && (
        <section className="project-section bg-light">
          <div className="container-narrow">
            <h2 className="section-heading">Screenshots</h2>
            <div className="screenshots-grid">
              {project.screenshots.map((shot) => (
                <div key={shot.src} className="screenshot-card">
                  <img src={shot.src} alt={shot.caption} />
                  <p className="screenshot-caption">{shot.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Problem Statement */}
      <section className="project-section bg-light">
        <div className="container-narrow">
          <h2 className="section-heading">Problem Solved</h2>
          <div className="problem-grid">
            {project.problems.map((p) => (
              <div key={p.title} className="problem-card">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="project-section">
        <div className="container-narrow">
          <h2 className="section-heading">Key Features</h2>
          <div className="features-list">
            {project.features.map((f, i) => (
              <div key={f.title} className="feature-item">
                <div className="feature-number">{String(i + 1).padStart(2, '0')}</div>
                <div className="feature-content">
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="project-section bg-light">
        <div className="container-narrow">
          <h2 className="section-heading">Technologies Used</h2>
          <div className="tech-categories">
            {project.techCategories.map((cat) => (
              <div key={cat.title} className="tech-category">
                <h3 className="tech-category-title">{cat.title}</h3>
                <div className="tech-tags">
                  {cat.items.map((item) => (
                    <span key={item} className="tech-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Learned Section
      <section className="project-section">
        <div className="container-narrow">
          <h2 className="section-heading">What I Learned</h2>
          <div className="learning-grid">
            {project.learnings.map((l) => (
              <div key={l.title} className="learning-card">
                <h3>{l.title}</h3>
                <p>{l.description}</p>
                <ul className="learning-points">
                  {l.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="project-cta">
        <div className="container-narrow">
          <h2>Interested in Learning More?</h2>
          <p>Check out the source code and full project documentation on GitHub</p>
          <div className="cta-buttons">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View GitHub Repository →
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Try Live Demo →
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
