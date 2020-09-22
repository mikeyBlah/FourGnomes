import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import styles from './globalHeader.module.scss'

const GlobalHeader = () => {

  const [isDarkMode, changeIsDarkMode] = useState(false);

  const toggleMode = () => {
    const newMode = !isDarkMode;
    changeIsDarkMode(newMode);
  }

  return (
    <>
      <header className={`${styles.headerContainer} gutters`}>
        <div className={styles.holder}></div>
        <h1 className={styles.logoContainer}>FOUR GNOMES</h1>
        <div className={styles.modeToggleContainer} onClick={toggleMode}>
          <span className={`${isDarkMode && styles.darkMode}`}></span>
        </div>
      </header>
      <Menu />
    </>
  )
}

export default GlobalHeader;