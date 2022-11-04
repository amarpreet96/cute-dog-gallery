import React from 'react';
import './PhotoComponent.css';

/**
 * PhotoComponent displaying our dog images coming as a prop from App component
 */
const PhotoComponent = ({dogImages,addToFavorites,refresh})=>{
    return (
        <>
            <button className='action' onClick={()=>refresh(true)}>See More Dogs</button>
            <h3>Simply select the image you want to add to favorite:</h3>
            <div className='gallery'>
              {
                dogImages.map(image=>{
                    return(
                        <div className="pics" key={image.id} onClick={()=> addToFavorites(image)} >
                            <img className="pic" src={image.url} alt="no photos"/>
                        </div>  
                    )
                })
              }
            </div>
        </>
    )
}
//
export default PhotoComponent;