import React from 'react';
import styles from './Resume.module.css';

const Resume = () => {
    return (
        <main className={styles.resume}>
            <h2>RESUME</h2>
            {/* Embedded Google Doc */}
            <iframe
                src="https://docs.google.com/document/d/1FNNG41mBwVy8Y1wRLGWer3HciWSkimb1/preview"
                width="100%"
                height="400px"
                style={{ border: "none", marginTop: "2rem" }}
                title="Resume"
            ></iframe>
            {/* Download Button */}
            <p>
                <a
                    href="https://docs.google.com/document/d/1FNNG41mBwVy8Y1wRLGWer3HciWSkimb1/export?format=pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.downloadBtn}
                >
                    Download PDF
                </a>
            </p>
            {/* Key Sections */}
            <section>
                <h3>Technical Skills</h3>
                <h4>Languages and Frameworks</h4>
                <ul>
                    <li>Languages: JavaScript, Python, Java</li>
                    <li>Frameworks/Libraries: React.js, Next.js, Node.js</li>
                    <li>Markup & Styling: HTML5, CSS3</li>
                    {/* Add more skills */}
                </ul>
                <h4>Tools and Platforms</h4>
                <ul>
                    <li>Git/GitHub, VS Code, Postman</li>
                    <li>Microsoft Office, Google Docs/Sheets</li>
                    <li>Familiar with Docker & Linux terminal</li>
                    {/* Add more skills */}
                </ul>
            </section>
            
        </main>
    );
};

export default Resume;