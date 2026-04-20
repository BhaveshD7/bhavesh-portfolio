// // import React, { useState } from 'react';
// // import './App.css';
// // import homeIcon from './assets/home.svg';
// // import userIcon from './assets/user.svg';
// // import briefcaseIcon from './assets/briefcase.svg';
// // import bookIcon from './assets/user.svg';
// // import listIcon from './assets/list.svg';
// // import gearIcon from './assets/skill.svg';
// // import certificateIcon from './assets/certificate.svg';
// // import envelopeIcon from './assets/contact.svg';

// // // ============ IMPORT YOUR RESUME FROM ASSETS ============
// // import resume from './assets/Resume.pdf';

// // // ============ IMPORT YOUR PROJECT IMAGES FROM ASSETS ============
// // import project1 from './assets/project-1.jpg';
// // import project2 from './assets/project-2.jpg';
// // // import project3 from './assets/project-3.jpg';
// // // import project4 from './assets/project-4.jpg';
// // // import project5 from './assets/project-5.jpg';
// // // import project6 from './assets/project-6.jpg';

// // const Portfolio = () => {
// //   const [sidebarOpen, setSidebarOpen] = useState(false);
// //   const [resumePreviewOpen, setResumePreviewOpen] = useState(false);


// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     subject: '',
// //     message: ''
// //   });

// //   const isFormFilled = formData.name && formData.email && formData.subject && formData.message;

// //   const handleFormChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleFormSubmit = (e) => {
// //     e.preventDefault();
// //     alert(`Message sent! Thanks, ${formData.name}`);
// //     setFormData({ name: '', email: '', subject: '', message: '' });
// //   };

// //   // ============ PROJECT IMAGES OBJECT ============
// //   const projectImages = {
// //     1: project1,
// //     2: project2,
// //     // 3: project3,
// //     // 4: project4,
// //     // 5: project5,
// //     // 6: project6,
// //   };

// //   const scrollToSection = (id) => {
// //     const element = document.getElementById(id);
// //     if (element) {
// //       element.scrollIntoView({ behavior: 'smooth' });
// //       setSidebarOpen(false);
// //     }
// //   };

// //   const navItems = [
// //     { id: 'hero', label: 'Main', icon: homeIcon },
// //     { id: 'about', label: 'About Me', icon: userIcon },
// //     { id: 'experience', label: 'Experience', icon: briefcaseIcon },
// //     { id: 'works', label: 'Works', icon: bookIcon },
// //     { id: 'projects', label: 'Projects', icon: listIcon },
// //     { id: 'skills', label: 'Skills', icon: gearIcon },
// //     { id: 'certificates', label: 'Certificates', icon: certificateIcon },
// //     { id: 'contact', label: 'Contact Me', icon: envelopeIcon }
// //   ];

// //   const projects = [
// //     {
// //       id: 1,
// //       title: 'Small Letters',
// //       description: 'A personal writing platform built for publishing essays, poems, and prose across curated series. Started as a basic blog but evolved into a full-featured content ecosystem with role-based access admin can write, manage, and control everything while readers can interact through likes, comments, and saves. Features a dynamic series system, admin dashboard, user authentication with password reset, image uploads via Cloudinary, and email notifications via Brevo.',
// //       tags: ['P.E.R.N. (PostgreSQL, Express.js, React, Node.js)', 'Cloudinary+ Brevo + Railway (Deployment)'],
// //       image: ''
// //     },
// //     {
// //       id: 2,
// //       title: 'SOSMate – Your AI first responder',
// //       description: 'SOSmate is an AI-powered emergency response web application designed to save lives by reducing the critical delay between a crisis and the arrival of professional help. It features an intelligent chatbot that predicts the nature and severity of emergencies based on user input, provides real-time first-aid instructions, and suggests appropriate SOS services (Police, Fire, Medical, Natural Disaster). The system also simulates GPS-based location sharing and family notifications, making it accessible across both PC and mobile platforms.',
// //       tags: [' React.js', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
// //       image: ''
// //     },

// //     // {
// //     //   id: 3,
// //     //   title: 'NLP Sentiment Dashboard',
// //     //   description: 'A multi-language sentiment analysis system leveraging BERT transformers for nuanced emotion detection. Processes text in 20+ languages with real-time streaming capabilities via WebSockets. Features include sentiment intensity scoring, emotion classification, and trend analysis. The dashboard visualizes sentiment patterns across social media platforms with interactive charts and detailed analytics.',
// //     //   tags: ['BERT', 'FastAPI', 'WebSocket', 'React'],
// //     //   image: '💬'
// //     // },
// //     // {
// //     //   id: 4,
// //     //   title: 'Object Detection API',
// //     //   description: 'Production-grade REST API serving YOLOv8 computer vision models at scale. Handles concurrent requests with automatic batching for optimal throughput. Supports multiple detection classes, confidence filtering, and bounding box analysis. Containerized with Docker and orchestrated with Kubernetes for high availability. Includes comprehensive logging, monitoring, and model versioning capabilities.',
// //     //   tags: ['YOLO', 'Docker', 'Kubernetes', 'FastAPI'],
// //     //   image: '🔍'
// //     // },
// //     // {
// //     //   id: 5,
// //     //   title: 'Recommendation Engine',
// //     //   description: 'Collaborative filtering system serving personalized recommendations to 1M+ active users. Implements matrix factorization and graph-based algorithms for similarity detection. Integrated with Redis for sub-100ms response times. Features cold-start solutions, A/B testing framework, and real-time model updates. Achieved 35% improvement in user engagement metrics.',
// //     //   tags: ['GraphQL', 'PostgreSQL', 'Redis', 'Node.js'],
// //     //   image: '⚡'
// //     // },
// //     // {
// //     //   id: 6,
// //     //   title: 'Reinforcement Learning Agent',
// //     //   description: 'Game-playing AI trained with policy gradient optimization using the PPO (Proximal Policy Optimization) algorithm. Successfully masters complex games through self-play training. Includes custom reward shaping, curriculum learning, and performance benchmarking. Can be adapted to solve sequential decision-making problems beyond gaming.',
// //     //   tags: ['RL', 'OpenAI Gym', 'NumPy', 'PyTorch'],
// //     //   image: '🤖'
// //     // }
// //   ];

// //   const certificates = [
// //     {
// //       title: 'AI/ML using python',
// //       issuer: 'SMSDUCAT2025- 0218',
// //       year: 'Aug 2025',
// //       // image: '🏅'
// //     },
// //     {
// //       title: ' CodeSpark - Role-based attendance analyzer',
// //       issuer: ' IITM Janakpuri',
// //       year: 'May 2025',
// //       // image: '🔵'
// //     },
// //     {
// //       title: 'Smart India Hackathon 2025 - College Finalist',
// //       issuer: 'IITM Janakpuri',
// //       year: 'Sept. 2025',
// //       // image: '📜'
// //     },
// //     {
// //       title: 'Mern Stack Development',
// //       issuer: 'IITM Janakpuri',
// //       year: 'Jan 2025',
// //       // image: '☁️'
// //     }
// //   ];

// //   // ============ DOWNLOAD RESUME ============
// //   const downloadResume = () => {
// //     const link = document.createElement('a');
// //     link.href = resume;
// //     link.download = 'Bhavesh_Resume.pdf';
// //     document.body.appendChild(link);
// //     link.click();
// //     document.body.removeChild(link);
// //   };

// //   // ============ PREVIEW RESUME ============
// //   const openResumePreview = () => {
// //     setResumePreviewOpen(true);
// //   };

// //   return (
// //     <div className="portfolio-container">
// //       {/* Sidebar Overlay */}
// //       {sidebarOpen && (
// //         <div
// //           className="sidebar-overlay"
// //           onClick={() => setSidebarOpen(false)}
// //         ></div>
// //       )}

// //       {/* Left Sidebar */}
// //       <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
// //         <div className="sidebar-content">
// //           {navItems.map((item) => (
// //             <button
// //               key={item.id}
// //               className="nav-item"
// //               onClick={() => scrollToSection(item.id)}
// //               title={item.label}
// //             >
// //               <span className="nav-icon"><img src={item.icon} alt={item.label} /></span>
// //               <span className="nav-label">{item.label}</span>
// //             </button>
// //           ))}
// //         </div>
// //       </nav>

// //       {/* Main Content */}
// //       <main className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
// //         {/* Hero Section */}
// //         <section id="hero" className="hero">
// //           <div className="hero-content">
// //             <p className="hero-title">Welcome To My Porfolio.</p>
// //             <h1 className="hero-name">Hi, I'm Bhavesh</h1>
// //             <p className="hero-title">A Full Stack Developer & AI/ML Enthusiast</p>
// //             <p className="hero-subtitle">MERN Stack | PERN | AI-Powered Applications</p>

// //             {/* ========== RESUME DOWNLOAD - AUTO LOADED FROM ASSETS ========== */}
// //             <div className="resume-section">
// //               <div className="resume-actions">
// //                 <button
// //                   className="resume-btn download-btn"
// //                   onClick={downloadResume}
// //                   title="Download your resume"
// //                 >
// //                   Download Resume
// //                 </button>
// //                 <button
// //                   className="resume-btn preview-btn"
// //                   onClick={openResumePreview}
// //                   title="Preview your resume"
// //                 >
// //                   Preview
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Resume Preview Modal */}
// //         {resumePreviewOpen && (
// //           <div className="modal-overlay" onClick={() => setResumePreviewOpen(false)}>
// //             <div className="modal-content" onClick={(e) => e.stopPropagation()}>
// //               <button
// //                 className="modal-close"
// //                 onClick={() => setResumePreviewOpen(false)}
// //               >
// //                 ✕
// //               </button>
// //               <h3 className="modal-title">Resume Preview</h3>
// //               <iframe
// //                 src={resume}
// //                 className="resume-preview"
// //                 title="Resume Preview"
// //               ></iframe>
// //             </div>
// //           </div>
// //         )}

// //         {/* About Section */}
// //         <section id="about" className="section">
// //           <h2 className="section-title">About Me</h2>
// //           <div className="about-content">
// //             <p>I'm a full-stack developer with college project experience building web applications using the MERN stack (React, Node.js, Express, MongoDB). I started by building educational platforms and e-commerce solutions, then evolved into AI/ML integration, developing intelligent systems like emergency response chatbots with real-time capabilities.</p>

// //             <p>My strength lies in bridging frontend and backend seamlessly — I don't just build interfaces, I architect complete systems from database design to deployment. I'm proficient in Python, JavaScript, Django, and emerging tools like Vercel AI SDK. More importantly, I approach every problem with a user-first mindset and a passion for clean, scalable code.</p>

// //             <p>Currently, I'm pursuing my Master's in Computer Applications (MCA) at GGSIPU while leading AI/ML projects and mentoring junior developers. I'm excited about the convergence of AI and web development — building applications that don't just work, but think. When I'm not coding, you'll find me exploring AI papers, competing in hackathons, or gathering knowledge form the developer community.</p>
// //           </div>
// //         </section>

// //         {/* Projects Section */}
// //         <section id="projects" className="section">
// //           <h2 className="section-title">Projects</h2>
// //           <div className="projects-list">
// //             {projects.map((project) => (
// //               <div key={project.id} className="project-card">
// //                 {/* PROJECT IMAGES AUTO LOADED FROM ASSETS */}
// //                 <div className="project-image-container">
// //                   {projectImages[project.id] ? (
// //                     <img
// //                       src={projectImages[project.id]}
// //                       alt={project.title}
// //                       className="project-image-uploaded"
// //                     />
// //                   ) : (
// //                     <div className="project-image">{project.image}</div>
// //                   )}
// //                 </div>

// //                 <div className="project-content">
// //                   <h3 className="project-title">{project.title}</h3>
// //                   <p className="project-description">{project.description}</p>
// //                   <div className="project-tags">
// //                     {project.tags.map((tag, idx) => (
// //                       <span key={idx} className="tag">{tag}</span>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </section>

// //         {/* Skills Section */}
// //         <section id="skills" className="section">
// //           <h2 className="section-title">Skills</h2>
// //           <div className="skills-grid">
// //             <div className="skill-category">
// //               <h4>Languages</h4>
// //               <div className="skill-list">
// //                 <span className="skill">Python</span>
// //                 <span className="skill">JavaScript</span>
// //                 <span className="skill">TypeScript (intermediate)</span>
// //                 <span className="skill">SQL</span>
// //               </div>
// //             </div>

// //             <div className="skill-category">
// //               <h4>ML & AI</h4>
// //               <div className="skill-list">
// //                 <span className="skill">PyTorch</span>
// //                 <span className="skill">TensorFlow (intermediate)</span>
// //                 <span className="skill">Scikit-Learn (intermediate)</span>
// //                 <span className="skill">Vercel AI SDK</span>
// //               </div>
// //             </div>

// //             <div className="skill-category">
// //               <h4>Web & Backend</h4>
// //               <div className="skill-list">
// //                 <span className="skill">React</span>
// //                 <span className="skill">Node.js</span>
// //                 <span className="skill">Django</span>
// //                 {/* <span className="skill">GraphQL</span> */}
// //               </div>
// //             </div>

// //             <div className="skill-category">
// //               <h4>Databases & Tools</h4>
// //               <div className="skill-list">
// //                 <span className="skill">PostgreSQL(intermediate)</span>
// //                 <span className="skill">MongoDB</span>
// //                 <span className="skill">Cloudinary</span>
// //                 {/* <span className="skill">Docker</span> */}
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Certificates Section */}
// //         <section id="certificates" className="section">
// //           <h2 className="section-title">Certificates</h2>
// //           <div className="certificates-grid">
// //             {certificates.map((cert, idx) => (
// //               <div key={idx} className="certificate-card">
// //                 <div className="cert-image-placeholder">{cert.image}</div>
// //                 <div className="cert-content">
// //                   <h3 className="cert-title">{cert.title}</h3>
// //                   <p className="cert-issuer">{cert.issuer}</p>
// //                   <p className="cert-year">{cert.year}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //           <h5>*Tap on certificate to view details*</h5>
// //         </section>



// //         {/* Contact Section */}
// //         <section id="contact" className="section">
// //           <h2 className="section-title">Contact Me</h2>
// //           <div className="contact-container">
// //             {/* CONTACT INFO - BLURRED UNTIL FORM FILLED */}
// //             <div className={`contact-info ${!isFormFilled ? 'contact-blur' : 'contact-visible'}`}>
// //               {!isFormFilled && (
// //                 <div className="blur-message">
// //                   ✨ Fill the form first! ✨
// //                 </div>
// //               )}
// //               <div className="info-item">
// //                 <span className="info-label">Email</span>
// //                 <a href="mailto:bhaveshdhiman40@gmail.com">bhaveshdhiman40@gmail.com</a>
// //               </div>

// //               <div className="info-item">
// //                 <span className="info-label">Location</span>
// //                 <p>Delhi, India</p>
// //               </div>

// //               <div className="info-item">
// //                 <span className="info-label">Social</span>
// //                 <div className="social-links">
// //                   <a href="https://linkedin.com/in/bhavesh-wtv07/" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
// //                   <a href="https://github.com/BhaveshD7" className="social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
// //                   {/* <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">Twitter</a> */}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* CONTACT FORM */}
// //             <form className="contact-form" onSubmit={handleFormSubmit}>
// //               <input
// //                 type="text"
// //                 name="name"
// //                 placeholder="Your Name"
// //                 value={formData.name}
// //                 onChange={handleFormChange}
// //                 required
// //               />
// //               <input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Your Email"
// //                 value={formData.email}
// //                 onChange={handleFormChange}
// //                 required
// //               />
// //               <input
// //                 type="text"
// //                 name="subject"
// //                 placeholder="Subject"
// //                 value={formData.subject}
// //                 onChange={handleFormChange}
// //                 required
// //               />
// //               <textarea
// //                 name="message"
// //                 placeholder="Message"
// //                 rows="5"
// //                 maxLength="500"
// //                 value={formData.message}
// //                 onChange={handleFormChange}
// //                 required
// //               ></textarea>
// //               <button
// //                 type="submit"
// //                 className="submit-btn"
// //                 disabled={!isFormFilled}
// //                 title={!isFormFilled ? "Fill all fields to submit" : "Send message"}
// //               >
// //                 {isFormFilled ? 'Send Message' : 'Fill Form First'}
// //               </button>
// //             </form>
// //           </div>
// //         </section>

// //         {/* Footer */}
// //         <footer className="footer">
// //           <p>&copy; 2024 Bhavesh Dhiman. All rights reserved.</p>
// //           <div className="footer-links">
// //             <a href="#">Privacy Policy</a>
// //             <a href="#">Terms of Service</a>
// //           </div>
// //         </footer>
// //       </main>
// //     </div>
// //   );
// // };

// // export default Portfolio;


// import React, { useState } from 'react';
// import './App.css';
// import homeIcon from './assets/home.svg';
// import userIcon from './assets/user.svg';
// import briefcaseIcon from './assets/briefcase.svg';
// import bookIcon from './assets/user.svg';
// import listIcon from './assets/list.svg';
// import gearIcon from './assets/skill.svg';
// import certificateIcon from './assets/certificate.svg';
// import envelopeIcon from './assets/contact.svg';

// // ============ IMPORT YOUR RESUME FROM ASSETS ============
// import resume from './assets/Resume.pdf';

// // ============ IMPORT YOUR PROJECT IMAGES FROM ASSETS ============
// import project1 from './assets/cert-1.jpg';
// // import project2 from './assets/project-2.jpg';

// // ============ IMPORT YOUR CERTIFICATE IMAGES FROM ASSETS ============
// import cert1 from './assets/cert-1.jpg';
// // import cert2 from './assets/cert-2.jpg';
// // import cert3 from './assets/cert-3.jpg';
// // import cert4 from './assets/cert-4.jpg';

// const Portfolio = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [resumePreviewOpen, setResumePreviewOpen] = useState(false);
//   const [projectPreviewOpen, setProjectPreviewOpen] = useState(false);
//   const [certificatePreviewOpen, setCertificatePreviewOpen] = useState(false);
//   const [selectedProjectImage, setSelectedProjectImage] = useState(null);
//   const [selectedCertificateImage, setSelectedCertificateImage] = useState(null);

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const isFormFilled = formData.name && formData.email && formData.subject && formData.message;

//   const handleFormChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     alert(`Message sent! Thanks, ${formData.name}`);
//     setFormData({ name: '', email: '', subject: '', message: '' });
//   };

//   // ============ PROJECT IMAGES OBJECT ============
//   const projectImages = {
//     1: project1,
//     // 2: project2,
//   };

//   // ============ CERTIFICATE IMAGES OBJECT ============
//   const certificateImages = {
//     0: cert1,
//     // 1: cert2,
//     // 2: cert3,
//     // 3: cert4,
//   };

//   // ============ OPEN PROJECT IMAGE MODAL ============
//   const openProjectImage = (projectId) => {
//     if (projectImages[projectId]) {
//       setSelectedProjectImage(projectImages[projectId]);
//       setProjectPreviewOpen(true);
//     }
//   };

//   // ============ OPEN CERTIFICATE IMAGE MODAL ============
//   const openCertificateImage = (certIndex) => {
//     if (certificateImages[certIndex]) {
//       setSelectedCertificateImage(certificateImages[certIndex]);
//       setCertificatePreviewOpen(true);
//     }
//   };

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setSidebarOpen(false);
//     }
//   };

//   const navItems = [
//     { id: 'hero', label: 'Main', icon: homeIcon },
//     { id: 'about', label: 'About Me', icon: userIcon },
//     { id: 'experience', label: 'Experience', icon: briefcaseIcon },
//     { id: 'works', label: 'Works', icon: bookIcon },
//     { id: 'projects', label: 'Projects', icon: listIcon },
//     { id: 'skills', label: 'Skills', icon: gearIcon },
//     { id: 'certificates', label: 'Certificates', icon: certificateIcon },
//     { id: 'contact', label: 'Contact Me', icon: envelopeIcon }
//   ];

//   const projects = [
//     {
//       id: 1,
//       title: 'Small Letters',
//       description: 'A personal writing platform built for publishing essays, poems, and prose across curated series. Started as a basic blog but evolved into a full-featured content ecosystem with role-based access admin can write, manage, and control everything while readers can interact through likes, comments, and saves. Features a dynamic series system, admin dashboard, user authentication with password reset, image uploads via Cloudinary, and email notifications via Brevo.',
//       tags: ['P.E.R.N. (PostgreSQL, Express.js, React, Node.js)', 'Cloudinary+ Brevo + Railway (Deployment)'],
//       image: ''
//     },
//     {
//       id: 2,
//       title: 'SOSMate – Your AI first responder',
//       description: 'SOSmate is an AI-powered emergency response web application designed to save lives by reducing the critical delay between a crisis and the arrival of professional help. It features an intelligent chatbot that predicts the nature and severity of emergencies based on user input, provides real-time first-aid instructions, and suggests appropriate SOS services (Police, Fire, Medical, Natural Disaster). The system also simulates GPS-based location sharing and family notifications, making it accessible across both PC and mobile platforms.',
//       tags: [' React.js', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
//       image: ''
//     },
//   ];

//   const certificates = [
//     {
//       title: 'AI/ML using python',
//       issuer: 'SMSDUCAT2025- 0218',
//       year: 'Aug 2025',
//     },
//     {
//       title: ' CodeSpark - Role-based attendance analyzer',
//       issuer: ' IITM Janakpuri',
//       year: 'May 2025',
//     },
//     {
//       title: 'Smart India Hackathon 2025 - College Finalist',
//       issuer: 'IITM Janakpuri',
//       year: 'Sept. 2025',
//     },
//     {
//       title: 'Mern Stack Development',
//       issuer: 'IITM Janakpuri',
//       year: 'Jan 2025',
//     }
//   ];

//   // ============ DOWNLOAD RESUME ============
//   const downloadResume = () => {
//     const link = document.createElement('a');
//     link.href = resume;
//     link.download = 'Bhavesh_Resume.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   // ============ PREVIEW RESUME ============
//   const openResumePreview = () => {
//     setResumePreviewOpen(true);
//   };

//   return (
//     <div className="portfolio-container">
//       {/* Sidebar Overlay */}
//       {sidebarOpen && (
//         <div
//           className="sidebar-overlay"
//           onClick={() => setSidebarOpen(false)}
//         ></div>
//       )}

//       {/* Left Sidebar */}
//       <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
//         <div className="sidebar-content">
//           {navItems.map((item) => (
//             <button
//               key={item.id}
//               className="nav-item"
//               onClick={() => scrollToSection(item.id)}
//               title={item.label}
//             >
//               <span className="nav-icon"><img src={item.icon} alt={item.label} /></span>
//               <span className="nav-label">{item.label}</span>
//             </button>
//           ))}
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
//         {/* Hero Section */}
//         <section id="hero" className="hero">
//           <div className="hero-content">
//             <p className="hero-title">Welcome To My Porfolio.</p>
//             <h1 className="hero-name">Hi, I'm Bhavesh</h1>
//             <p className="hero-title">A Full Stack Developer & AI/ML Enthusiast</p>
//             <p className="hero-subtitle">MERN Stack | PERN | AI-Powered Applications</p>

//             {/* ========== RESUME DOWNLOAD ========== */}
//             <div className="resume-section">
//               <div className="resume-actions">
//                 <button
//                   className="resume-btn download-btn"
//                   onClick={downloadResume}
//                   title="Download your resume"
//                 >
//                   Download Resume
//                 </button>
//                 <button
//                   className="resume-btn preview-btn"
//                   onClick={openResumePreview}
//                   title="Preview your resume"
//                 >
//                   Preview
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Resume Preview Modal */}
//         {resumePreviewOpen && (
//           <div className="modal-overlay" onClick={() => setResumePreviewOpen(false)}>
//             <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//               <button
//                 className="modal-close"
//                 onClick={() => setResumePreviewOpen(false)}
//               >
//                 ✕
//               </button>
//               <h3 className="modal-title">Resume Preview</h3>
//               <iframe
//                 src={resume}
//                 className="resume-preview"
//                 title="Resume Preview"
//               ></iframe>
//             </div>
//           </div>
//         )}

//         {/* Project Preview Modal */}
//         {projectPreviewOpen && (
//           <div className="modal-overlay" onClick={() => setProjectPreviewOpen(false)}>
//             <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//               <button
//                 className="modal-close"
//                 onClick={() => setProjectPreviewOpen(false)}
//               >
//                 ✕
//               </button>
//               <h3 className="modal-title">Project Screenshot</h3>
//               <img
//                 src={selectedProjectImage}
//                 alt="Project Preview"
//                 className="project-preview-img"
//               />
//             </div>
//           </div>
//         )}

//         {/* Certificate Preview Modal */}
//         {certificatePreviewOpen && (
//           <div className="modal-overlay" onClick={() => setCertificatePreviewOpen(false)}>
//             <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//               <button
//                 className="modal-close"
//                 onClick={() => setCertificatePreviewOpen(false)}
//               >
//                 ✕
//               </button>
//               <h3 className="modal-title">Certificate</h3>
//               <img
//                 src={selectedCertificateImage}
//                 alt="Certificate Preview"
//                 className="certificate-preview-img"
//               />
//             </div>
//           </div>
//         )}

//         {/* About Section */}
//         <section id="about" className="section">
//           <h2 className="section-title">About Me</h2>
//           <div className="about-content">
//             <p>I'm a full-stack developer with college project experience building web applications using the MERN stack (React, Node.js, Express, MongoDB). I started by building educational platforms and e-commerce solutions, then evolved into AI/ML integration, developing intelligent systems like emergency response chatbots with real-time capabilities.</p>

//             <p>My strength lies in bridging frontend and backend seamlessly — I don't just build interfaces, I architect complete systems from database design to deployment. I'm proficient in Python, JavaScript, Django, and emerging tools like Vercel AI SDK. More importantly, I approach every problem with a user-first mindset and a passion for clean, scalable code.</p>

//             <p>Currently, I'm pursuing my Master's in Computer Applications (MCA) at GGSIPU while leading AI/ML projects and mentoring junior developers. I'm excited about the convergence of AI and web development — building applications that don't just work, but think. When I'm not coding, you'll find me exploring AI papers, competing in hackathons, or gathering knowledge form the developer community.</p>
//           </div>
//         </section>

//         {/* Projects Section */}
//         <section id="projects" className="section">
//           <h2 className="section-title">Projects</h2>
//           <div className="projects-list">
//             {projects.map((project) => (
//               <div key={project.id} className="project-card">
//                 {/* PROJECT IMAGES WITH VIEW BUTTON */}
//                 <div className="project-image-container">
//                   {projectImages[project.id] ? (
//                     <>
//                       <img
//                         src={projectImages[project.id]}
//                         alt={project.title}
//                         className="project-image-uploaded"
//                       />
//                       <button
//                         className="view-image-btn"
//                         onClick={() => openProjectImage(project.id)}
//                         title="View full screenshot"
//                       >
//                         👁️ View
//                       </button>
//                     </>
//                   ) : (
//                     <div className="project-image">{project.image}</div>
//                   )}
//                 </div>

//                 <div className="project-content">
//                   <h3 className="project-title">{project.title}</h3>
//                   <p className="project-description">{project.description}</p>
//                   <div className="project-tags">
//                     {project.tags.map((tag, idx) => (
//                       <span key={idx} className="tag">{tag}</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Skills Section */}
//         <section id="skills" className="section">
//           <h2 className="section-title">Skills</h2>
//           <div className="skills-grid">
//             <div className="skill-category">
//               <h4>Languages</h4>
//               <div className="skill-list">
//                 <span className="skill">Python</span>
//                 <span className="skill">JavaScript</span>
//                 <span className="skill">TypeScript (intermediate)</span>
//                 <span className="skill">SQL</span>
//               </div>
//             </div>

//             <div className="skill-category">
//               <h4>ML & AI</h4>
//               <div className="skill-list">
//                 <span className="skill">PyTorch</span>
//                 <span className="skill">TensorFlow (intermediate)</span>
//                 <span className="skill">Scikit-Learn (intermediate)</span>
//                 <span className="skill">Vercel AI SDK</span>
//               </div>
//             </div>

//             <div className="skill-category">
//               <h4>Web & Backend</h4>
//               <div className="skill-list">
//                 <span className="skill">React</span>
//                 <span className="skill">Node.js</span>
//                 <span className="skill">Django</span>
//               </div>
//             </div>

//             <div className="skill-category">
//               <h4>Databases & Tools</h4>
//               <div className="skill-list">
//                 <span className="skill">PostgreSQL(intermediate)</span>
//                 <span className="skill">MongoDB</span>
//                 <span className="skill">Cloudinary</span>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Certificates Section */}
//         <section id="certificates" className="section">
//           <h2 className="section-title">Certificates</h2>
//           <div className="certificates-grid">
//             {certificates.map((cert, idx) => (
//               <div
//                 key={idx}
//                 className="certificate-card"
//                 onClick={() => openCertificateImage(idx)}
//                 style={{ cursor: 'pointer' }}
//               >
//                 <div className="cert-image-placeholder">{cert.image}</div>
//                 <div className="cert-content">
//                   <h3 className="cert-title">{cert.title}</h3>
//                   <p className="cert-issuer">{cert.issuer}</p>
//                   <p className="cert-year">{cert.year}</p>
//                 </div>
//                 <div className="cert-view-overlay">
//                   👁️ Click to View
//                 </div>
//               </div>
//             ))}
//           </div>
//           <h5>*Click certificate to view details*</h5>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="section">
//           <h2 className="section-title">Contact Me</h2>
//           <div className="contact-container">
//             {/* CONTACT INFO - BLURRED UNTIL FORM FILLED */}
//             <div className={`contact-info ${!isFormFilled ? 'contact-blur' : 'contact-visible'}`}>
//               {!isFormFilled && (
//                 <div className="blur-message">
//                   ✨ Fill the form first! ✨
//                 </div>
//               )}
//               <div className="info-item">
//                 <span className="info-label">Email</span>
//                 <a href="mailto:bhaveshdhiman40@gmail.com">bhaveshdhiman40@gmail.com</a>
//               </div>

//               <div className="info-item">
//                 <span className="info-label">Location</span>
//                 <p>Delhi, India</p>
//               </div>

//               <div className="info-item">
//                 <span className="info-label">Social</span>
//                 <div className="social-links">
//                   <a href="https://linkedin.com/in/bhavesh-wtv07/" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
//                   <a href="https://github.com/BhaveshD7" className="social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
//                 </div>
//               </div>
//             </div>

//             {/* CONTACT FORM */}
//             <form className="contact-form" onSubmit={handleFormSubmit}>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleFormChange}
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleFormChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject"
//                 value={formData.subject}
//                 onChange={handleFormChange}
//                 required
//               />
//               <textarea
//                 name="message"
//                 placeholder="Message"
//                 rows="5"
//                 maxLength="500"
//                 value={formData.message}
//                 onChange={handleFormChange}
//                 required
//               ></textarea>
//               <button
//                 type="submit"
//                 className="submit-btn"
//                 disabled={!isFormFilled}
//                 title={!isFormFilled ? "Fill all fields to submit" : "Send message"}
//               >
//                 {isFormFilled ? 'Send Message' : 'Fill Form First'}
//               </button>
//             </form>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="footer">
//           <p>&copy; 2024 Bhavesh Dhiman. All rights reserved.</p>
//           <div className="footer-links">
//             <a href="#">Privacy Policy</a>
//             <a href="#">Terms of Service</a>
//           </div>
//         </footer>
//       </main>
//     </div>
//   );
// };

// export default Portfolio;


import React, { useState } from 'react';
import './App.css';
import homeIcon from './assets/home.svg';
import userIcon from './assets/user.svg';
import briefcaseIcon from './assets/briefcase.svg';
import bookIcon from './assets/user.svg';
import listIcon from './assets/list.svg';
import gearIcon from './assets/skill.svg';
import certificateIcon from './assets/certificate.svg';
import envelopeIcon from './assets/contact.svg';

// ============ IMPORT YOUR RESUME FROM ASSETS ============
import resume from './assets/Resume.pdf';

// ============ IMPORT PROJECT 1 IMAGES (MULTIPLE) ============
import project1img1 from './assets/project-1-img-1.jpg';
import project1img2 from './assets/project-1-img-2.jpg';
// import project1img3 from './assets/project-1-img-3.jpg';

// ============ IMPORT PROJECT 2 IMAGES (MULTIPLE) ============
// import project2img1 from './assets/project-2-img-1.jpg';
// import project2img2 from './assets/project-2-img-2.jpg';
// import project2img3 from './assets/project-2-img-3.jpg';

// ============ IMPORT YOUR CERTIFICATE IMAGES FROM ASSETS ============
import cert1 from './assets/cert-1.jpg';
// import cert2 from './assets/cert-2.jpg';
// import cert3 from './assets/cert-3.jpg';
// import cert4 from './assets/cert-4.jpg';

const Portfolio = () => {
  // ============ STATE MANAGEMENT ============
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [resumePreviewOpen, setResumePreviewOpen] = useState(false);
  const [projectGalleryOpen, setProjectGalleryOpen] = useState(false);
  const [certificatePreviewOpen, setCertificatePreviewOpen] = useState(false);
  const [selectedProjectImages, setSelectedProjectImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCertificateImage, setSelectedCertificateImage] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const isFormFilled = formData.name.trim() !== '' && formData.email.trim() !== '' &&
    formData.subject.trim() !== '' && formData.message.trim() !== '';

  // ============ FORM HANDLERS ============
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Message noted! Thanks, ${formData.name}. (This is just for fun - no backend 😄)`);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setFormSubmitted(false);
  };

  // ============ PROJECT IMAGES OBJECT - MULTIPLE IMAGES PER PROJECT ============
  const projectImages = {
    1: [project1img1, project1img2],
    // 2: [project2img1, project2img2, project2img3],
  };

  // ============ CERTIFICATE IMAGES OBJECT ============
  const certificateImages = {
    0: cert1,
    // 1: cert2,
    // 2: cert3,
    // 3: cert4,
  };

  // ============ GALLERY NAVIGATION ============
  const openProjectGallery = (projectId) => {
    if (projectImages[projectId] && projectImages[projectId].length > 0) {
      setSelectedProjectImages(projectImages[projectId]);
      setCurrentImageIndex(0);
      setProjectGalleryOpen(true);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedProjectImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + selectedProjectImages.length) % selectedProjectImages.length);
  };

  // ============ CERTIFICATE IMAGE MODAL ============
  const openCertificateImage = (certIndex) => {
    if (certificateImages[certIndex]) {
      setSelectedCertificateImage(certificateImages[certIndex]);
      setCertificatePreviewOpen(true);
    }
  };

  // ============ SCROLL TO SECTION ============
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setSidebarOpen(false);
    }
  };

  // ============ RESUME HANDLERS ============
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Bhavesh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openResumePreview = () => {
    setResumePreviewOpen(true);
  };

  // ============ NAVIGATION ITEMS ============
  const navItems = [
    { id: 'hero', label: 'Main', icon: homeIcon },
    { id: 'about', label: 'About Me', icon: userIcon },
    { id: 'experience', label: 'Experience', icon: briefcaseIcon },
    { id: 'works', label: 'Works', icon: bookIcon },
    { id: 'projects', label: 'Projects', icon: listIcon },
    { id: 'skills', label: 'Skills', icon: gearIcon },
    { id: 'certificates', label: 'Certificates', icon: certificateIcon },
    { id: 'contact', label: 'Contact Me', icon: envelopeIcon }
  ];

  // ============ PROJECTS DATA ============
  const projects = [
    {
      id: 1,
      title: 'Small Letters',
      description: 'A personal writing platform built for publishing essays, poems, and prose across curated series. Started as a basic blog but evolved into a full-featured content ecosystem with role-based access admin can write, manage, and control everything while readers can interact through likes, comments, and saves. Features a dynamic series system, admin dashboard, user authentication with password reset, image uploads via Cloudinary, and email notifications via Brevo.',
      tags: ['P.E.R.N. (PostgreSQL, Express.js, React, Node.js)', 'Cloudinary+ Brevo + Railway (Deployment)'],
      image: ''
    },
    {
      id: 2,
      title: 'SOSMate – Your AI first responder',
      description: 'SOSmate is an AI-powered emergency response web application designed to save lives by reducing the critical delay between a crisis and the arrival of professional help. It features an intelligent chatbot that predicts the nature and severity of emergencies based on user input, provides real-time first-aid instructions, and suggests appropriate SOS services (Police, Fire, Medical, Natural Disaster). The system also simulates GPS-based location sharing and family notifications, making it accessible across both PC and mobile platforms.',
      tags: [' React.js', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
      image: ''
    },
  ];
  // ============ CERTIFICATES DATA ============
  const certificates = [
    {
      title: 'AI/ML using python',
      issuer: 'SMSDUCAT2025- 0218',
      year: 'Aug 2025',
    },
    {
      title: ' CodeSpark - Role-based attendance analyzer',
      issuer: ' IITM Janakpuri',
      year: 'May 2025',
    },
    {
      title: 'Smart India Hackathon 2025 - College Finalist',
      issuer: 'IITM Janakpuri',
      year: 'Sept. 2025',
    },
    {
      title: 'Mern Stack Development',
      issuer: 'IITM Janakpuri',
      year: 'Jan 2025',
    }
  ];

  return (
    <div className="portfolio-container">
      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        title="Toggle menu"
      >
        ☰
      </button>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Left Sidebar */}
      <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="nav-item"
              onClick={() => scrollToSection(item.id)}
              title={item.label}
            >
              <span className="nav-icon"><img src={item.icon} alt={item.label} /></span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
        {/* Hero Section */}
        <section id="hero" className="hero">
          <div className="hero-content">
            <p className="hero-title">Welcome To My Porfolio.</p>
            <h1 className="hero-name">Hi, I'm Bhavesh</h1>
            <p className="hero-title">A Full Stack Developer & AI/ML Enthusiast</p>
            <p className="hero-subtitle">MERN Stack | PERN | AI-Powered Applications</p>

            {/* ========== RESUME SECTION ========== */}
            <div className="resume-section">
              <div className="resume-actions">
                <button
                  className="resume-btn download-btn"
                  onClick={downloadResume}
                  title="Download your resume"
                >
                  Download Resume
                </button>
                <button
                  className="resume-btn preview-btn"
                  onClick={openResumePreview}
                  title="Preview your resume"
                >
                  Preview
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Preview Modal */}
        {resumePreviewOpen && (
          <div className="modal-overlay" onClick={() => setResumePreviewOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close"
                onClick={() => setResumePreviewOpen(false)}
              >
                ✕
              </button>
              <h3 className="modal-title">Resume Preview</h3>
              <iframe
                src={resume}
                className="resume-preview"
                title="Resume Preview"
              ></iframe>
            </div>
          </div>
        )}

        {/* Project Gallery Modal */}
        {projectGalleryOpen && (
          <div className="modal-overlay" onClick={() => setProjectGalleryOpen(false)}>
            <div className="modal-content gallery-modal" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close"
                onClick={() => setProjectGalleryOpen(false)}
              >
                ✕
              </button>
              <h3 className="modal-title">Project Gallery</h3>
              <div className="gallery-container">
                <button
                  className="gallery-nav-btn prev"
                  onClick={previousImage}
                  title="Previous image"
                >
                  ❮
                </button>

                <img
                  src={selectedProjectImages[currentImageIndex]}
                  alt={`Project Screenshot ${currentImageIndex + 1}`}
                  className="gallery-image"
                />

                <button
                  className="gallery-nav-btn next"
                  onClick={nextImage}
                  title="Next image"
                >
                  ❯
                </button>
              </div>

              <div className="gallery-counter">
                Image {currentImageIndex + 1} of {selectedProjectImages.length}
              </div>

              <div className="gallery-thumbnails">
                {selectedProjectImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className={`thumbnail ${idx === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Certificate Preview Modal */}
        {certificatePreviewOpen && (
          <div className="modal-overlay" onClick={() => setCertificatePreviewOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close"
                onClick={() => setCertificatePreviewOpen(false)}
              >
                ✕
              </button>
              <h3 className="modal-title">Certificate</h3>
              <img
                src={selectedCertificateImage}
                alt="Certificate Preview"
                className="certificate-preview-img"
              />
            </div>
          </div>
        )}

        {/* About Section */}
        <section id="about" className="section">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>I'm a full-stack developer with college project experience building web applications using the MERN stack (React, Node.js, Express, MongoDB). I started by building educational platforms and e-commerce solutions, then evolved into AI/ML integration, developing intelligent systems like emergency response chatbots with real-time capabilities.</p>

            <p>My strength lies in bridging frontend and backend seamlessly — I don't just build interfaces, I architect complete systems from database design to deployment. I'm proficient in Python, JavaScript, Django, and emerging tools like Vercel AI SDK. More importantly, I approach every problem with a user-first mindset and a passion for clean, scalable code.</p>

            <p>Currently, I'm pursuing my Master's in Computer Applications (MCA) at GGSIPU while leading AI/ML projects and mentoring junior developers. I'm excited about the convergence of AI and web development — building applications that don't just work, but think. When I'm not coding, you'll find me exploring AI papers, competing in hackathons, or gathering knowledge form the developer community.</p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h2 className="section-title">Projects <br/> <small>**Tap on image to view project screenshots**</small></h2>
          <div className="projects-list">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                {/* PROJECT IMAGES WITH GALLERY VIEW BUTTON */}
                <div className="project-image-container">
                  {projectImages[project.id] && projectImages[project.id].length > 0 ? (
                    <>
                      <img
                        src={projectImages[project.id][0]}
                        alt={project.title}
                        className="project-image-uploaded"
                      />
                      <button
                        className="view-image-btn"
                        onClick={() => openProjectGallery(project.id)}
                        title="View all project screenshots"
                      >
                        👁️ View Gallery ({projectImages[project.id].length})
                      </button>
                    </>
                  ) : (
                    <div className="project-image">{project.image}</div>
                  )}
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Languages</h4>
              <div className="skill-list">
                <span className="skill">Python</span>
                <span className="skill">JavaScript</span>
                <span className="skill">TypeScript (intermediate)</span>
                <span className="skill">SQL</span>
              </div>
            </div>

            <div className="skill-category">
              <h4>ML & AI</h4>
              <div className="skill-list">
                <span className="skill">PyTorch</span>
                <span className="skill">TensorFlow (intermediate)</span>
                <span className="skill">Scikit-Learn (intermediate)</span>
                <span className="skill">Vercel AI SDK</span>
              </div>
            </div>

            <div className="skill-category">
              <h4>Web & Backend</h4>
              <div className="skill-list">
                <span className="skill">React</span>
                <span className="skill">Node.js</span>
                <span className="skill">Django</span>
              </div>
            </div>

            <div className="skill-category">
              <h4>Databases & Tools</h4>
              <div className="skill-list">
                <span className="skill">PostgreSQL(intermediate)</span>
                <span className="skill">MongoDB</span>
                <span className="skill">Cloudinary</span>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="section">
          <h2 className="section-title">Certificates <br/> <small>*Tap on card to view certificate*</small></h2>
          <div className="certificates-grid">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="certificate-card"
                onClick={() => openCertificateImage(idx)}
                style={{ cursor: 'pointer' }}
              >
                <div className="cert-image-placeholder">{cert.image}</div>
                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-year">{cert.year}</p>
                </div>
                <div className="cert-view-overlay">
                  👁️ Click to View
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-container">
            {/* CONTACT INFO - BLURRED UNTIL FORM FILLED */}
            <div className={`contact-info ${!isFormFilled ? 'contact-blur' : 'contact-visible'}`}>
              {!isFormFilled && (
                <div className="blur-message">
                  ✨ Fill the form first! ✨
                </div>
              )}
              <div className="info-item">
                <span className="info-label">Email</span>
                <a href="mailto:bhaveshdhiman40@gmail.com">bhaveshdhiman40@gmail.com</a>
              </div>

              <div className="info-item">
                <span className="info-label">Phone</span>
                <p>+91 9868647096</p>
              </div>

              <div className="info-item">
                <span className="info-label">Location</span>
                <p>Delhi, India</p>
              </div>

              <div className="info-item">
                <span className="info-label">Social</span>
                <div className="social-links">
                  <a href="https://linkedin.com/in/bhavesh-wtv07/" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="https://github.com/BhaveshD7" className="social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleFormChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                maxLength="500"
                value={formData.message}
                onChange={handleFormChange}
                required
              ></textarea>
              <button
                type="submit"
                className="submit-btn"
                disabled={!isFormFilled}
                title={!isFormFilled ? "Fill all fields to submit" : "Send message"}
              >
                {isFormFilled ? '✉️ Send Message' : '⏳ Fill Form First'}
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2024 Bhavesh Dhiman. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Portfolio;

//   // ============ CERTIFICATES DATA ============
//   const certificates = [
//     {
//       title: 'AI/ML using python',
//       issuer: 'SMSDUCAT2025- 0218',
//       year: 'Aug 2025',
//     },
//     {
//       title: ' CodeSpark - Role-based attendance analyzer',
//       issuer: ' IITM Janakpuri',
//       year: 'May 2025',
//     },
//     {
//       title: 'Smart India Hackathon 2025 - College Finalist',
//       issuer: 'IITM Janakpuri',
//       year: 'Sept. 2025',
//     },
//     {
//       title: 'Mern Stack Development',
//       issuer: 'IITM Janakpuri',
//       year: 'Jan 2025',
//     }
//   ];

//   return (
//     <div className="portfolio-container">
//       {/* Sidebar Overlay */}
//       {sidebarOpen && (
//         <div
//           className="sidebar-overlay"
//           onClick={() => setSidebarOpen(false)}
//         ></div>
//       )}

//       {/* Left Sidebar */}
//       <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
//         <div className="sidebar-content">
//           {navItems.map((item) => (
//             <button
//               key={item.id}
//               className="nav-item"
//               onClick={() => scrollToSection(item.id)}
//               title={item.label}
//             >
//               <span className="nav-icon"><img src={item.icon} alt={item.label} /></span>
//               <span className="nav-label">{item.label}</span>
//             </button>
//           ))}
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
//         {/* Hero Section */}
//         <section id="hero" className="hero">
//           <div className="hero-content">
//             <p className="hero-title">Welcome To My Porfolio.</p>
//             <h1 className="hero-name">Hi, I'm Bhavesh</h1>
//             <p className="hero-title">A Full Stack Developer & AI/ML Enthusiast</p>
//             <p className="hero-subtitle">MERN Stack | PERN | AI-Powered Applications</p>

//             {/* ========== RESUME SECTION ========== */}
//             <div className="resume-section">
//               <div className="resume-actions">
//                 <button
//                   className="resume-btn download-btn"
//                   onClick={downloadResume}
//                   title="Download your resume"
//                 >
//                   Download Resume
//                 </button>
//                 <button
//                   className="resume-btn preview-btn"
//                   onClick={openResumePreview}
//                   title="Preview your resume"
//                 >
//                   Preview
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Resume Preview Modal */}
//         {resumePreviewOpen && (
//           <div className="modal-overlay" onClick={() => setResumePreviewOpen(false)}>
//             <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//               <button
//                 className="modal-close"
//                 onClick={() => setResumePreviewOpen(false)}
//               >
//                 ✕
//               </button>
//               <h3 className="modal-title">Resume Preview</h3>
//               <iframe
//                 src={resume}
//                 className="resume-preview"
//                 title="Resume Preview"
//               ></iframe>
//             </div>
//           </div>
//         )}

//         {/* Project Gallery Modal */}
//         {projectGalleryOpen && (
//           <div className="modal-overlay" onClick={() => setProjectGalleryOpen(false)}>
//             <div className="modal-content gallery-modal" onClick={(e) => e.stopPropagation()}>
//               <button
//                 className="modal-close"
//                 onClick={() => setProjectGalleryOpen(false)}
//               >
//                 ✕
//               </button>
//               <h3 className="modal-title">Project Gallery</h3>
//               <div className="gallery-container">
//                 <button
//                   className="gallery-nav-btn prev"
//                   onClick={previousImage}
//                   title="Previous image"
//                 >
//                   ❮
//                 </button>

//                 <img
//                   src={selectedProjectImages[currentImageIndex]}
//                   alt={`Project Screenshot ${currentImageIndex + 1}`}
//                   className="gallery-image"
//                 />

//                 <button
//                   className="gallery-nav-btn next"
//                   onClick={nextImage}
//                   title="Next image"
//                 >
//                   ❯
//                 </button>
//               </div>

//               <div className="gallery-counter">
//                 Image {currentImageIndex + 1} of {selectedProjectImages.length}
//               </div>

//               <div className="gallery-thumbnails">
//                 {selectedProjectImages.map((img, idx) => (
//                   <img
//                     key={idx}
//                     src={img}
//                     alt={`Thumbnail ${idx + 1}`}
//                     className={`thumbnail ${idx === currentImageIndex ? 'active' : ''}`}
//                     onClick={() => setCurrentImageIndex(idx)}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Certificate Preview Modal */}
//         {certificatePreviewOpen && (
//           <div className="modal-overlay" onClick={() => setCertificatePreviewOpen(false)}>
//             <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//               <button
//                 className="modal-close"
//                 onClick={() => setCertificatePreviewOpen(false)}
//               >
//                 ✕
//               </button>
//               <h3 className="modal-title">Certificate</h3>
//               <img
//                 src={selectedCertificateImage}
//                 alt="Certificate Preview"
//                 className="certificate-preview-img"
//               />
//             </div>
//           </div>
//         )}

//         {/* About Section */}
//         <section id="about" className="section">
//           <h2 className="section-title">About Me</h2>
//           <div className="about-content">
//             <p>I'm a full-stack developer with college project experience building web applications using the MERN stack (React, Node.js, Express, MongoDB). I started by building educational platforms and e-commerce solutions, then evolved into AI/ML integration, developing intelligent systems like emergency response chatbots with real-time capabilities.</p>

//             <p>My strength lies in bridging frontend and backend seamlessly — I don't just build interfaces, I architect complete systems from database design to deployment. I'm proficient in Python, JavaScript, Django, and emerging tools like Vercel AI SDK. More importantly, I approach every problem with a user-first mindset and a passion for clean, scalable code.</p>

//             <p>Currently, I'm pursuing my Master's in Computer Applications (MCA) at GGSIPU while leading AI/ML projects and mentoring junior developers. I'm excited about the convergence of AI and web development — building applications that don't just work, but think. When I'm not coding, you'll find me exploring AI papers, competing in hackathons, or gathering knowledge form the developer community.</p>
//           </div>
//         </section>

//         {/* Projects Section */}
//         <section id="projects" className="section">
//           <h2 className="section-title">Projects</h2>
//           <div className="projects-list">
//             {projects.map((project) => (
//               <div key={project.id} className="project-card">
//                 {/* PROJECT IMAGES WITH GALLERY VIEW BUTTON */}
//                 <div className="project-image-container">
//                   {projectImages[project.id] && projectImages[project.id].length > 0 ? (
//                     <>
//                       <img
//                         src={projectImages[project.id][0]}
//                         alt={project.title}
//                         className="project-image-uploaded"
//                       />
//                       <button
//                         className="view-image-btn"
//                         onClick={() => openProjectGallery(project.id)}
//                         title="View all project screenshots"
//                       >
//                         👁️ View Gallery ({projectImages[project.id].length})
//                       </button>
//                     </>
//                   ) : (
//                     <div className="project-image">{project.image}</div>
//                   )}
//                 </div>

//                 <div className="project-content">
//                   <h3 className="project-title">{project.title}</h3>
//                   <p className="project-description">{project.description}</p>
//                   <div className="project-tags">
//                     {project.tags.map((tag, idx) => (
//                       <span key={idx} className="tag">{tag}</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Skills Section */}
//         <section id="skills" className="section">
//           <h2 className="section-title">Skills</h2>
//           <div className="skills-grid">
//             <div className="skill-category">
//               <h4>Languages</h4>
//               <div className="skill-list">
//                 <span className="skill">Python</span>
//                 <span className="skill">JavaScript</span>
//                 <span className="skill">TypeScript (intermediate)</span>
//                 <span className="skill">SQL</span>
//               </div>
//             </div>

//             <div className="skill-category">
//               <h4>ML & AI</h4>
//               <div className="skill-list">
//                 <span className="skill">PyTorch</span>
//                 <span className="skill">TensorFlow (intermediate)</span>
//                 <span className="skill">Scikit-Learn (intermediate)</span>
//                 <span className="skill">Vercel AI SDK</span>
//               </div>
//             </div>

//             <div className="skill-category">
//               <h4>Web & Backend</h4>
//               <div className="skill-list">
//                 <span className="skill">React</span>
//                 <span className="skill">Node.js</span>
//                 <span className="skill">Django</span>
//               </div>
//             </div>

//             <div className="skill-category">
//               <h4>Databases & Tools</h4>
//               <div className="skill-list">
//                 <span className="skill">PostgreSQL(intermediate)</span>
//                 <span className="skill">MongoDB</span>
//                 <span className="skill">Cloudinary</span>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Certificates Section */}
//         <section id="certificates" className="section">
//           <h2 className="section-title">Certificates</h2>
//           <div className="certificates-grid">
//             {certificates.map((cert, idx) => (
//               <div
//                 key={idx}
//                 className="certificate-card"
//                 onClick={() => openCertificateImage(idx)}
//                 style={{ cursor: 'pointer' }}
//               >
//                 <div className="cert-image-placeholder">{cert.image}</div>
//                 <div className="cert-content">
//                   <h3 className="cert-title">{cert.title}</h3>
//                   <p className="cert-issuer">{cert.issuer}</p>
//                   <p className="cert-year">{cert.year}</p>
//                 </div>
//                 <div className="cert-view-overlay">
//                   👁️ Click to View
//                 </div>
//               </div>
//             ))}
//           </div>
//           <h5>*Click certificate to view details*</h5>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="section">
//           <h2 className="section-title">Contact Me</h2>
//           <div className="contact-container">
//             {/* CONTACT INFO - BLURRED UNTIL FORM FILLED */}
//             <div className={`contact-info ${!isFormFilled ? 'contact-blur' : 'contact-visible'}`}>
//               {!isFormFilled && (
//                 <div className="blur-message">
//                   ✨ Fill the form first! ✨
//                 </div>
//               )}
//               <div className="info-item">
//                 <span className="info-label">Email</span>
//                 <a href="mailto:bhaveshdhiman40@gmail.com">bhaveshdhiman40@gmail.com</a>
//               </div>

//               <div className="info-item">
//                 <span className="info-label">Location</span>
//                 <p>Delhi, India</p>
//               </div>

//               <div className="info-item">
//                 <span className="info-label">Social</span>
//                 <div className="social-links">
//                   <a href="https://linkedin.com/in/bhavesh-wtv07/" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
//                   <a href="https://github.com/BhaveshD7" className="social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
//                 </div>
//               </div>
//             </div>

//             {/* CONTACT FORM */}
//             <form className="contact-form" onSubmit={handleFormSubmit}>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleFormChange}
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleFormChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject"
//                 value={formData.subject}
//                 onChange={handleFormChange}
//                 required
//               />
//               <textarea
//                 name="message"
//                 placeholder="Message"
//                 rows="5"
//                 maxLength="500"
//                 value={formData.message}
//                 onChange={handleFormChange}
//                 required
//               ></textarea>
//               <button
//                 type="submit"
//                 className="submit-btn"
//                 disabled={!isFormFilled}
//                 title={!isFormFilled ? "Fill all fields to submit" : "Send message"}
//               >
//                 {isFormFilled ? '✉️ Send Message' : '⏳ Fill Form First'}
//               </button>
//             </form>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="footer">
//           <p>&copy; 2024 Bhavesh Dhiman. All rights reserved.</p>
//           <div className="footer-links">
//             <a href="#">Privacy Policy</a>
//             <a href="#">Terms of Service</a>
//           </div>
//         </footer>
//       </main>
//     </div>
//   );
// };

// export default Portfolio;