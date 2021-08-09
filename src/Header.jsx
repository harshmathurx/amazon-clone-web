import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useBasketValue } from './StateProvider';
function Header() {

    const [{basket},dispatch] = useBasketValue();

    return (
        <div className='header'>
            <a href='/'><img className='header__logo' src='logo.png' /></a>

            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello Guest</span>
                    <span className='header__optionLineTwo'>Sign In</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
            </div>

            <Link to='/checkout'>
                <div className="header__optionBasket">
                    <ShoppingCartIcon />
                    <span className="header__optionLineTwo header__basketCount">
                        {basket?.length}
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default Header
