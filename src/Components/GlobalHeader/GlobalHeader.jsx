import React, { useState } from 'react';
import styles from './globalHeader.module.scss'

const GlobalHeader = () => {

  const [isDarkMode, changeIsDarkMode] = useState(false);

  const toggleMode = () => {
    const newMode = !isDarkMode;
    changeIsDarkMode(newMode);
    console.log(newMode);
  }

  return (
    <header className={`${styles.headerContainer} gutters`}>
      <div className={styles.hamburgerContainer}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className={styles.logoContainer}>FOUR GNOMES</h1>
      <div className={styles.modeToggleContainer} onClick={toggleMode}>
        <span className={`${isDarkMode && styles.darkMode}`}></span>
      </div>
    </header>
  )
}

export default GlobalHeader;