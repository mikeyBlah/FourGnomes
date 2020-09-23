import React, {useState} from 'react';
import styles from './menu.module.scss';

const Menu = (props) => {
  
  const [isActive, changeIsActive] = useState(false);
  const {click} = props;

  const handleMenuClick = () => {
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
        <li onClick={() => click(0)}>Home</li>
        <li onClick={() => click(1)}>Item One</li>
        <li onClick={() => click(2)}>Item Two</li>
        <li onClick={() => click(3)}>Item Three</li>
        <li onClick={() => click(4)}>Item Four</li>
      </ul>
    </div>
  )
}

export default Menu;