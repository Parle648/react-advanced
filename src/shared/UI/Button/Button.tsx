import { FC } from 'react';
import IButton from './Types/button';
import styles from './styles/button.module.scss';

const Button: FC<IButton> = ({title, dataTextId, type, onClick = () => {}}) => {
    return (
        <button
            className={styles.button}
            data-test-id={dataTextId}
            type={type}
            onClick={onClick}
        >{title}</button>
    );
};

export default Button;