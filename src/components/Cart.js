import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteFromCart, updateCart } from '../actions/cartActions';

class Cart extends Component {
  handleDelete(id) {
    const currentCart = this.props.cart

    const indexToDelete = currentCart.findIndex(
      function(cart) {
        return cart.id === id;
      }
    )
    let cart = [...currentCart.slice(0, indexToDelete),
      ...currentCart.slice(indexToDelete + 1)]

    this.props.deleteFromCart(cart);
  }

  onIncrement(id) {
    this.props.updateCart(id, 1);
  }

  onDecrement(id, portions) {
    if(portions > 1) {
      this.props.updateCart(id, -1);
    }  
  }

  render() {
    if(this.props.cart[0]) {
      return this.renderCart();
    } else {
      return this.renderEmpty();
    }
  }

  renderEmpty() {
    return (<div></div>)
  }

  renderCart() {
    const cartList = this.props.cart.map(function(item){
      return (
            <li className="list-group-item clearfix" key={item.id}>
              <div className="btn-group" role="group" aria-label="...">
                <button onClick={this.onDecrement.bind(this, item.id, item.portions)} type="button" className="btn btn-xs btn-default">-</button>
                <button onClick={this.onIncrement.bind(this, item.id)} type="button" className="btn btn-xs btn-default">+</button>
                <button onClick={this.handleDelete.bind(this, item.id)} type="button" className="btn btn-xs btn-danger">
                  <span className="glyphicon glyphicon-trash"></span>
                </button>
              </div>
              <span>   {item.dishName}</span>
              <span>   ({item.portions})</span>
              <span className="pull-right">{item.price}<span> €</span></span>
            </li>
      )
    }, this);
    return (
    <div className="col-sm-6">
      <div className="thumbnail">
        <div className="caption">
          <h4>
            <span className="glyphicon glyphicon-shopping-cart"> </span>
            <span>Shopping Cart</span>
          </h4>
          <hr/>
          <ul className="list-group">
            {cartList}
          </ul>
          <hr/>
          <div className="total clearfix">
            <h4>
              <span className="pull-left">Total</span>
              <span className="pull-right">{this.props.total}<span> €</span></span>
            </h4>
          </div>
          <button className="col-xs-12 btn btn-warning">Buy</button>
        </div>
      </div>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
    total: state.cart.total
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      deleteFromCart: deleteFromCart,
      updateCart: updateCart
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);