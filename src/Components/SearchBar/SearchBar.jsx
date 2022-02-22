import { Component } from 'react';
import propTypes from 'prop-types';
import styles from './SearchBar.module.css';

export default class SearchBar extends Component {
    state = {
        inputValue: ''
    }

    handleChange = (e) => {
        this.setState({inputValue: e.currentTarget.value.toLowerCase()})
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.inputValue === "") { 
            return;
        }
        this.props.onSubmit(this.state.inputValue);
        this.setState({ inputValue: '' });
    }

    render() {

        return (
        <header className={styles.searchbar}>
                <form className={styles.searchForm} onSubmit={this.handleSubmit}>
                <button type="submit" className={styles.searchFormBtn}>
                    <span className={styles.searchFormBtnLbl}>Search</span>
                </button>

                <input
                    className={styles.searchFormInput}
                    type="text"
                    autoComplete="off"
                    placeholder="Search images and photos"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
        </form>
        </header>
    )   
    }
    
}


     SearchBar.propTypes = {
        onSubmit: propTypes.func
    } 