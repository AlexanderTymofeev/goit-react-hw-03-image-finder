import propTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button(props) { 
    return (
        <button type='button' className={styles.button} onClick={props.onClick}>Load more</button>
    )
}

Button.propTypes = {
   onClick: propTypes.func
}