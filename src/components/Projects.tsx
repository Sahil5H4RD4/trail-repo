import './Projects.css';

export default function Projects() {
  const projectList = [
    { title: "Solar System 3D", type: "Three.js Experience", link: "#" },
    { title: "E-commerce Platform", type: "Full Stack App", link: "#" },
    { title: "Dashboard Analytics", type: "Data Vis", link: "#" }
  ];

  return (
    <div className="projects-section">
      <h2 className="section-title">Some Things I've Built</h2>
      <div className="title-underline"></div>
      
      <div className="projects-grid">
        {projectList.map((proj, idx) => (
          <div key={idx} className="project-card">
            <div className="card-inner">
              <span className="project-type">{proj.type}</span>
              <h3>{proj.title}</h3>
              <p>A web application built with modern technologies focusing on performant, interactive experiences.</p>
              <a href={proj.link} className="project-link">View Project →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
