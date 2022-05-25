import {Component} from 'react'

import Header from '../Header'
import Footer from '../Footer'

import CartListView from '../CartListView'

import EmptyCartView from '../EmptyCartView'

import CartContext from '../../context/CartContext'

import './index.css'

class Cart extends Component {
  orderPlaced = () => {
    this.setState(prevState => ({isOrderPlaced: !prevState.isOrderPlaced}))
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value
          const isCartEmpty = cartList.length === 0

          return (
            <>
              <Header />
              <div className="cart-container">
                {isCartEmpty ? <EmptyCartView /> : <CartListView />}
              </div>
              <Footer />
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Cart
