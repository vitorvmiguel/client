import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, updateCart } from '../actions/cartActions';

class DishListItem extends Component {
  handleCart(e) {
    e.preventDefault();
    const dish = [{
      id: this.props.id,
      dishName: this.props.dishName,
      imageURL: this.props.imageUrl,
      chefName: this.props.chefName,
      averageRating: this.props.averageRating,
      numberOfRatings: this.props.numberOfRatings,
      numberOfComments: this.props.numberOfComments,
      availablePortions: this.props.availablePortions,
      price: this.props.price,
      portions: 1
    }]
    
    if(this.props.cart.length > 0){
      let id = this.props.id;

      let cartIndex = this.props.cart.findIndex(function(cart){
        return cart.id === id;
      })

      if (cartIndex === -1) {
        this.props.addToCart(dish);
      } else {
        this.props.updateCart(id, 1);
      }
    } else {
       this.props.addToCart(dish);
    }
  }
  render() {
    let rating = 'be 1st';
    let nRatings = '';
    if(this.props.averageRating !== "0.0") {
      rating = this.props.averageRating.substr(0,3);
      nRatings = this.props.numberOfRatings;
    } 
    return (
      <li key={this.props.id} className="col-sm-6 col-md-6 col-lg-6">

        <div className="thumbnail">

          <img src={this.props.imageUrl}  alt={this.props.dishName} />

          <div className="caption">
            <h4>
              <a href={'/dishes/' + this.props.id + '/' + this.props.chefId}>
                <span>{this.props.dishName} </span>
                <span className="label label-default">
                  <span>€ {this.props.price}</span>
                </span>
                <button className="btn btn-warning btn-xs" onClick={this.handleCart.bind(this)}>
                  <span className="glyphicon glyphicon-shopping-cart"></span>
                  <span> Add to Cart</span>
                </button>
                <br/>
                <small>by {this.props.chefName}</small>
              </a>
            </h4>
          </div>

          <div className="ratings">
            <ul>
              <li>
                <button className="btn btn-info btn-xs" type="button">
                  <span className="glyphicon glyphicon-heart"></span>
                  <span className="rating"> {rating} </span>
                  <span className="badge">{nRatings}</span>
                </button>
              </li>
              <li>
                <button className="btn btn-info btn-xs" type="button">
                  <span className="glyphicon glyphicon-comment"></span>
                  <span className="comment"> Comments </span>
                  <span className="badge">{this.props.numberOfComments}</span>
                </button>
              </li>
              <li>
                <button className="btn btn-info btn-xs" type="button">
                  <span className="glyphicon glyphicon-cutlery"></span>
                  <span className="comment"> Portions </span>
                  <span className="badge">{this.props.availablePortions}</span>
                </button>
              </li>
            </ul>
          </div>
        
        </div>

      </li>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addToCart: addToCart,
      updateCart: updateCart
    }, 
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DishListItem);