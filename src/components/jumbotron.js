import React from "react"
import styles from "./jumbotron.module.css"

const Jumbotron = () => (
  <div className={styles.jumbotron}>
    <div className="container">
      <h1>Hi! I am Nelson Reitz, a Swiss Front-end Designer and Developer <span className={styles.emoji} role="img" aria-label="Fire">☀️</span></h1>
      <p>I build user interfaces for websites and apps. Currently based in Lausanne working at the DevFactory agency.</p>
      <a href="mailto:nelson.reitz@gmail.com">Get in touch</a>
    </div>
  </div>
)

export default Jumbotron