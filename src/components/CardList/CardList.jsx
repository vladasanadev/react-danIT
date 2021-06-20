import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card.jsx";
import styles from "./style.css";

function CardList({ isCardShown,setisFavourite,isFavourite,productInfo,favourites, handler, favouriteItem, setFavourites,cartItems,cartItemsList, setCartItems }){


    return (
      <div className="card-list">
        {productInfo.map((laptop) => {
          return <Card laptopInfo={laptop} modalHandler={handler}
            favouriteItem={favouriteItem}
            // setFavourites={setFavourites}
            cartItems={cartItems}
            isCardShown={isCardShown}
            setCartItems={setCartItems}
            cartItemsList={cartItemsList}
            isFavourite={isFavourite}
            favourites={favourites}
            setisFavourite={setisFavourite}
            setFavourites={setFavourites}
          />;
        })}
      </div>
    );
  
}

export default CardList;