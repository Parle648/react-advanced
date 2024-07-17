import { Option } from '../../Types/ISelect';

const OptionsList = ({options}: {options: Option[]}) => {
    return (
        <>
        {options.map((option: Option) => {
            return (
                <option key={option.value} value={option.value}>{option.title}</option>
            )
        })}
        </>
    );
};

export default OptionsList;