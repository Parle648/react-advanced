import styles from './styles/footer.module.scss';
import heart from '../../shared/assets/images/heart.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span className={styles.footer__text}>
                © 2024, from
                <a className={styles.footer__link} href="https://binary-studio.com">
                binary studio
                </a>
                with
                <img className={styles.footer__icon} src={heart} alt="heart" />
            </span>
        </footer>
    );
};

export default Footer;