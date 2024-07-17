import BookingCard from '../../entities/BookingCard/BookingCard';
import styles from './styles/bookingList.module.scss';
import { useEffect, useState } from 'react';
import IBookedTour from '../../shared/types/IBookedTour';
import getBookings from './api/getBookings';
import { useSelector } from 'react-redux';

const BookingList = () => {
    const bookedTours = useSelector((state: any) => state.bookings.bookings)
    const [tours, setTours] = useState<IBookedTour[]>(bookedTours)
    
    const deleteFromBooking = (id: string) => {
        setTours(tours.filter(tour => tour.id !== id).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()))
    }

    useEffect(() => {
        getBookings()
    }, [])
    
    return (
        <div className={styles.bookings__list}>
            {tours.map(({trip, date, guests, id}: IBookedTour) => {
                return (
                    <BookingCard 
                        key={id}
                        title={trip.title} 
                        guests={guests} 
                        date={new Date(date).toLocaleDateString()} 
                        cost={trip.price} 
                        onClose={() => deleteFromBooking(id)} />
                )
            })}
        </div>
    );
};

export default BookingList;