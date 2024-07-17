import { Link } from "react-router-dom";
import SignInForm from "../../features/SignInForm/SignInForm";
import styles from './styles/signIn.module.scss';

const SignInPage = () => {
    return (
        <main className={styles.signInPage}>
            <SignInForm />
            <span>
                Don't have an account?
               <Link to='/sign-up'>
                    <span data-test-id="auth-sign-up-link" className={styles.signInForm__link}>
                     Sign Up
                    </span>
               </Link>
            </span>
        </main>
    );
};

export default SignInPage;