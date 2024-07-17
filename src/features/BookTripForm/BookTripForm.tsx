import Input from '../../shared/UI/Input/Input';
import Button from '../../shared/UI/Button/Button';
import styles from './styles/tripForm.module.scss';
import { ChangeEvent, FormEvent, useState } from 'react';
import TotalPrice from './UI/TotalPrice/TotalPrice';
import TripInform from './UI/TripInform/TripInform';
import { useSelector } from 'react-redux';
import bookTour from './api/bookTour';

const BookTripForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const trip = useSelector((state: any) => state.tour);
  const [inputsState, setInputsState] = useState(['', 0]);
  const [errorsState, setErrorsState] = useState<{ date: string, guests: string }>({ date: '', guests: '' });

  const changeInputState = (event: ChangeEvent<HTMLDataElement | HTMLInputElement>, inputType: 'date' | 'number'): void => {
    if (inputType === 'date') {
      setInputsState([event.currentTarget.value, inputsState[1]]);
    }
    if (inputType === 'number') {
      setInputsState([inputsState[0], +event.currentTarget.value]);
    }
  };

  const validateInputs = () => {
    const errors = { date: '', guests: '' };
    if (!inputsState[0]) {
      errors.date = 'Date is required';
    }
    if (+inputsState[1] < 1 || +inputsState[1] > 10) {
      errors.guests = 'Number of guests must be between 1 and 10';
    }
    setErrorsState(errors);
    return !errors.date && !errors.guests;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateInputs()) {
      onSubmit();
      bookTour({ guests: +inputsState[1], date: inputsState[0] as string });
    }
  };

  return (
    <form className={styles.bookTripPopup__form} onSubmit={handleSubmit}>
      <TripInform trip={trip} />

      <Input
        value={inputsState[0]}
        title='Date'
        type='date'
        name='date'
        dataTestId='book-trip-popup-date'
        onChange={(event: ChangeEvent<HTMLDataElement>) => changeInputState(event, 'date')}
      />
      {errorsState.date && <span className={styles.error}>{errorsState.date}</span>}

      <Input
        value={inputsState[1]}
        title='Number of guests'
        type='number'
        name='guests'
        dataTestId='book-trip-popup-guests'
        min={1}
        max={10}
        onChange={(event: ChangeEvent<HTMLDataElement | HTMLInputElement>) => changeInputState(event, 'number')}
      />
      {errorsState.guests && <span className={styles.error}>{errorsState.guests}</span>}

      <TotalPrice trip={trip} guests={+inputsState[1]} />

      <Button title={'Book a trip'} dataTextId={'book-trip-popup-submit'} type={'submit'} />
    </form>
  );
};

export default BookTripForm;
