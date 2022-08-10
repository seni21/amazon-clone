import React from 'react'
import "./Home.css"
import Banner from './Banner';
import Product from './Product'
// import amazonBox from "./images/amazonBox.jpg";
// import burger from "./images/burger.jpg";
// import eyeglass from "./images/eyeglass ipod.jpg";
// import ipod from "./images/ipod with speaker.jpg";


function Home() {

  return (
    <div className='home'>
      <div className="home__container">
      <div className='bann'>
          <Banner/>
          </div>
           <div className="home__row">
          <Product 
           id="12321341"
            title="I Love You to the Moon and Back"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL127_SR127,127_.jpg"
          />
          <Product
            id="49538094"
            title="HAUSWIRT Stand Mixer, 5.3 QT Tilt-Head Kitchen Electric Food Mixers 8-Speed 1000W Peak Power, LCD Display Timer, Stainless-Steel Bowl, Dough Hook, Beater & Wire Whip, Dishwasher-Safe, Blue"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/71pq7TpzZWL._AC_UL320_.jpg"
          />
        </div>
         <div className="home__row">
          <Product
            id="4903850"
            title= "10 Inch Tablet with Case Included, Android Tablet 3GB RAM 32GB ROM 256GB Expanded, Android 10.0 Tablet Computer WiFi Tablet 10.1 HD Touchscreen (Black)" 
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61NS3G2hR8L._AC_UL320_SR320,320_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          <Product
            id="3254354345"
            title="Roku Express 4K+ 2021 | Streaming Media Player HD/4K/HDR with Smooth Wireless Streaming and Roku Voice Remote with TV..."
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71E4InwfcPL._AC_SY400_.jpg"
          />
        </div>
        <div className="home__row"> 
          <Product
            id="90829332"
            title= "Insignia 39-inch Class F20 Series Smart HD 720p Fire TV (NS-39DF310NA21, 2020 Model)"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/81kQyu0HvbL._AC_SX679_.jpg"
          />
        <div className="home__row"> 
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
          />
        </div>
        </div>
        </div>
        </div>
        
  )
}

export default Home;

// "HAUSWIRT Stand Mixer, 5.3 QT Tilt-Head Kitchen Electric Food Mixers 8-Speed 1000W Peak Power, LCD Display Timer, Stainless-Steel Bowl, Dough Hook, Beater & Wire Whip, Dishwasher-Safe, Blue"


// // "https://m.media-amazon.com/images/I/71pq7TpzZWL._AC_UL320_.jpg 1x, https://m.media-amazon.com/images/I/71pq7TpzZWL._AC_UL480_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/71pq7TpzZWL._AC_UL640_FMwebp_QL65_.jpg" 
// https://m.media-amazon.com/images/I/71pq7TpzZWL._AC_UL800_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/71pq7TpzZWL._AC_UL960_FMwebp_QL65_.jpg"