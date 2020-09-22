import React, {useState} from 'react';
import styles from './menu.module.scss';

const Menu = () => {
  
  const [isActive, changeIsActive] = useState(false);

  const handleMenuClick = () => {
    console.log('###: Click handle');
    const isActiveNew = !isActive;
    changeIsActive(isActiveNew);
  } 

  return (
    <div className={`${styles.menuContainer} ${isActive ? styles.active : ''}`}>
      <div className={`${styles.hamburgerContainer} ${isActive ? styles.active : ''}`} onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        <li>Item One</li>
        <li>Item Two</li>
        <li>Item Three</li>
        <li>Item Four</li>
      </ul>
    </div>
  )
}

export default Menu;