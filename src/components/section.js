import React from "react"
import styles from "../styles/section.module.css"

const Section = ({ title, children }) => (
  <section className={styles.section}>
    <div className="container">
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </div>
  </section>
)

export default Section
