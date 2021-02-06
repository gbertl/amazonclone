import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Logitech G502 Hero High Performance Gaming Mouse"
            price={32.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51IOmsWQVAL._AC_UY218_.jpg"
          />
          <Product
            id="49538094"
            title="RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound, PS4 Headset with Noise Canceling Mic & LED Light, Compatible with PC, PS4, PS5, Switch, Xbox One Controller(Adapter Not Included)"
            price={25.95}
            rating={4}
            image="https://m.media-amazon.com/images/I/61lnzTv2a0L._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="GameSir G4 Pro Wireless Switch Game Controller for PC/iOS/Android Phone, Dual Shock USB Mobile Gamepad for Apple TV Arcade MFi Games, Cloud Gaming Controller (Removable ABXY and Screenshot)"
            price={49.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61T2RHj+OHL._AC_UY218_.jpg"
          />
          <Product
            id="23445930"
            title="Arrocent Classic Retro Game Console, 8-bit Video Game Built-in 620 Games with 2 Classic Controllers (AV Output)"
            price={21.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71YcuuL+FyL._AC_UY218_.jpg"
          />
          <Product
            id="3254354345"
            title="Racing Wheel, PXN-V3II 180° Game Racing Steering Wheel with Pedal and Shift Paddle, Compatible for PC, PS3, PS4, Xbox One, Nintendo Switch.（Black）"
            price={99.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/6185oi5dYvL._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit Gaming Keyboard with Multimedia Keys Wrist Rest and Red Backlit Gaming Mouse 3200 DPI for Windows PC Gamers (Black)"
            price={39.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
