import React from 'react';
import styles from './Resume.module.css';

const Resume = () => {
    return (
        <div className={styles.resume}>
            <h2>RESUME</h2>
            <p>Full Resume can be found <span><a href="https://docs.google.com/document/d/1FNNG41mBwVy8Y1wRLGWer3HciWSkimb1/edit?usp=sharing&ouid=115605567566538738230&rtpof=true&sd=true">here</a></span>.</p>
        </div>
    );
};

export default Resume;