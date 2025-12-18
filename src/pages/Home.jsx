import { siteConfig } from "../siteConfig";
import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projectdata.json";
import Hero from "../components/Hero";
import Projects from "../components/Projects";


export default function Home() {
  const projects = projectData.projects; 
  
  return (
    <div>
      <Hero />
      <Projects />
    </div>
  );
}