import { Component } from "react";
import propTypes from 'prop-types';
import styles from './Modal.module.css'

export default class Modal extends Component {
    static propTypes = {
        onClose: propTypes.func,
        url: propTypes.string
    }

    

    componentDidMount() {
        window.addEventListener('keydown', this.handleCloseModal)
        document.addEventListener('click', this.handleCloseModal)

    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleCloseModal)
        document.removeEventListener('click', this.handleCloseModal)  
    }

    handleCloseModal = (e) => {
        if (e.code === 'Escape' || e.target === e.currentTraget) {
            this.props.onClose();
        }
       }

    render() {
        return (
        <>
                <div className={styles.overlay}>
                    <div className={styles.modal}>
                    <img src={this.props.url} alt=""/>
                </div>
            </div>
        </>
    )
    }
    
}