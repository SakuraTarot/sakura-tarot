import React from 'react';
import Header from '../components/Header/Header';
import FavoritesCards from '../components/Favorites/FavoritesCards';
import Background from '../components/Background/Background';


export default function Favorites() {
  return (
    <div>
      <Background />
      <Header/>
      <FavoritesCards />
    </div>
  )
}
