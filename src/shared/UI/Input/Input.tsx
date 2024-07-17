import { FC } from 'react';
import styles from './styles/input.module.scss';
import IInput from './types/IInput';

const Input: FC<IInput> = ({title, type, name, dataTestId, min, max, value, onChange = (): void => {}}) => {
    return (
        <label className={styles.input}>
          <span className={styles.input__heading}>{title}</span>
          <input 
          onChange={onChange}
            data-test-id={dataTestId} 
            name={name} 
            type={type} 
            minLength={min ? min : 0}
            maxLength={max ? max : 100}
            value={value ? value : ''}
            required />
        </label>
    );
};

export default Input;