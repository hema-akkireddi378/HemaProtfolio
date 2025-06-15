import React from "react";
import { Link } from "react-router-dom";
function Certifications() {
    return (
        <div className="certificates">

            <h1 className="certificate-main-header">Certification</h1>
            <div className="certificate-cards">
                <div className="sqlCertificate">
                    <h4 className="certificate-header">✅ SQL (Basic) – HackerRank</h4>
                    <hr></hr>
                    <p className="certificate-content">Validates foundational knowledge in SQL, including data querying, manipulation, and solving real-world problems.</p>

                    <p className="certificate-issued-date">Issued: Nov 2023</p>
                    <hr></hr>
                    <div className="certificate-button">
                        <Link to="https://www.hackerrank.com/certificates/5a0ef6089700">
                            <button type="download" className="view-certificate">  Certificate
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="iipeCertificate">
                    <h3 className="certificate-header">🏢 Internship Certificate – IIPE (Indian Institute of Petroleum and Energy)</h3>
                    <hr></hr>
                    <p className="certificate-content">Certifies hands-on experience in web automation using Java, Playwright, and CSV, with proven efficiency gains.</p>

                    <p className="certificate-issued-date">Issued: July 2024</p>
                    <hr></hr>
                    <div className="certificate-button">
                        <Link to="">
                            <button type="download" className="view-certificate">  Certificate
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="aimersCertificate">
                    <h3 className="certificate-header">🧠 Internship Certificate – AIMERS (Artificial Intelligence Medical and Engineering Researchers Society)</h3>
                    <hr></hr>

                    <p className="certificate-content">Confirms practical expertise in AI development, including YOLOv8 for object detection, LLMs, Telegram bots, and Power BI dashboards.</p >

                    <p className="certificate-issued-date">Issued: July 2024</p >
                    <hr></hr>
                    <div className="certificate-button">
                        <Link to="">

                            <button type="download" className="view-certificate">  Certificate
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="freeCodeCampCertificate">
                    <h3 className="certificate-header">🌐 Responsive Web Design – FreeCodeCamp</h3>
                    <hr></hr>

                    <p className="certificate-content">Demonstrates proficiency in HTML5, CSS3, and Flexbox, focused on creating responsive, mobile - first web interfaces.</p >
                    <p className="certificate-issued-date">Issued: August 2024</p >
                    <hr></hr>
                    <div className="certificate-button">
                        <Link to="https://www.freecodecamp.org/certification/fcc50fec0f2-f940-43b5-af5b-4ced31fa5b50/responsive-web-design">
                            <button type="download" className="view-certificate"> Certificate
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Certifications