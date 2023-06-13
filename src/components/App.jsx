import { useEffect, useState } from 'react';

import { getPictures } from 'Service/serviceApi';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [query, setQuery] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [page, setPage] = useState(1);
  const [image, setImage] = useState([]);
  const [largeImageURL, setLargeImageURL] = useState('');

  useEffect(() => {
    if (!query) return;
    getPictures(query, page).then(data => {
      setImage(prevState => [...prevState, ...data.hits]);
      setShowButton(page < Math.ceil(data.totalHits / 12));
    });
  }, [query, page]);

  const onSubmit = query => {
    setQuery(query);
    setPage(1);
    setImage([]);
  };
  const openModal = largeImageURL => {
    setLargeImageURL(largeImageURL);
  };

  const onChangePage = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div>
      {largeImageURL && (
        <Modal largeImageURL={largeImageURL} onClose={openModal} />
      )}
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery images={image} openModal={openModal} />
      {showButton && <Button onChangePage={onChangePage} />}
    </div>
  );
};
