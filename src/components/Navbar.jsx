import { ReactComponent as LogoIcon } from '../assets/img/logo.svg';
import { ReactComponent as MenuIcon } from '../assets/img/icon-menu.svg';
import { ReactComponent as CartIcon } from '../assets/img/icon-cart.svg';
import { ReactComponent as CloseIcon } from '../assets/img/icon-close.svg';
import ImageAvatar from '../assets/img/image-avatar.png';
import { useState } from 'react';
import { LightBox } from './LightBox';

export function Navbar(props) {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <nav className="flex align-center navbar">
      {isMenu && (
        <LightBox onClose={() => setIsMenu(false)}>
          <button className="btn-close" onClick={() => setIsMenu(false)}>
            <CloseIcon />
          </button>
          <section className="menu-links flex column">
            <NavLinks />
          </section>
        </LightBox>
      )}
      <button className="icon-menu" onClick={() => setIsMenu(true)}>
        <MenuIcon />
      </button>
      <LogoIcon className="logo" />
      <div className="links grow">
        <NavLinks />
      </div>
      <div className="cart-avatar flex align-center">
        <CartIcon />
        <img className="avatar" src={ImageAvatar} alt="Avatar" />
      </div>
    </nav>
  );
}

function NavLinks() {
  return (
    <>
      <a href="test">Collections</a>
      <a href="test">Men</a>
      <a href="test">Women</a>
      <a href="test">About</a>
      <a href="test">Contact</a>
    </>
  );
}
