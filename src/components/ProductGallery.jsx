import { useState } from 'react';
import { ReactComponent as IconNext } from '../assets/img/icon-next.svg';
import { ReactComponent as IconPrev } from '../assets/img/icon-previous.svg';

const images = [
  { full: '../assets/img/image-product-1.jpg', thumbnail: '../assets/img/image-product-1-thumbnail.jpg' },
  { full: '../assets/img/image-product-2.jpg', thumbnail: '../assets/img/image-product-2-thumbnail.jpg' },
  { full: '../assets/img/image-product-3.jpg', thumbnail: '../assets/img/image-product-3-thumbnail.jpg' },
  { full: '../assets/img/image-product-4.jpg', thumbnail: '../assets/img/image-product-4-thumbnail.jpg' },
];
export function ProductGallery({ onMainImageClick, defaultSelected = 0 }) {
  const [selected, setSelected] = useState(defaultSelected);

  return (
    <section className="product-gallery">
      <div className="main-img-container">
        <div className="nav-btns">
          <button
            className="btn-prev"
            onClick={() => setSelected(selected => (selected > 0 ? selected - 1 : images.length - 1))}>
            <IconPrev />
          </button>
          <button
            className="btn-next"
            onClick={() => setSelected(selected => (selected < images.length - 1 ? selected + 1 : 0))}>
            <IconNext />
          </button>
        </div>
        <img
          src={require(`../assets/img/image-product-${selected + 1}.jpg`).default}
          alt="Product"
          className="img-main"
          onClick={() => onMainImageClick(selected)}
        />
      </div>
      <div className="img-list flex">
        {images.map((image, idx) => (
          <div key={idx} className={idx === selected ? 'white-overlay' : ''}>
            <img
              alt="Product"
              className={idx === selected ? 'selected' : ''}
              src={require(`../assets/img/image-product-${idx + 1}-thumbnail.jpg`).default}
              onClick={() => setSelected(idx)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
