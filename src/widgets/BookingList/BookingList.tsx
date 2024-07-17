import BookingCard from '../../entities/BookingCard/BookingCard';
import styles from './styles/bookingList.module.scss';
import { useEffect, useState } from 'react';
import IBookedTour from '../../shared/types/IBookedTour';
import getBookings from './api/getBookings';
import { useSelector } from 'react-redux';
import deleteFromBooking from './modules/deleteFromBooking';

const BookingList = () => {
    const bookedTours = useSelector((state: any) => state.bookings.bookings)
    
    const deleteBooking = (id: string) => {
        deleteFromBooking(id)
    }
    
    useEffect(() => {
        getBookings();
    }, [])

    return (
        <div className={styles.bookings__list}>
            {bookedTours.map(({trip, date, guests, id}: IBookedTour) => {
                return (
                    <BookingCard 
                        key={id}
                        title={trip.title} 
                        guests={guests} 
                        date={new Date(date).toLocaleDateString()} 
                        cost={trip.price} 
                        onClose={() => deleteBooking(id)} />
                )
            })}
        </div>
    );
};

export default BookingList;