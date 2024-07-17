import ITour from '../../../../shared/types/ITrip';
import styles from './styles/tripInform.module.scss';

const TripInform = ({trip}: {trip: ITour}) => {
    return (
        <div className={styles.tripInfo}>
            <h3 data-test-id="book-trip-popup-title" className={styles.tripInfo__title}>
                {trip.title}
            </h3>
            <div className={styles.tripInfo__content}>
                <span
                data-test-id="book-trip-popup-duration"
                className={styles.tripInfo__duration}
                >
                <strong>{trip.duration}</strong> days
                </span>
                <span
                data-test-id="book-trip-popup-level"
                className={styles.tripInfo__level}
                >
                {trip.level}
                </span>
            </div>
        </div>
    );
};

export default TripInform;