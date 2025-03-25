import React from 'react';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12"> {/* Adjust column size as needed */}
            <div className="text--center padding-horiz--md">
              <h2>Smart_Recruiting Deployment Guide</h2>
              <p>
                Smart_Recruiting is an AI-powered resume screening tool designed to
                automate the recruitment process. This guide provides step-by-step
                instructions on how to deploy and use the software on your laptop,
                for HR, Hiring Manager, or recruitment agencies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}