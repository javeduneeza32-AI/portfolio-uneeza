import React, { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import FairyIntro from "../components/FairyIntro";

function Admin() {
  // Portfolio state
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [bio, setBio] = useState("");

  // Project state
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectTech, setProjectTech] = useState("");
  const [projectGithub, setProjectGithub] = useState("");
  const [projectDemo, setProjectDemo] = useState("");

  useEffect(() => {
    loadPortfolio();
  }, []);

  async function loadPortfolio() {
    const { data } = await supabase
      .from("portfolio")
      .select("*")
      .eq("id", 1)
      .single();

    setName(data.name);
    setTitle(data.title);
    setBio(data.bio);
  }

  async function updatePortfolio() {
    await supabase
      .from("portfolio")
      .update({
        name,
        title,
        bio,
      })
      .eq("id", 1);

    // Trigger homepage refresh
    localStorage.setItem("portfolioUpdated", Date.now().toString());
    alert("Portfolio Updated! 🌸");
  }

  async function addProject() {
    // Check required fields
    if (!projectTitle || !projectDescription || !projectTech) {
      alert("Please fill in Title, Description, and Tech Stack! 🌷");
      return;
    }

    await supabase.from("projects").insert({
      title: projectTitle,
      description: projectDescription,
      tech: projectTech,
      github: projectGithub || "#",
      demo: projectDemo || "#",
    });

    localStorage.setItem("portfolioUpdated", Date.now().toString());
    alert("Project Added! 🧚");

    // Clear form
    setProjectTitle("");
    setProjectDescription("");
    setProjectTech("");
    setProjectGithub("");
    setProjectDemo("");
  }

  return (
    <>
      <FairyIntro />
      <div className="admin-container">
        <h1>🌸 Admin Dashboard 🌸</h1>

        {/* Portfolio Section */}
        <h2>Edit Portfolio</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="4"
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <button onClick={updatePortfolio}>Update Portfolio ✨</button>

        <hr />

        {/* Projects Section */}
        <h2>Add New Project</h2>
        <input
          type="text"
          placeholder="Project Title"
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
        />
        <textarea
          rows="3"
          placeholder="Description"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tech Stack (comma separated)"
          value={projectTech}
          onChange={(e) => setProjectTech(e.target.value)}
        />
        <input
          type="text"
          placeholder="GitHub Link"
          value={projectGithub}
          onChange={(e) => setProjectGithub(e.target.value)}
        />
        <input
          type="text"
          placeholder="Live Demo Link"
          value={projectDemo}
          onChange={(e) => setProjectDemo(e.target.value)}
        />
        <button onClick={addProject}>Add Project 🌿</button>
      </div>
    </>
  );
}

export default Admin;