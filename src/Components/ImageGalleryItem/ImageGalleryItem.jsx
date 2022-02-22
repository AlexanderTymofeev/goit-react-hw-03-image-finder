import propTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ id, url, setlargeImg, largeUrl }) {
    return (
        <li className={styles.galleryItem}>
            <img src={url} alt="Image" className={styles.image} onClick={() => {setlargeImg(largeUrl)} }/>
        </li>
    )
}

ImageGalleryItem.propTypes = {
    id: propTypes.string,
    url: propTypes.string,
    largeUrl: propTypes.string,
    setlargeImg: propTypes.func
}