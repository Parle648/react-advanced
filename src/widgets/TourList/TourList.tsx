import { useLocation } from 'react-router-dom';
import TripCard from '../../entities/TripCard/TripCard';
import styles from './styles/tripList.module.scss';
import toursFiltering from './helpers/toursFiltering';
import { FC, useEffect } from 'react';
import ITour from '../../shared/types/ITrip';
import IFilter from '../../shared/types/IFilter';
import getToursRequest from './api/getToursRequest';
import { useSelector } from 'react-redux';

const TourList: FC = () => {
    const location = useLocation();
    let filters: IFilter = location.state !== null ? location.state : {search: '', duration: '', level: ''};

    const token = useSelector((state: any) => state.token.token)
    const tours = useSelector((state: any) => state.tours.tours)
    
    useEffect(() => {
        getToursRequest(token);
    }, [filters])

    const filteredTrips = toursFiltering(tours, filters)
    return (
        <div className={styles.tripList}>
            {filteredTrips.map((tour: ITour) => {
                return (
                <TripCard  
                    key={tour.id} 
                    id={tour.id}
                    description={tour.description} 
                    duration={tour.duration} 
                    image={tour.image} 
                    level={tour.level} 
                    price={tour.price} 
                    title={tour.title} />)
            })}
        </div>
    );
};

export default TourList;