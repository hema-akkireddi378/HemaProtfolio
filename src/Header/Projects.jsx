import React from "react";
function Projects()
{
    return(
        <div className="projects">
            <h1 className="main-project-header">Projects</h1>
            <div className="project-details">
            <h2 className="project-header">RSS Feed Reader – Full Stack Web Application</h2>
           
            <h4 className="project-location">Miracle Educational Society Group of Institutions — Dec 2024 – Apr 2025</h4>
            <ul className="project-content-list">
                <li className="project-content">Built a full-stack RSS Feed Reader to aggregate and display feed content from multiple sources.</li>
                <li className="project-content">Designed a responsive and dynamic frontend using React, with a bookmarking feature for user convenience.</li>
                <li className="project-content">Developed backend services using Spring Boot, integrated with the Rome library for efficient RSS feed parsing.</li>
                <li className="project-content">Utilized MySQL for secure user data and subscription management.</li>
                <li className="project-content">Containerized the entire application using Docker for seamless deployment and scalability.</li>
                <li className="project-content">Focused on clean UI/UX, performance, and maintainability.</li>


            </ul>
            <div className="technology-stack">
                <button type="technology" className="tech">HTML</button>
            <button type="technology" className="tech">CSS</button>
             <button type="technology" className="tech">Java Script</button>
            <button type="technology" className="tech">React</button>
            <button type="technology" className="tech">Spring Boot</button>
            <button type="technology" className="tech">Rome Library</button>
            <button type="technology" className="tech">My SQL</button>
            
            </div>
            </div>
            </div>
    )
}
export default Projects