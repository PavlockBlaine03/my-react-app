import styles from "./Header.module.css"
import propType from "prop-types"

function Header(props) {

    return(
        <>
            <header className={styles.header}>
                <div className={styles.titleBar}>
                    <h1 className={styles.title}>{props.header}</h1>
                </div>
                <div className={styles.navBar}>
                    <ul className={styles.navList}>
                        <a href="./index.html"><li className={styles.home}>Home</li></a>
                        <a href="./about.html"><li className={styles.about}>About</li></a>
                        <li className={styles.contact}>Contact</li>
                        <a href="./login.html"><li className={styles.profile}>Profile</li></a>
                    </ul>
                </div>
                <hr></hr>
            </header>
        </>
    );
}

Header.defaultProps = {
    header: "Home"
}

export default Header