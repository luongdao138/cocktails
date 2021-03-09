import React from 'react';
import NavBar from '../component/NavBar';
import SearchForm from '../component/SearchForm';
import CocktailList from '../component/CocktailList';

const Home = () => {
  return (
    <div className='home'>
      <NavBar />
      <div className='container'>
        <SearchForm />
      </div>
      <CocktailList />
    </div>
  );
};

export default Home;
