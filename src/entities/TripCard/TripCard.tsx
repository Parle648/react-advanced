import { Link } from 'react-router-dom';
import Button from '../../shared/UI/Button/Button';
import styles from './styles/tripCard.module.scss';
import ITour from '../../shared/types/ITrip';

const TripCard = ({duration, image, id, level, price, title}: ITour) => {
    return (
        <li data-test-id="trip-card" className={styles.tripCard}>
            <img data-test-id="trip-card-image" src={image} alt="trip photo"/>
            <div className={styles.tripCard__content}>
                <div className={styles.tripInfo}>
                <h3 data-test-id="trip-card-title" className={styles.tripInfo__title}>
                    {title}
                </h3>
                <div className={styles.tripInfo__content}>
                    <span data-test-id="trip-card-duration" className={styles.tripInfo__duration}>
                    <strong>{duration}</strong> days
                    </span>
                    <span data-test-id="trip-card-level" className={styles.tripInfo__level}>
                    {level}
                    </span>
                </div>
                </div>
                <div className={styles.tripPrice}>
                <span>Price</span>
                <strong data-test-id="trip-card-price-value" className={styles.tripPrice__value}>
                ${price}
                </strong>
                </div>
            </div>
            <Link to={`/trip/${id}`}>
                <Button title={'Discover a trip'} dataTextId={'trip-card-link'} type={'button'} />
            </Link>
        </li>
    );
};

export default TripCard;