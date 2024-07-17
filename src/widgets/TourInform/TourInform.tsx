import { useParams } from 'react-router-dom';
import Button from '../../shared/UI/Button/Button';
import styles from './styles/tourInform.module.scss';
import Modal from '../../entities/Modal/Modal';
import useToggleVisible from '../../shared/libs/hooks/useToggle';
import { useEffect } from 'react';
import getTourInform from './api/getTourInform';
import { useSelector } from 'react-redux';

const TourInform = () => {
    const {tripId} = useParams();
    const choosedTrip = useSelector((state: any) => state.tour)
    const [visible, toggleVisible] = useToggleVisible(false);

    const token = useSelector((state: any) => state.token.token)

    useEffect(() => {
        getTourInform(tripId as string, token)
    }, [])

    return (
        <div className={styles.trip}>
            <img data-test-id="trip-details-image" src={choosedTrip.image} className={styles.trip__img} alt="trip photo" />
            <div className={styles.trip__content}>
            <div className={styles.tripInfo}>
                <h3 data-test-id="trip-details-title" className={styles.tripInfo__title}>
                {choosedTrip.title}
                </h3>
                <div className={styles.tripInfo__content}>
                <span data-test-id="trip-details-duration" className={styles.tripInfo__duration}>
                    <strong>{choosedTrip.duration}</strong> days
                </span>
                <span data-test-id="trip-details-level" className={styles.tripInfo__level}>
                {choosedTrip.level}
                </span>
                </div>
            </div>
            <div data-test-id="trip-details-description" className={styles.trip__description}>
            {choosedTrip.description}
            </div>
            <div className={styles.tripPrice}>
                <span>Price</span>
                <strong data-test-id="trip-details-price-value" className={styles.tripPrice__value}>
                ${choosedTrip.price}
                </strong>
            </div>
            {visible &&
                <Modal onClose={toggleVisible}  />
            }
            <div className={styles.trip__button}>
                <Button title={'Book a trip'} dataTextId={'trip-details-button'} type={'button'} onClick={toggleVisible} />
            </div>
            </div>
        </div>
    );
};

export default TourInform;