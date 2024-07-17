import styles from './styles/bookingNavItem.module.scss';
import { Link } from 'react-router-dom';
import briefCase from '../../shared/assets/images/briefcase.svg';
import { FC } from 'react';

const BookingNavItem: FC = () => {
    return (
        <li className={styles.navHeader__item} title="Bookings">
            <Link data-test-id="header-bookings-link" to="/bookings" className={styles.navHeader__inner}>
                <span className='visually-hidden'>Bookings</span>
                <img src={briefCase} alt="bookings" />
            </Link>
        </li>
    );
};

export default BookingNavItem;