import { ReactComponent as MinusIcon } from '../assets/img/icon-minus.svg';
import { ReactComponent as PlusIcon } from '../assets/img/icon-plus.svg';

export function ButtonQuantity({ quantity }) {
  return (
    <div className="btn btn-quantity">
      <button className="btn-minus">
        <MinusIcon />
      </button>
      <span>{quantity}</span>
      <button className="btn-plus">
        <PlusIcon />
      </button>
    </div>
  );
}
