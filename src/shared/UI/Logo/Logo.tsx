import { Link } from 'react-router-dom';
import styles from './styles/logo.module.scss'
import { FC } from 'react';

const Logo: FC = () => {
    return (
        <Link to='/' data-test-id="header-logo" className={styles.header__logo}>
            Travel App
        </Link>
    );
};

export default Logo;