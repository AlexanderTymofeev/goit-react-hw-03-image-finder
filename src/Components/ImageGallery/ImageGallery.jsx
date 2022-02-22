import propTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';


export default function ImageGallery({images, setlargeImg}) {
    return (
        <ul className={styles.imageGallery}>
            {images.map(image => { return <ImageGalleryItem key={image.id} url={image.webformatURL} largeUrl={image.largeImageURL} setlargeImg={ setlargeImg}/>})}
        </ul>
    )
           
}

ImageGallery.propTypes = {
    images: propTypes.array,
    setlargeImg: propTypes.func
}