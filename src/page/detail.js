import React, { useEffect, useState } from 'react';
import NavBar from '../component/NavBar';
import { useGlobalContext } from '../context';
import { useParams, Link } from 'react-router-dom';
import Loading, { loading } from '../component/Loading';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const Detail = () => {
  const { isLoading, setIsLoading } = useGlobalContext();
  const [cocktail, setCocktail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    async function getDetail() {
      try {
        const response = await fetch(`${url}${id}`);
        const { drinks } = await response.json();

        setCocktail({
          ...drinks[0],
          name: drinks[0].strDrink,
          category: drinks[0].strCategory,
          info: drinks[0].strAlcoholic,
          glass: drinks[0].strGlass,
          instructions: drinks[0].strInstructions,
          image: drinks[0].strDrinkThumb,
          ingredients: [
            drinks[0].strIngredient1,
            drinks[0].strIngredient2,
            drinks[0].strIngredient3,
            drinks[0].strIngredient4,
            drinks[0].strIngredient5,
          ],
        });
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }

    getDetail();
    console.log(cocktail);
  }, [id]);

  if (isLoading) {
    return (
      <>
        <NavBar />;
        <Loading />
      </>
    );
  }

  return (
    <>
      <NavBar />

      <div className='detail-container container'>
        <Link to='/'>
          <button className='detail-btn'>Back home</button>
        </Link>
        <h1>{cocktail.name}</h1>
        <div className='detail-main row'>
          <div className='detail-img-wrapper col-lg-5 col-md-12 col-sm-12'>
            <img src={cocktail.image} alt='' />
          </div>
          <div className='detail-infor col-lg-7 col-md-12 col-sm-12'>
            <ul>
              <li>
                <span className='label'>Name</span>
                <span className='value'>{cocktail.name}</span>
              </li>
              <li>
                <span className='label'>Category</span>
                <span className='value'>{cocktail.category}</span>
              </li>
              <li>
                <span className='label'>Info</span>
                <span className='value'>{cocktail.info}</span>
              </li>
              <li>
                <span className='label'>Glass</span>
                <span className='value'>{cocktail.glass}</span>
              </li>
              <li>
                <span className='label'>Instructions</span>
                <span className='value'>{cocktail.instructions}</span>
              </li>
              <li>
                <span className='label'>Ingredients</span>

                {cocktail.ingredients?.map((ingre, index) => {
                  return ingre ? (
                    <span key={index} className='value'>
                      {ingre}
                    </span>
                  ) : null;
                })}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
