import React from 'react';
import './PhotoComponent.css';

/**
 * Favorites component -> Displays favorites dog images selected by user
 * favorites props comes from the App component
 */
const FavoritesComponent = ({favorites})=>{
    return (
        <>
            <div className='gallery'>
              {
                favorites.map(image=>{
                    return(
                        <div className="pics" key={image.id} >
                            <img className="pic" src={image.url} alt="no photos"/>
                        </div>  
                    )
                })
              }
            </div>
        </>
    )
}

export default FavoritesComponent;