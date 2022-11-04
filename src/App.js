import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PhotoComponent from './components/photos/PhotoComponent';
import FavoritesComponent from "./components/photos/FavoritesComponent";
import "./App.css";

/**
 * Main app component 
 * description - parent component for our PhotoComponent and FavoriteComponent maintaining state of our app
 */
function App(){
  const [dogImages,setDogImages] = useState([]);
  const [favorites,setFavorites] = useState([]);
  const [value,setValue] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://api.thedogapi.com/v1/images/search?limit=6")
    .then(res=>{
      setDogImages(res.data);
    })
    .catch(err=>{
      throw Error(err.message);
    })
  },[value]);

  const refresh = () => {
    setValue({});
  }

  const addToFavorites= (image) => {
    if (!favorites.includes(image)) setFavorites(favorites.concat(image));
  }

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const navigateFavorites = () => {
    navigate('/favorites');
  };

  const navigateHome = () => {
    navigate('/');
  };

    return (
      <>
        <div>
          <div className="app-header">
            <h2 className="app-title">DOG IMAGE GALLERY</h2>
            <div className="app-actions">
              <button className="app--action" onClick={navigateHome}>Home</button>
              <button className="app--action" onClick={navigateFavorites}>Watch Favorites</button>
            </div>
          </div>
            <Routes>
              <Route exact path="/" element={<PhotoComponent dogImages={dogImages} addToFavorites={addToFavorites} refresh={refresh} />}/>
              <Route exact path="/favorites" element={<FavoritesComponent favorites={favorites} />}/>
            </Routes>
        </div>
      </>
    );
}


export default App;
