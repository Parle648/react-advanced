import IFilter from "../../../shared/types/IFilter";
import ITour from "../../../shared/types/ITrip";

export default function toursFiltering<T extends ITour>(tours: T[], filters: IFilter): T[] {
    const filteredTrips: T[] = tours.filter((trip: T) => {
        let durationMatch = true;
        
        if (filters.duration) {
            const [min, max] = filters.duration.split('_x_').map(Number);
            if (!isNaN(min) && isNaN(max)) {
                durationMatch = trip.duration >= min;
            } else if (!isNaN(min) && !isNaN(max)) {
                durationMatch = trip.duration >= min && trip.duration <= max;
            } else {
                durationMatch = trip.duration <= min;
            }
        }
    
        const levelMatch = filters.level ? trip.level === filters.level : true;
    
        const searchMatch = trip.title.toLowerCase().includes(filters.search.toLowerCase());
    
        return durationMatch && levelMatch && searchMatch;
    });

    return filteredTrips
}