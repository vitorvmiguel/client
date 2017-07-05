import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDishes } from '../actions/dishesActions';

import DishListItem from './DishListItem';
import DishForm from './DishForm';
import Cart from './Cart';

class DishesList extends Component {
  constructor(props) {
    super(props)
    this.props.getDishes();
  }
  render() {
    console.log('PROPS.DISHES: ',this.props.dishes)
    const dishesList = this.props.dishes.map(function(dish){
      return (
        <DishListItem 
          key={dish.id} 
          id={dish.id} 
          dishName={dish.dishName}
          chefName={dish.chefName}
          price={dish.price}
          averageRating={dish.averageRating}
          numberOfRatings={dish.numberOfRatings}
          numberOfComments={dish.numberOfComments}
          availablePortions={dish.availablePortions}
          imageUrl={dish.imageUrl}/>
      )
    });
    return(
      <div className="row">
        <ul className="list-unstyled">
          {dishesList}
        </ul>
        <DishForm />
        <Cart />
      </div>     
    );
  }
}

function mapStateToProps(state){
  console.log(state.dishes.dishes)
  return {
    dishes: state.dishes.dishes
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
      getDishes: getDishes
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(DishesList);