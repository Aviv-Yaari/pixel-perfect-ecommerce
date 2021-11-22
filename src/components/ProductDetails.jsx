import { ButtonQuantity } from './ButtonQuantity';
import { ProductGallery } from './ProductGallery';
import { ReactComponent as CartIcon } from '../assets/img/icon-cart.svg';
import { LightBox } from './LightBox';
import { useState } from 'react/cjs/react.development';

export function ProductDetails(props) {
  const [isLightBox, setIsLightBox] = useState(false);
  const [selected, setSelected] = useState(0);

  return (
    <main className="product-details flex space-between">
      <ProductGallery
        onMainImageClick={selected => {
          setIsLightBox(true);
          setSelected(selected);
        }}
      />
      <div className="info-container flex column justify-center">
        <p className="sub-heading">Sneaker Company</p>
        <h2>Fall Limited Edition Sneakers</h2>
        <p className="description">
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
          they'll withstand everything the weather can offer.
        </p>
        <div>
          <h3 className="price">$125.00</h3> <span className="discount">50%</span>
          <p className="price-before-discount">$250.00</p>
        </div>
        <section className="actions flex">
          <ButtonQuantity quantity={0} />
          <button className="btn-add-to-cart">
            <CartIcon />
            <span>Add to cart</span>
          </button>
        </section>
      </div>
      {isLightBox && (
        <LightBox onClose={() => setIsLightBox(false)} isContentCentered>
          <ProductGallery defaultSelected={selected} isNavButtons onMainImageClick={() => {}} />
        </LightBox>
      )}
    </main>
  );
}
