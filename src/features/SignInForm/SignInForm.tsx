import { ChangeEvent, FC, FormEvent, useState } from "react";
import Button from "../../shared/UI/Button/Button";
import Input from "../../shared/UI/Input/Input";
import styles from './styles/signInForm.module.scss';
import { useNavigate } from "react-router-dom";
import ISignInFormData from "./types/formDataType";
import signInRequest from "./api/signInRequest";
import { ToastContainer } from "react-toastify";

const SignInForm: FC = () => {
    const navigate = useNavigate();
    const [formstate, setformState] = useState<ISignInFormData>({email: '', password: ''});
    
    const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setformState({...formstate, [event.currentTarget.name]: event.currentTarget.value})
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // navigator('/')
        signInRequest({userCredentials: formstate, navigate: navigate})
    }
    
    return (
        <>
            <form className={styles.signInForm} onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmit(event)} >
                <h2 className="sign-in-form__title">Sign In</h2>
                <Input onChange={(event: ChangeEvent<HTMLInputElement>) => changeInput(event)} value={formstate.email} title={"Email"} type={"email"} name={"email"} dataTestId={"auth-email"} />
                <Input min={3} max={20} onChange={(event: ChangeEvent<HTMLInputElement>) => changeInput(event)} value={formstate.password} title={"Password"} type={"password"} name={"password"} dataTestId={"auth-password"} />
                <Button title={"Sign In"} dataTextId={"auth-submit"} type={"submit"} />
            </form>
            <ToastContainer />
        </>
    );
};

export default SignInForm;