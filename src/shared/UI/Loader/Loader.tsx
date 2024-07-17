import { useSelector } from 'react-redux';
import styles from './styles/loader.module.scss';

const Loader = () => {
    const isVisible = useSelector((state: any) => state.isLoading.isLoading);
    
    return (
        <>
            {isVisible && 
                <div className={styles.loader} data-test-id="loader"></div>
            }
        </>
    );
};

export default Loader;