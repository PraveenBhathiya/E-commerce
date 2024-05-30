import React from 'react';
import  {Hero} from '../componets/Hero/Hero';
import  {Popular} from '../componets/Popular/Popular';
import  {Offers}  from '../componets/Offers/Offers';
import  {NewCollections} from '../componets/NewCollections/NewCollections';
import { NewsLetter } from '../componets/NewsLetter/NewsLetter';



const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  );
};

export default Shop;
