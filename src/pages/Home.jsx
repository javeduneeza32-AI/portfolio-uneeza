import React, { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import FairyIntro from "../components/FairyIntro";

function Home() {
  const [portfolio, setPortfolio] = useState(null);
  const [projects, setProjects] = useState([]);

  async function fetchPortfolio() {
    const { data } = await supabase
      .from("portfolio")
      .select("*")
      .eq("id", 1)
      .single();
    setPortfolio(data);
  }

  async function fetchProjects() {
    const { data } = await supabase.from("projects").select("*");
    setProjects(data);
  }

  async function fetchAllData() {
    await fetchPortfolio();
    await fetchProjects();
  }

  useEffect(() => {
    fetchAllData();

    const handleStorageChange = (e) => {
      if (e.key === "portfolioUpdated") {
        fetchAllData();
      }
    };
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  if (!portfolio) return <div style={{ color: "#D4A5FF", textAlign: "center", padding: "50px", fontSize: "24px" }}>🌸 Loading magical garden... 🌸</div>;

  // Nature elements scattered
  const natureElements = [
    { emoji: '🌸', left: '5%', size: '35px', duration: '18s', delay: '0s' },
    { emoji: '🦋', left: '15%', size: '30px', duration: '22s', delay: '2s' },
    { emoji: '🌷', left: '25%', size: '40px', duration: '20s', delay: '4s' },
    { emoji: '🧚', left: '35%', size: '28px', duration: '25s', delay: '1s' },
    { emoji: '🌺', left: '45%', size: '35px', duration: '19s', delay: '3s' },
    { emoji: '🦋', left: '55%', size: '32px', duration: '23s', delay: '5s' },
    { emoji: '🌻', left: '65%', size: '38px', duration: '21s', delay: '2s' },
    { emoji: '🐦', left: '75%', size: '30px', duration: '24s', delay: '4s' },
    { emoji: '🌸', left: '85%', size: '35px', duration: '17s', delay: '1s' },
    { emoji: '🌿', left: '10%', size: '32px', duration: '26s', delay: '6s' },
    { emoji: '🐝', left: '20%', size: '25px', duration: '20s', delay: '3s' },
    { emoji: '🌹', left: '30%', size: '40px', duration: '22s', delay: '5s' },
    { emoji: '🧚', left: '40%', size: '30px', duration: '19s', delay: '7s' },
    { emoji: '🦋', left: '50%', size: '35px', duration: '21s', delay: '2s' },
    { emoji: '🌷', left: '60%', size: '38px', duration: '24s', delay: '6s' },
    { emoji: '🌸', left: '70%', size: '30px', duration: '18s', delay: '4s' },
    { emoji: '🐦', left: '80%', size: '28px', duration: '23s', delay: '1s' },
    { emoji: '🌺', left: '90%', size: '35px', duration: '20s', delay: '5s' },
    { emoji: '🌿', left: '12%', size: '30px', duration: '22s', delay: '3s' },
    { emoji: '🦋', left: '72%', size: '32px', duration: '25s', delay: '7s' },
  ];

  return (
    <div>
      {/* Fairy Intro Animation */}
      <FairyIntro />

      {/* Floating Nature Background */}
      <div className="nature-bg">
        {natureElements.map((el, index) => (
          <div
            key={index}
            className="floating-element"
            style={{
              left: el.left,
              top: `${Math.random() * 80 + 10}%`,
              fontSize: el.size,
              animationDuration: el.duration,
              animationDelay: el.delay,
            }}
          >
            {el.emoji}
          </div>
        ))}
      </div>

      <Hero name={portfolio.name} title={portfolio.title} bio={portfolio.bio} />
      <Skills />
      <Projects projects={projects} />
    </div>
  );
}

export default Home;