import styles from './styles/totalPrice.module.scss';
import ITotalPrice from './types/ITotalPrice';

const TotalPrice = ({trip, guests}: ITotalPrice) => {
    return (
        <span className={styles.bookTripPopup__total}>
        Total:
        <output
            data-test-id="book-trip-popup-total-value"
            className={styles.bookTripPopup__totalValue}
        >
            ${trip.price * guests}
        </output>
        </span>
    );
};

export default TotalPrice;