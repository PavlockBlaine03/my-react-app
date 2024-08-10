import styles from "./Header.module.css"
import propType from "prop-types"

function Header() {

    return(
        <>
            <header className={styles.header}>
                <div className={styles.titleBar}>
                    <h1 className={styles.title}>Header Test</h1>
                </div>
                <div className={styles.navBar}>
                    <ul className={styles.navList}>
                        <li>test1</li>
                        <li>test2</li>
                        <li>test3</li>
                        <li>test4</li>
                    </ul>
                </div>
                <hr></hr>
            </header>
        </>
    );
}

export default Header