import styles from "./Footer.module.css"

function Footer() {

    return(
        <footer className={styles.footerComp}>
            <hr></hr>
            <p className={styles.copyright}>&copy; 2024 Blaine Pavlock, All rights reserved.</p>
            <nav className={styles.navbar}>
                <ul className={styles.list}>
                    <li className={styles.privacy}>Privacy Policy</li>
                    <li className={styles.terms}>Terms of service</li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer