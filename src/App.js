import React, { Component, useEffect, useState } from "react";
import Button from "./components/Button/Button.jsx";
import Modal from "./components/Modal/Modal.jsx";
import Header from "./components/Header/Header.jsx";
import data from "../src/common-files/data.json";
import products from "./products.json";
import CardList from "./components/CardList/CardList.jsx";
import Card from "./components/Card/Card.jsx";
import Cart from "./components/Cart/Cart.jsx";
import img from "./img/products/1.jpg";
import { NavLink, Route, Switch } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.jsx";

function App(props) {
  const [modalInfo, setModalInfo] = useState({});
  const [productData, setProductData] = useState([]);
  const [show, setShow] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isFavourite, setisFavourite] = useState(false);

  
  const favouriteItemsList = [];

  useEffect(() => {
    setProductData(products);
    // this.setState({ productData: products });
    console.log(productData);
  }, [])

  const updateModal = (id) => {
    const modalInfo = data.modalDAta.filter((modal) => modal.id === id);
    setShow(!show);
    setModalInfo(modalInfo);
    // this.setState({
    //   show: !this.state.show,
    //   modalInfo: modalInfo,
    // });
  };
  const showModal = () => {
    setShow(!show);
  };

   
  
  //creatin dataID for modals
  const dataID = {
    buttonOne: 1,
    buttonTwo: 2,
  };
  return (
    <div className="App">
   <Header/>
      <AppRoutes items={products}
      
        isFavourite={isFavourite}
        setisFavourite={setisFavourite}
        productInfo={products}
        favouriteItem={favourites}
        favourites={favourites}
        setFavourites={setFavourites}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setFavourites={setFavourites}
        handler={() => {
          updateModal(dataID.buttonOne);
        }}
      />

      {show && (
        <Modal
          show={show}
          header={modalInfo[0].header}
          text={modalInfo[0].text}
          handler={showModal}
          actions={[
            <Button
              text={"YES"}
              backgroundColor={"#b53726"}
              modalHandler={showModal}
            />,
            <Button text={"NO"} backgroundColor={"#b53726"} />,
          ]}
        />
      )}
    
    </div>
  );
  
}
  // useEffect(()=>{

  //   fetch(data, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   }).then((r) => console.log(r.json()));
  // .then((res) => {
  //   console.log(res);
  //   this.setState({ productData: res });
  // });
  // }

  // }, []) 


export default App;
