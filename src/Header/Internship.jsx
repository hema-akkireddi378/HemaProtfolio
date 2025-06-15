import React from "react";
function Internships() {
    return (
        <div className="internships">
            <h1 className="internship-main-header">Internships</h1>
            <div className="internship-types">
                <h2 className="institute-name">🏛️ Indian Institute of Petroleum and Energy (IIPE)</h2>
                <h4 className="project-name">Web Automation Intern — May 2024 – July 2024, Visakhapatnam</h4>
                <div className="internship-certificate">
                <img src="https://media.istockphoto.com/id/490508718/vector/vector-certificate-template.jpg?s=612x612&w=0&k=20&c=zS2w6ySfVfYso4mqSqukTM2joZJkydhLkZV1KoYIgi8=" alt="IIPE Intern Certificate" height="100%" width="100%" className="iipe-certificate"></img>
                </div>
                <ul className="project-overview">
                    <li className="project-overview-details">Developed a robust web automation system using Java, Playwright, and CSV to streamline the IIPE admissions process.</li>

                    <li className="project-overview-details">Extracted, validated, and structured dynamic candidate data (B.Tech, MSc, PhD) from web forms, boosting accuracy and efficiency.</li>

                    <li className="project-overview-details">Reduced manual data handling by over 70% through reusable automation scripts.</li>

                    <li className="project-overview-details">Implemented schema validation and error-handling logic for enhanced data reliability.</li>

                    <li className="project-overview-details">Enabled bulk uploads and real-time updates through backend CSV automation integration.</li>

                    <li className="project-overview-details">Worked closely with faculty and admin teams to align the solution with institutional requirements.</li>
                </ul>
            </div>
            <div className="internship-types">
                <h2 className="institute-name">🤖 AIMERS (Artificial Intelligence Medical and Engineering Researchers Society)</h2>
                <h4 className="project-name">AI & Automation Intern — April 2024 – July 2024, Remote</h4>
                 <div className="internship-certificate">
                <img src="https://media.istockphoto.com/id/490508718/vector/vector-certificate-template.jpg?s=612x612&w=0&k=20&c=zS2w6ySfVfYso4mqSqukTM2joZJkydhLkZV1KoYIgi8=" alt="IIPE Intern Certificate" height="100%" width="100%" className="iipe-certificate"></img>
                </div>
                <ul className="project-overview">
                    <li className="project-overview-details">Developed smart Telegram bots using APIs (Google, Gemini AI, Weather).</li>
                    <li className="project-overview-details">Built AI solutions such as ambulance detection with YOLOv8 and LLMs for Visual Question Answering (VQA) and text summarization.</li>
                    <li className="project-overview-details">Designed interactive Power BI dashboards using real-world datasets like election data.</li>
                    <li className="project-overview-details">Gained hands-on experience in deploying practical AI and automation tools for real-world impact.</li>

                </ul>
            </div>
        </div>
    )
}
export default Internships