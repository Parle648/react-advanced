import BookTripForm from '../../features/BookTripForm/BookTripForm';
import styles from './styles/modal.module.scss';

const Modal = ({onClose}: {onClose: () => void}) => {
    return (
        <div className={styles.modal}>
            <div data-test-id="book-trip-popup" className={styles.bookTripPopup}>
            <button
                data-test-id="book-trip-popup-close"
                className={styles.bookTripPopup__close}
                onClick={onClose}
            >
                ×
            </button>
            <BookTripForm onSubmit={onClose} />
            </div>
        </div>
    );
};

export default Modal;