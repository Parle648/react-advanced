import { ChangeEvent, FC, FormEvent, useState } from "react";
import Button from "../../shared/UI/Button/Button";
import Input from "../../shared/UI/Input/Input";
import styles from './styles/signInForm.module.scss';
import { useNavigate } from "react-router-dom";
import ISignInFormData from "./types/formDataType";
import signInRequest from "./api/signInRequest";

const SignInForm: FC = () => {
    const navigate = useNavigate();
    const [formState, setFormState] = useState<ISignInFormData>({ email: '', password: '' });
    const [errorsState, setErrorsState] = useState<{ email: string, password: string }>({ email: '', password: '' });

    const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, [event.currentTarget.name]: event.currentTarget.value });
    };

    const validateInputs = () => {
        const errors = { email: '', password: '' };

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
        return !errors.email && !errors.password;
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validateInputs()) {
            signInRequest({ userCredentials: formState, navigate });
        }
    };

    return (
        <form className={styles.signInForm} onSubmit={handleSubmit}>
            <h2 className="sign-in-form__title">Sign In</h2>

            <Input 
                onChange={changeInput}
                value={formState.email}
                title={"Email"}
                type={"email"}
                name={"email"}
                dataTestId={"auth-email"}
            />
            {errorsState.email && <span className={styles.error}>{errorsState.email}</span>}

            <Input 
                min={3}
                max={20}
                onChange={changeInput}
                value={formState.password}
                title={"Password"}
                type={"password"}
                name={"password"}
                dataTestId={"auth-password"}
            />
            {errorsState.password && <span className={styles.error}>{errorsState.password}</span>}

            <Button title={"Sign In"} dataTextId={"auth-submit"} type={"submit"} />
        </form>
    );
};

export default SignInForm;
