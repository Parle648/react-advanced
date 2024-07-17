import BookingList from "../../widgets/BookingList/BookingList";
import styles from './styles/bookingPage.module.scss';

const BookingPage = () => {
    return (
        <div className={styles.bookingsPage}>
            <BookingList/>
        </div>
    );
};

export default BookingPage;