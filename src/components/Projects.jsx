import React from "react";

function Projects({ projects }) {
  return (
    <div className="projects">
      <h2 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.split(",").map((tech) => (
                <span className="tech-tag" key={tech}>{tech.trim()}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;