import styles from './UserGreeting.module.css'
import propTypes from 'prop-types'

function UserGreeting(props) {

    const welcomeMessage = <h2 className={styles.WelcomeMessage}>Welcome {props.username}</h2>
    const loginPrompt = <h2 className={styles.LoginPrompt}>Please log in to continue</h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt)
}

UserGreeting.propTypes = {
    username: propTypes.string,
    isLoggingIn: propTypes.bool,
}

UserGreeting.defaultProps = {
    username: "Guest",
    isLoggedIn: false,
}

export default UserGreeting