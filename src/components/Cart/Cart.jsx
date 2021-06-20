import React from 'react';
import CardList from '../CardList/CardList';

const Cart = ({cartItems,setCartItems,favourites,favouriteItem, isCardShown}) => {
    return (
        <div>
            
            <CardList productInfo={cartItems}
                setCartItems={setCartItems}
                cartItems={cartItems}
                isCardShown={isCardShown}
                favourites={favourites}
                favouriteItem={favouriteItem}
                handler={() => {
                // updateModal(dataID.buttonOne)
                }}/>
        </div>
    );
};

export default Cart;