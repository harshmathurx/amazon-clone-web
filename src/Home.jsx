import React from "react";
import "./Home.css";
import Product from "./Product.jsx";
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/AugART21/GW/NEW/HERO/PCshopnow/AugART21_PC_hero_1x_Shopnow._CB645150438_.jpg"
                    alt=""
                    className="home__image"
                />

                <div className="home__row">
                    <Product title='The lean Startup' price='150' image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg' rating={3} />


                    <Product title='OnePlus Nord CE 5G (Charcoal Ink, 8GB RAM, 128GB Storage)' price='24,999' image='https://images-na.ssl-images-amazon.com/images/I/71LRBr1aLNS._SL1500_.jpg' rating={3} />


                </div>

                <div className="home__row">
                    <Product title='The lean Startup' price='150' image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg' rating={3} />


                    <Product title='OnePlus Nord CE 5G (Charcoal Ink, 8GB RAM, 128GB Storage)' price='24,999' image='https://images-na.ssl-images-amazon.com/images/I/71LRBr1aLNS._SL1500_.jpg' rating={3} />
                    <Product title='The lean Startup' price='150' image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg' rating={3} />


                </div>

                <div className="home__row">
                    <Product title='The lean Startup' price='150' image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg' rating={3} />


                    <Product title='OnePlus Nord CE 5G (Charcoal Ink, 8GB RAM, 128GB Storage)' price='24,999' image='https://images-na.ssl-images-amazon.com/images/I/71LRBr1aLNS._SL1500_.jpg' rating={3} />
                    <Product title='The lean Startup' price='150' image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg' rating={3} />


                    <Product title='OnePlus Nord CE 5G (Charcoal Ink, 8GB RAM, 128GB Storage)' price='24,999' image='https://images-na.ssl-images-amazon.com/images/I/71LRBr1aLNS._SL1500_.jpg' rating={3} />
                </div>

            </div>
        </div>
    );
}

export default Home;
