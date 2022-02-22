import { Component } from 'react';

import SearchBar from './Components/SearchBar';
import ImageGallery from './Components/ImageGallery';
import Button from './Components/Button';
import { Bars } from 'react-loader-spinner';
import Modal from './Components/Modal';

import fetchImagesWithQuery from './Components/Api';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    error: null,
    loading: false,
    largeImg: null,
  };

  handlerSubmit = inputValue => {
    this.setState({ searchQuery: inputValue, page: 1, images: [] });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    fetchImagesWithQuery(searchQuery, page)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  onClickLoadMore = () => {
    this.fetchImages();
  };

  closeModal = () => {
    this.setState({ largeImg: null });
  };

  setlargeImg = url => {
    this.setState({ largeImg: url });
  };

  render() {
    const { images, loading, largeImg } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.handlerSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} setlargeImg={this.setlargeImg} />
        )}
        {loading && (
          <Bars
            type="Bars"
            color="#00BFFF"
            height={50}
            width={100}
            timeout={30000}
          />
        )}

        {images.length > 0 && !loading && (
          <Button onClick={this.onClickLoadMore} />
        )}
        {largeImg && <Modal onClose={this.closeModal} url={largeImg} />}
      </>
    );
  }
}

export default App;
