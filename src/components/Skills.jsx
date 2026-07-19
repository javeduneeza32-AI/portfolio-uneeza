import React from "react";

const skills = ["React", "JavaScript", "Python", "Node.js", "Tailwind", "Supabase"];

function Skills() {
  return (
    <div className="skills">
      <h2 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>Tech Stack</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;