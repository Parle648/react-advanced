import { ChangeEvent, FC, FormEvent, useState } from "react";
import Button from "../../shared/UI/Button/Button";
import Input from "../../shared/UI/Input/Input";
import styles from './styles/signUpForm.module.scss';
import ISignUpForm from "./types/formDataType";
import signInRequest from "./api/signUpRequest";
import { useNavigate } from "react-router-dom";

const SignUpForm: FC = () => {
    const [formState, setFormState] = useState<ISignUpForm>({ fullName: '', email: '', password: '' });
    const [errorsState, setErrorsState] = useState<{ fullName: string, email: string, password: string }>({ fullName: '', email: '', password: '' });

    const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, [event.currentTarget.name]: event.currentTarget.value });
    };

    const validateInputs = () => {
        const errors = { fullName: '', email: '', password: '' };

        if (!formState.fullName) {
            errors.fullName = 'Full name is required';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formState.email) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(formState.email)) {
            errors.email = 'Invalid email format';
        }

        if (!formState.password) {
            errors.password = 'Password is required';
        } else if (formState.password.length < 3 || formState.password.length > 20) {
            errors.password = 'Password must be between 3 and 20 characters';
        }

        setErrorsState(errors);
        return !errors.fullName && !errors.email && !errors.password;
    };

    const navigate = useNavigate();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validateInputs()) {
            signInRequest({ userCredentials: formState, navigate });
        }
    };

    return (
        <form className={styles.signUpForm} onSubmit={handleSubmit}>
            <h2 className="sign-in-form__title">Sign Up</h2>

            <Input
                value={formState.fullName}
                onChange={changeInput}
                title={"Full name"}
                type={"text"}
                name={"fullName"}
                dataTestId={"auth-full-name"}
            />
            {errorsState.fullName && <span className={styles.error}>{errorsState.fullName}</span>}

            <Input
                value={formState.email}
                onChange={changeInput}
                title={"Email"}
                type={"email"}
                name={"email"}
                dataTestId={"auth-email"}
            />
            {errorsState.email && <span className={styles.error}>{errorsState.email}</span>}

            <Input
                value={formState.password}
                min={3}
                max={20}
                onChange={changeInput}
                title={"Password"}
                type={"password"}
                name={"password"}
                dataTestId={"auth-password"}
            />
            {errorsState.password && <span className={styles.error}>{errorsState.password}</span>}

            <Button title={"Sign Up"} dataTextId={"auth-submit"} type={"submit"} />
        </form>
    );
};

export default SignUpForm;
