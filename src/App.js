import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import './design.css';
import emailjs from "emailjs-com";
import profileImage from './assets/img2.png';
// Header Component
const Header = () => {
    return (_jsx("header", { className: "header", children: _jsxs("div", { className: "container", children: [_jsx("div", { className: "logo", children: "Enoabasi Akpata." }), _jsxs("nav", { className: "nav", children: [_jsx("a", { href: "#home", children: "Home" }), _jsx("a", { href: "#works", children: "Works" }), _jsx("a", { href: "#about", children: "About" }), _jsx("a", { href: "#contact", children: "Contact" })] }), _jsxs("div", { className: "availability", children: [_jsx("span", { className: "status-dot" }), "Available for new opportunities"] })] }) }));
};
// Hero Component
const Hero = () => {
    return (_jsx("section", { id: "home", className: "hero", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "hero-content", children: [_jsxs("div", { className: "hero-bottom", children: [_jsxs("div", { className: "hero-statement", children: [_jsx("div", { className: "statement-name", children: "HI," }), _jsx("div", { className: "statement-name", children: "I AM ENOABASI" })] }), _jsx("div", { className: "hero-image", children: _jsx("img", { src: profileImage }) }), _jsx("div", { className: "hero-role", children: _jsx("div", { className: "role-title", children: "FULL STACK DEVELOPER" }) })] }), _jsxs("div", { className: "hero-description", children: [_jsx("p", { children: "Specialized in Web Development," }), _jsx("p", { children: "React, TypeScript, and Node.js." })] })] }) }) }));
};
// About Component
const About = () => {
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
    return (_jsx("section", { id: "about", className: "about", children: _jsxs("div", { className: "container", children: [_jsx("h2", { className: "section-title", children: "ABOUT ME" }), _jsxs("div", { className: "about-content", children: [_jsxs("div", { className: "about-text", children: [_jsx("p", { children: "I'm a passionate full stack developer with a love for creating elegant solutions to complex problems. With expertise in modern web technologies, I specialize in building scalable and performant applications." }), _jsx("p", { children: "My approach combines clean code, user-centered design, and a commitment to continuous learning. I thrive in collaborative environments and enjoy turning ideas into reality." })] }), _jsxs("div", { className: "skills", children: [_jsx("h3", { className: "skills-heading", children: "SKILLS & TECHNOLOGIES" }), _jsx("div", { className: "skills-grid", children: skills.map((skill) => (_jsx("div", { className: "skill-item", children: skill }, skill))) })] })] })] }) }));
};
// Projects Component
const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Hotel Menu',
            description: 'A hotel menu embedded within a QR code.',
            technologies: ['React', 'TypeScript', 'Vite'],
            github: 'https://github.com/enoakpata/kt-menu-v2.git',
            demo: 'https://kt-menu-v2-uor6.vercel.app/',
            image: '/images/ktmenu_home.png',
        },
        {
            id: 2,
            title: 'Shift Management System',
            description: 'Shift management system that leverages biometrics for signing in and out.',
            technologies: ['Java', 'MySQL'],
            github: 'https://github.com/enoakpata/shift-management-system.git',
            //demo: '#',
            image: '/images/smss.png',
        },
        {
            id: 3,
            title: 'Analytics Dashboard',
            description: 'Data visualization platform with interactive charts, custom reporting, and real-time data processing for business insights.',
            technologies: ['React', 'TypeScript', 'D3.js', 'PostgreSQL'],
            github: '#',
            demo: '#',
        },
        {
            id: 4,
            title: 'Social Media App',
            description: 'Feature-rich social platform with user authentication, media sharing, real-time messaging, and activity feeds.',
            technologies: ['React', 'Node.js', 'Socket.io', 'AWS'],
            github: '#',
            demo: '#',
        },
    ];
    return (_jsx("section", { id: "works", className: "projects", children: _jsxs("div", { className: "container", children: [_jsx("h2", { className: "section-title", children: "RECENT PROJECTS" }), _jsx("div", { className: "projects-grid", children: projects.map((project) => (_jsxs("div", { className: "project-card", children: [_jsx("hr", { className: "divider" }), _jsx("div", { className: "project-image", children: _jsx("img", { src: project.image, alt: project.title }) }), _jsxs("div", { className: "project-content", children: [_jsx("h3", { className: "project-title", children: project.title }), _jsx("p", { className: "project-description", children: project.description }), _jsx("div", { className: "project-tech", children: project.technologies.map((tech) => (_jsx("span", { className: "tech-tag", children: tech }, tech))) }), _jsxs("div", { className: "project-links", children: [project.github && (_jsx("a", { href: project.github, className: "project-link", children: "View Code \u2192" })), project.demo && (_jsx("a", { href: project.demo, className: "project-link", children: "Live Demo \u2192" }))] })] })] }, project.id))) })] }) }));
};
// Contact Component
const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // VALIDATION
        if (!formData.name || !formData.email || !formData.message) {
            setStatus("Please fill in all fields ❗");
            return;
        }
        setIsSubmitting(true);
        // SEND EMAIL THROUGH EMAILJS
        emailjs
            .send("service_zbwchpe", "template_ao85k6j", formData, "e_8Wb1SkELK7EZ8dB")
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
    return (_jsx("section", { id: "contact", className: "contact", children: _jsxs("div", { className: "container", children: [_jsx("h2", { className: "section-title", children: "GET IN TOUCH" }), _jsxs("div", { className: "contact-content", children: [_jsxs("div", { className: "contact-info", children: [_jsx("h3", { className: "contact-heading", children: "Let\u2019s work together" }), _jsx("p", { className: "contact-text", children: "I'm always open to new projects and collaborations. Got an idea? I'd love to hear it." }), _jsxs("div", { className: "contact-details", children: [_jsxs("div", { className: "contact-item", children: [_jsx("span", { className: "contact-label", children: "EMAIL" }), _jsx("a", { href: "mailto:enoakpata6@gmail.com", children: "enoakpata6@gmail.com" })] }), _jsxs("div", { className: "contact-item", children: [_jsx("span", { className: "contact-label", children: "LOCATION" }), _jsx("span", { children: "Lagos, Nigeria" })] })] })] }), _jsxs("form", { className: "contact-form", onSubmit: handleSubmit, children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { children: "Name" }), _jsx("input", { name: "name", value: formData.name, onChange: handleChange, placeholder: "Your Name" })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { children: "Email" }), _jsx("input", { type: "email", name: "email", value: formData.email, onChange: handleChange, placeholder: "example@gmail.com" })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { children: "Message" }), _jsx("textarea", { rows: 5, name: "message", value: formData.message, onChange: handleChange, placeholder: "Message" })] }), _jsx("button", { type: "submit", disabled: isSubmitting, className: "btn btn-primary", children: isSubmitting ? "Sending..." : "Send Message" }), status && _jsx("p", { className: "submit-message", children: status })] })] })] }) }));
};
// Footer Component
const Footer = () => {
    return (_jsx("footer", { className: "footer", children: _jsxs("div", { className: "container", children: [_jsx("p", { children: "\u00A9 2024 Enoabasi Akpata. All rights reserved." }), _jsxs("div", { className: "social-links", children: [_jsx("a", { href: "https://github.com/enoakpata", "aria-label": "GitHub", children: "GitHub" }), _jsx("a", { href: "https://www.linkedin.com/in/enoabasi-akpata-892878291/", "aria-label": "LinkedIn", children: "LinkedIn" })] })] }) }));
};
// Main App Component
const App = () => {
    return (_jsxs("div", { className: "app", children: [_jsx(Header, {}), _jsxs("main", { children: [_jsx(Hero, {}), _jsx(Projects, {}), _jsx(About, {}), _jsx(Contact, {})] }), _jsx(Footer, {})] }));
};
export default App;
