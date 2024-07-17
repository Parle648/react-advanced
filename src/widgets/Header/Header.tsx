import styles from './styles/header.module.scss';
import Logo from '../../shared/UI/Logo/Logo';
import HeaderProfile from '../../entities/HeaderProfile/HeaderProfile';
import BookingNavItem from '../../entities/BookingNavItem/BookingNavItem';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <Logo />
                <nav data-test-id="header-nav" className={styles.header__nav}>
                {(location.pathname !== '/sign-in' && location.pathname !== '/sign-up') && 
                    <ul className={styles.navHeader__list}>
                        <BookingNavItem />
                        <HeaderProfile />
                    </ul>
                }
                </nav>
            </div>
        </header>
    );
};

export default Header;