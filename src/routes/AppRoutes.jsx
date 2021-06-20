import React from 'react';
import { Route, Switch } from "react-router-dom";
import Favourites from "../components/Favourites/Favourites.jsx"
import Cart from '../components/Cart/Cart.jsx';
import CardList from '../components/CardList/CardList.jsx';
import Page404 from '../components/Page404/Page404.jsx';


const AppRoutes = ({ products,
    isFavourite, productInfo, favouriteItem, setFavourites,
    cartItems, setCartItems,setisFavourite, toggleFavourite, handler,favourites}) => {
    return (
        <Switch>
            <Route path={'/'} exact >
                <CardList
                    isCardShown={0}
                    setisFavourite={setisFavourite}
        isFavourite={isFavourite}
        productInfo={productInfo}
        favouriteItem={favouriteItem}
                    setFavourites={setFavourites}
                    favourites={favourites}
        cartItems={cartItems}
        setCartItems={setCartItems}
                    handler={handler}
                    setFavourites={setFavourites}
                    
                />
            </Route>
            <Route path={'/Cart'} exact>
                <Cart cartItems={cartItems}
                     isCardShown={2}
                    favouriteItem={favouriteItem}
                    favourites={favourites}
                    setCartItems={setCartItems}
                />
            </Route>
             <Route path={'/Favourites'} exact>
                <Favourites
                    isCardShown={1}    
                    favouriteItem={favouriteItem}
                    favourites={favourites}
                    setFavourites ={setFavourites}
                />
                </Route>
            <Route path={'*'} component={Page404}></Route>
            
        </Switch>
    );
};

export default AppRoutes;