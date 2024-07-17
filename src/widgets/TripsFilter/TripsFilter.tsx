import { ChangeEvent, FC, useEffect, useState } from "react";
import Select from "../../shared/UI/Select/Select";
import styles from './styles/filters.module.scss';
import { useLocation, useNavigate } from "react-router-dom";
import IFilter from "../../shared/types/IFilter";

const TripsFilter: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [filters, setFilters] = useState<IFilter>(location.state ? location.state : {search: '', duration: '', level: ''})

    useEffect(() => {
        navigate('/', {
            state: {search: '', duration: '', level: ''}
        });
    }, [])
    
    const chnageFilters = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        navigate('/', {
            state: {...filters, [event.currentTarget.name]: event.currentTarget.value}
        });
        setFilters({...filters, [event.currentTarget.name]: event.currentTarget.value})
    }

    return (
        <section className={styles.tripsFilter}>
            <h2 className="visually-hidden">Trips filter</h2>
            <form className={styles.tripsFilter__form}>
                <label className={`${styles.tripsFilter__search} ${styles.input}`}>
                    <span className="visually-hidden">Search by name</span>
                    <input data-test-id="filter-search" name="search" type="search" placeholder="search by title" 
                    onChange={(event: ChangeEvent<HTMLInputElement>) => chnageFilters(event)} />
                </label>
                <Select 
                    title={""} 
                    name={"duration"} 
                    options={[
                        {value: '', title: 'duration'},
                        {value: '0_x_5', title: '< 5 days'},
                        {value: '5_x_10', title: '< 10 days'},
                        {value: '10', title: '≥ 10 days'},
                    ]} 
                    dataTestId={"filter-duration"}
                    onChange={(event: ChangeEvent<HTMLSelectElement>) => chnageFilters(event)} />
                <Select 
                    title={""}
                    name={"level"}
                    options={[
                        { value: '', title: 'level' },
                        { value: 'easy', title: 'easy' },
                        { value: 'moderate', title: 'moderate' },
                        { value: 'difficult', title: 'difficult' },
                    ]} 
                    dataTestId={"filter-level"}
                    onChange={(event: ChangeEvent<HTMLSelectElement>) => chnageFilters(event)} />
            </form>
        </section>
    )
}

export default TripsFilter;