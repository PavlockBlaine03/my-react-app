import profilePic from '../../assets/profile.png'
import styles from './Card.module.css'
import propType from 'prop-types'

function Card(props) {

    return(
        <div className={styles.card}>
            <img className={styles.cardimage} alt="profile picture" src={profilePic}></img>
            <h2 className={styles.cardtitle}>{props.name}</h2>
            <p className={styles.cardtext}>{props.bio}</p>
        </div>
    );
}

Card.propType = {
    name: propType.string,

}

Card.defaultProps = {
    name: "Guest",
    bio: "Enter a bio",
}

export default Card;