import React from 'react'
import Banner from '../Components/Banner';
import BestSellerBooks from '../Home/BestSellerBooks';
import FavouriteBook from '../Home/FavouriteBook';
import PromoBanner from '../Home/PromoBanner';
import OtherBooks from '../Home/OtherBooks';
import Review from '../Home/Review';

const Home = () => {
  return (
    <div>
     <Banner/>
     <BestSellerBooks/>
     <FavouriteBook/>
     <PromoBanner/>
     <OtherBooks/>
     <Review/>
      </div>
  )
}

export default Home;