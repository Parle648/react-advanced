import { Link } from "react-router-dom";
import SignUpForm from "../../features/SignUpForm/SignUpForm";
import styles from './styles/signUp.module.scss';

const SignUpPage = () => {
    return (
        <main className={styles.signUpPage}>
            <SignUpForm />
            <span>
                Already have an account?
                <Link to="/sign-in"><span data-test-id="auth-sign-in-link" className={styles.signUpForm__link}>Sign In</span></Link>
            </span>
        </main>
    );
};

export default SignUpPage;