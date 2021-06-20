import React from 'react';
import CardList from '../CardList/CardList';

const Favourites = ({ favouriteItem,setFavourites,favourites,isCardShown }) => {
    return (
        <div>
            <CardList productInfo={favouriteItem}
                favourites={favourites}
                isCardShown={isCardShown}
                setFavourites={setFavourites}
                handler={() => {
                // updateModal(dataID.buttonOne)
                }}/>
        </div>
    );
};

export default Favourites;