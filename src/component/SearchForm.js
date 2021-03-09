import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const container = useRef(null);

  const { setSearchTerm } = useGlobalContext();

  const handleSearch = (e) => {
    const value = container.current.value;
    setSearchTerm(value);
  };

  useEffect(() => {
    container.current.focus();
  }, []);

  return (
    <section className='searchform-wrapper'>
      <label htmlFor='cocktailName'>Search your favorite cocktail</label>
      <input
        type='text'
        id='cocktailName'
        ref={container}
        onChange={handleSearch}
      />
    </section>
  );
};

export default SearchForm;
