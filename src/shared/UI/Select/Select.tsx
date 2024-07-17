import { FC } from 'react';
import ISelect from './Types/ISelect';
import OptionsList from './UI/OptionsList/OptionsList';
import styles from './styles/select.module.scss';

const Select: FC<ISelect> = ({title, name, options, dataTestId, onChange}) => {
    return (
        <label className={styles.select}>
            <span className="visually-hidden">{title}</span>
            <select data-test-id={dataTestId} name={name} onChange={onChange}>
                <OptionsList options={options} />
            </select>
        </label>
    );
};

export default Select;