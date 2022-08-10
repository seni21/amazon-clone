import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationApi from './LocationApi';
function Header() {
  const [{ basket, user}, dispatch] = useStateValue ();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className='header'>
      <Link to="/">
      <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
        </Link>
       
        <Link to='/selectyourlocation'  className='header__clearlink locc'>
          <LocationOnIcon
          className='licon'/>
          <div className="header__option ">
            <span className="header__optionLineOne">
              Deliver to
            </span>
            <span className="header__optionLineTwo">
            <LocationApi
            className="location"/>
            </span>
          </div>
          </Link>






         <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className='header__searchIcon'/>
        </div>
        
    <div className="header__nav">
    <Link to={!user && "/login"}className='header__clearlink '>
    <div onClick={handleAuthenticaton}className="header__option">
    <span className="header__optionLineOne">Hello {!user ? "Guest" : user.email}
            </span>
    <span 
      className="header__optionLineTwo">
         {user ? "Sign Out": "Sign In"}
      </span>
            </div>
            </Link>
            <Link to='/orders'  className='header__clearlink '>
          <div className="header__option">
            <span className="header__optionLineOne">
              Returns
            </span>
            <span className="header__optionLineTwo">
               orders
            </span>
          </div>
          </Link>
    <div className="header__option">
    <span className="header__optionLineOne"> Your
    </span>
    <span className="header__optionLineTwo">Prime </span>
    </div>
    <Link to="/checkout" className='header__clearlink'>
    <div className='header__optionBasket'>
    <ShoppingBasketIcon />
    <span className='header__optionLineTwo header__optionBasket'>{basket.length}</span> 
    </div>
    </Link>
      </div>
      </div>
  )
};
export default Header;