import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import Newsletter from "../Components/Newsletter/Newsletter";
import ShopContextProvider from "../Components/Context/ShopContext";

const Shop = () => {
  //wrap the components in the ShopContextProvider so that the context is available to all the components
    return (
        <ShopContextProvider>
            <div>
                <Hero />
                <Popular />
                <Offers />
                <NewCollections />
                <Newsletter />
            </div>
        </ShopContextProvider>
    );
};

export default Shop;
