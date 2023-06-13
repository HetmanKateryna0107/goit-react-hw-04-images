import { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onInputChange = event => {
    setQuery(event.target.value);
  };
  const onFormSubmit = event => {
    event.preventDefault();
    if (!query.trim()) {
      return alert('Please enter');
    }
    onSubmit(query);
  };

  return (
    <header>
      <form onSubmit={onFormSubmit}>
        <input
          onChange={onInputChange}
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
