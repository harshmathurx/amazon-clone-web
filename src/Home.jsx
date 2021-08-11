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
                    <Product title='HP 14 Ryzen 5 3500U 14-inch(35.6 cm) FHD Thin & Light Laptop(8GB RAM/256GB SSD + 1TB HD/Windows 10/MS Office/Natural Silver/1.47 Kg), 14s-dk0501AU' price='47490' image='https://images-na.ssl-images-amazon.com/images/I/81w4VMSLLzL._SL1500_.jpg' rating={3} />


                    <Product title="Fastrack Analog Black Dial Men's Watch NM3147KM01/NN3147KM01" price='24,999' image='https://images-na.ssl-images-amazon.com/images/I/71vTAzt-dgL._UL1500_.jpg' rating={3} />

                    <Product title="Lenovo™ 300 FHD Webcam with Full Stereo Dual Built-in mics | FHD 1080P 2.1 Megapixel CMOS Camera |Ultra-Wide 95° Lens | 360° Rotation | Flexible Mount (GXC1B34793)" price='3195' image='https://images-na.ssl-images-amazon.com/images/I/51rOz7hxduL._SL1333_.jpg' rating={3} />


                </div>

                <div className="home__row">
                    <Product title='Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL' price='69999' image='https://images-na.ssl-images-amazon.com/images/I/91pi34PiUPL._SL1500_.jpg' rating={4} />

                </div>

            </div>
        </div>
    );
}

export default Home;
