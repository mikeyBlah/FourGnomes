import React from 'react';
import styles from './slide.module.scss';

const SlideLayout = (props) => {
  return (
    <>
      <section className={styles.slideLayout}>
        {props.children}
      </section>
    </>
  )
}

export default SlideLayout;