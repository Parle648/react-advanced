import { FC } from 'react';
import styles from './styles/bookingStyles.module.scss';
import IBookingCard from './types/IBookingCard';

const BookingCard: FC<IBookingCard> = ({title, guests, date, cost, onClose, }: IBookingCard) => {
    return (
        <li data-test-id="booking" className={styles.booking}>
          <h3 data-test-id="booking-title" className={styles.booking__title}>{title}</h3>
          <span data-test-id="booking-guests" className={styles.booking__guests}>
            {guests} guests
          </span>
          <span data-test-id="booking-date" className={styles.booking__date}>
          {date}
          </span>
          <span data-test-id="booking-total" className={styles.booking__total}>
            ${cost * guests}
          </span>
          <button data-test-id="booking-cancel" className={styles.booking__cancel} title="Cancel booking" onClick={() => onClose()} >
            <span className="visually-hidden">Cancel booking</span>
            ×
          </button>
        </li>
    );
};

export default BookingCard;