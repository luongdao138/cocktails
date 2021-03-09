import React from 'react';
import { Link } from 'react-router-dom';

const SingleCocktail = ({
  idDrink,
  strDrinkThumb,
  strDrink,
  strGlass,
  strAlcoholic,
}) => {
  return (
    <article className='col-lg-4 col-md-6 col-sm-12'>
      <div className='single-item'>
        <div className='single-cotail-img'>
          <img src={strDrinkThumb} alt='' />
        </div>
        <div className='infor-wrapper'>
          <h1 className='name'>{strDrink}</h1>
          <p className='glass'>{strGlass}</p>
          <p className='alcoholic'>{strAlcoholic}</p>
          <Link to={`/cocktail/${idDrink}`}>
            <button className='detail-btn'>Details</button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default SingleCocktail;
