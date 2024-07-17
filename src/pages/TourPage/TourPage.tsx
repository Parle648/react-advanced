import TourInform from "../../widgets/TourInform/TourInform";
import styles from './styles/tourPage.module.scss'

const TourPage = () => {
    return (
        <div className={styles.tripPage}>
            <TourInform />
        </div>
    );
};

export default TourPage;