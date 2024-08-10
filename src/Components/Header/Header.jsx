import styles from "./Header.module.css"
import propType from "prop-types"

function Header() {

    return(
        <>
            <header className={styles.header}>
                <div className={styles.titleBar}>
                    <h1 className={styles.title}>My React App</h1>
                </div>
                <div className={styles.navBar}>
                    <ul className={styles.navList}>
                        <li className={styles.home}>Home</li>
                        <li className={styles.about}>About</li>
                        <li className={styles.contact}>Contact</li>
                        <li className={styles.profile}>Profile</li>
                    </ul>
                </div>
                <hr></hr>
            </header>
        </>
    );
}

export default Header