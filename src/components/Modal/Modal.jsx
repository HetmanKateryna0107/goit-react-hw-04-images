import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const Modal = ({ onClose, largeImageURL }) => {
  const handelClick = event => {
    if (event.target === event.currentTarget) {
      onClose('');
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      onClick={handelClick}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={largeImageURL} alt={'name'} />
    </div>
  );
};

Modal.propTypes = {
  handleKeyDown: PropTypes.func,
  handelClick: PropTypes.func,
};
