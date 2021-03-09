import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';
import Loading from './Loading';
import SingleCocktail from './SingleCocktail';

const CocktailList = () => {
  const { isLoading, cocktails } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }
  if (cocktails.length === 0) {
    return (
      <h1 className='message text-center' style={{ marginTop: '50px' }}>
        No Cocktails Matched Your Search Criteria
      </h1>
    );
  }

  return (
    <section className='cocktailList-wrapper container'>
      <h1 className='text-center big-title'>Cocktails</h1>
      <div className='row'>
        {cocktails.map((cocktail) => {
          return <SingleCocktail key={cocktail.idDrink} {...cocktail} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
