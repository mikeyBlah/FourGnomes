import React, {useState} from 'react';
import styles from './menu.module.scss';

const Menu = (props) => {
  
  const [isActive, changeIsActive] = useState(false);
  const {click} = props;

  const handleMenuClick = () => {
    const isActiveNew = !isActive;
    changeIsActive(isActiveNew);
  } 

  const handelMenuItemClick = (indx) => {
    click(indx);
    handleMenuClick();
  }

  return (
    <div className={`${styles.menuContainer} ${isActive ? styles.active : ''}`}>
      <div className={`${styles.hamburgerContainer} ${isActive ? styles.active : ''}`} onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        <li onClick={() => handelMenuItemClick(0)}>Home</li>
        <li onClick={() => handelMenuItemClick(1)}>Item One</li>
        <li onClick={() => handelMenuItemClick(2)}>Item Two</li>
        <li onClick={() => handelMenuItemClick(3)}>Item Three</li>
        <li onClick={() => handelMenuItemClick(4)}>Item Four</li>
      </ul>
    </div>
  )
}

export default Menu;