import IBookedTour from "../../../shared/types/IBookedTour";
import ITour from "../../../shared/types/ITrip";

export default function createBookedTourObject(tour: ITour, guests: number, date: string): IBookedTour {
    const createdAt = new Date();
    return {
        id: `${Math.random() * 1000000}`,
        userId: "1dd97a12-848f-4a1d-8a7d-34a2132fca94",
        tripId: tour.id as string,
        guests: guests,
        date: date,
        trip: {
          title: tour.title,
          duration: tour.duration,
          price: tour.price
        },
        totalPrice: tour.price * guests,
        createdAt: createdAt.toString()
    }
}