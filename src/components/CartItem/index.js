import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {FaRupeeSign} from 'react-icons/fa'
import {AiFillCloseCircle} from 'react-icons/ai'
import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        removeCartItem,
      } = value
      const {cartItem} = props
      const {id, name, quantity, cost, imageUrl} = cartItem

      const decreaseQuantity = () => {
        decrementCartItemQuantity(id)
      }

      const increaseQuantity = () => {
        incrementCartItemQuantity(id)
      }
      const onClickRemoveCartItem = () => {
        removeCartItem(id)
      }

      return (
        <>
          <li className="mobile-cart-item" testid="cartItem">
            <div className="cart-card">
              <div className="mobile-cart-item-image-card">
                <img className="cart-product-image" src={imageUrl} alt={name} />
              </div>
              <div className="mobile-cart-item-info-card">
                <h1 className="cart-product-title">{name}</h1>
                <div className="cart-quantity-container">
                  <button
                    type="button"
                    className="quantity-controller-button"
                    testid="decrement-quantity"
                    onClick={decreaseQuantity}
                  >
                    <BsDashSquare color="#52606D" size={12} />
                  </button>
                  <p className="cart-quantity" testid="item-quantity">
                    {quantity}
                  </p>
                  <button
                    type="button"
                    className="quantity-controller-button"
                    testid="increment-quantity"
                    onClick={increaseQuantity}
                  >
                    <BsPlusSquare color="#52606D" size={12} />
                  </button>
                </div>
                <div className="total-price-remove-container">
                  <p className="cart-total-price">
                    <span>
                      <FaRupeeSign color="#616E7C" size={12} />
                    </span>{' '}
                    {cost}
                    /-
                  </p>
                  <button
                    className="remove-button remove-btn-1"
                    type="button"
                    onClick={onClickRemoveCartItem}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <button
              className="remove-button remove-btn-2"
              type="button"
              onClick={onClickRemoveCartItem}
            >
              Remove
            </button>
          </li>

          <li className="cart-item" testid="cartItem">
            <div className="cart-product-title-brand-container">
              <img className="cart-product-image" src={imageUrl} alt={name} />
              <h1 className="cart-product-title">{name}</h1>
            </div>
            <div className="cart-quantity-container">
              <button
                type="button"
                className="quantity-controller-button"
                testid="decrement-quantity"
                onClick={decreaseQuantity}
              >
                <BsDashSquare color="#52606D" size={12} />
              </button>
              <p className="cart-quantity" testid="item-quantity">
                {quantity}
              </p>
              <button
                type="button"
                className="quantity-controller-button"
                testid="increment-quantity"
                onClick={increaseQuantity}
              >
                <BsPlusSquare color="#52606D" size={12} />
              </button>
            </div>
            <div className="cart-price-remove-container">
              <p className="cart-total-price">
                <span>
                  <FaRupeeSign color="#616E7C" size={12} />
                </span>{' '}
                {cost}
                /-
              </p>
              {/* <button
                className="remove-button"
                type="button"
                onClick={onClickRemoveCartItem}
              >
                Remove
              </button> */}
            </div>
            <div className="button-container">
              <button
                className="delete-button"
                type="button"
                onClick={onClickRemoveCartItem}
                testid="remove"
              >
                <AiFillCloseCircle color="#616E7C" size={20} />
              </button>
            </div>
          </li>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
