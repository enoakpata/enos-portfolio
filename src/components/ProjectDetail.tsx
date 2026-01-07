import React from 'react';
import '../design.css';

const ProjectDetail: React.FC = () => {
    return (
        <div className="project-detail">
            {/* Hero Section */}
            <section className="project-hero">
                <div className="container">
                    <a href="/#works" className="back-link">← Back to Projects</a>
                    <h1 className="project-detail-title">Shift Management System</h1>
                    <p className="project-tagline">
                        A comprehensive employee shift management solution with biometric authentication and real-time tracking
                    </p>
                    <div className="project-meta">
                        <span className="meta-item">
                            <strong>Duration:</strong> 3 months
                        </span>
                        <span className="meta-item">
                            <strong>Year:</strong> 2025
                        </span>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="project-section">
                <div className="container-narrow">
                    <h2 className="section-heading">Overview</h2>
                    <p className="project-text">
                        The Shift Management System is a robust desktop application designed to streamline employee
                        shift scheduling, attendance tracking, and workforce management. Built with Java and MySQL,
                        the system provides a secure, role-based platform that caters to different organizational
                        hierarchies including Directors, Supervisors, and regular employees.
                    </p>
                </div>
            </section>

            {/* Screenshots Section */}
            <section className="project-section bg-light">
                <div className="container-narrow">
                    <h2 className="section-heading">Screenshots</h2>

                    <div className="screenshots-grid">
                        <div className="screenshot-card">
                            <img src="/screenshots/it_dashboard.jpeg" alt="IT Dashboard" />
                            <p className="screenshot-caption">IT Dashboard</p>
                        </div>

                        <div className="screenshot-card">
                            <img src="/screenshots/supervisordashboard.jpeg" alt="Supervisor dashboard" />
                            <p className="screenshot-caption">Supervisor Dashboard</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Problem Statement */}
            <section className="project-section bg-light">
                <div className="container-narrow">
                    <h2 className="section-heading">Problem Solved</h2>
                    <div className="problem-grid">
                        <div className="problem-card">
                            <h3>Manual Attendance Tracking</h3>
                            <p>
                                Traditional paper-based or spreadsheet attendance systems were prone to errors,
                                time-consuming, and difficult to manage across multiple shifts.
                            </p>
                        </div>
                        <div className="problem-card">
                            <h3>Security Concerns</h3>
                            <p>
                                Buddy-punching and unauthorized clock-ins led to payroll discrepancies and
                                compromised accountability.
                            </p>
                        </div>
                        <div className="problem-card">
                            <h3>Lack of Real-Time Insights</h3>
                            <p>
                                Managers struggled to access real-time attendance data and generate reports
                                for informed decision-making.
                            </p>
                        </div>
                        <div className="problem-card">
                            <h3>Inflexible Shift Management</h3>
                            <p>
                                Employees had no automated way to request shift swaps or changes, leading to
                                communication bottlenecks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="project-section">
                <div className="container-narrow">
                    <h2 className="section-heading">Key Features</h2>
                    <div className="features-list">
                        <div className="feature-item">
                            <div className="feature-number">01</div>
                            <div className="feature-content">
                                <h3>Biometric Sign-In</h3>
                                <p>
                                    Integrated fingerprint authentication ensures secure and accurate employee
                                    identification, eliminating buddy-punching and unauthorized access.
                                </p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-number">02</div>
                            <div className="feature-content">
                                <h3>Webcam Capture</h3>
                                <p>
                                    Automatic photo capture during clock-in/out provides visual verification
                                    and an additional layer of security for attendance records.
                                </p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-number">03</div>
                            <div className="feature-content">
                                <h3>Role-Based Dashboards</h3>
                                <p>
                                    Customized interfaces for Directors, Supervisors, and regular employees,
                                    each with appropriate access levels and functionalities.
                                </p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-number">04</div>
                            <div className="feature-content">
                                <h3>Admin Dashboard</h3>
                                <p>
                                    Comprehensive admin panel for managing employees, viewing attendance reports,
                                    generating analytics, and configuring system settings.
                                </p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-number">05</div>
                            <div className="feature-content">
                                <h3>Shift Swap System</h3>
                                <p>
                                    Employees can request shift swaps which are routed to supervisors for approval,
                                    streamlining schedule modifications.
                                </p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-number">06</div>
                            <div className="feature-content">
                                <h3>Multi-Threading</h3>
                                <p>
                                    Efficient background processing for database operations, biometric scanning,
                                    and webcam capture without blocking the main UI thread.
                                </p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-number">07</div>
                            <div className="feature-content">
                                <h3>Login/Logout Tracking</h3>
                                <p>
                                    Precise timestamping of employee check-ins and check-outs with automatic
                                    calculation of work hours and overtime.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="project-section bg-light">
                <div className="container-narrow">
                    <h2 className="section-heading">Technologies Used</h2>
                    <div className="tech-categories">
                        <div className="tech-category">
                            <h3 className="tech-category-title">Backend</h3>
                            <div className="tech-tags">
                                <span className="tech-tag">Java</span>
                                <span className="tech-tag">MySQL</span>
                                <span className="tech-tag">JDBC</span>
                            </div>
                        </div>
                        <div className="tech-category">
                            <h3 className="tech-category-title">Frontend</h3>
                            <div className="tech-tags">
                                <span className="tech-tag">Java Swing</span>
                                <span className="tech-tag">AWT</span>
                            </div>
                        </div>
                        <div className="tech-category">
                            <h3 className="tech-category-title">Hardware Integration</h3>
                            <div className="tech-tags">
                                <span className="tech-tag">Biometric SDK</span>
                                <span className="tech-tag">Webcam API</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What I Learned Section */}
            <section className="project-section">
                <div className="container-narrow">
                    <h2 className="section-heading">What I Learned</h2>
                    <div className="learning-grid">
                        <div className="learning-card">
                            <h3>Database Management</h3>
                            <p>
                                Mastered writing complex SQL queries, optimizing database performance,
                                and implementing efficient data relationships for large-scale employee data.
                            </p>
                            <ul className="learning-points">
                                <li>Structured Query Language (SQL) best practices</li>
                                <li>Database normalization and indexing</li>
                                <li>Transaction management and data integrity</li>
                            </ul>
                        </div>
                        <div className="learning-card">
                            <h3>Hardware Integration</h3>
                            <p>
                                Learned to integrate external hardware devices with software applications,
                                handling real-time data capture and processing.
                            </p>
                            <ul className="learning-points">
                                <li>Webcam integration and image processing</li>
                                <li>Biometric device SDK implementation</li>
                                <li>Real-time data synchronization</li>
                            </ul>
                        </div>
                        <div className="learning-card">
                            <h3>Concurrent Programming</h3>
                            <p>
                                Implemented multi-threading to handle simultaneous operations without
                                compromising application responsiveness and user experience.
                            </p>
                            <ul className="learning-points">
                                <li>Thread management and synchronization</li>
                                <li>Asynchronous task execution</li>
                                <li>Deadlock prevention strategies</li>
                            </ul>
                        </div>
                        <div className="learning-card">
                            <h3>Security Implementation</h3>
                            <p>
                                Developed robust authentication systems and implemented role-based access
                                control to ensure data security and user privacy.
                            </p>
                            <ul className="learning-points">
                                <li>Secure password hashing and storage</li>
                                <li>Session management</li>
                                <li>Authorization and access control</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="project-cta">
                <div className="container-narrow">
                    <h2>Interested in Learning More?</h2>
                    <p>Check out the source code and documentation on GitHub</p>
                    <div className="cta-buttons">
                        <a href="https://github.com/enoakpata/shift-management-system.git" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            View GitHub Repository →
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;