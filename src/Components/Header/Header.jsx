import React from 'react';
import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';

import { useSelector } from 'react-redux';

const Header = () => {
  const userState = useSelector(state => state.User);
  console.log(userState);
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.leftSide}>
          <div className={styles.tavridaLogo}>Logo</div>
          <div className={styles.greeting}>
            Welcome
            {userState !== null && userState !== undefined
              ? ` ${userState.displayName}!`
              : `!`}
          </div>
        </div>
        <Navigation></Navigation>
      </div>
    </header>
  );
};

export default Header;
