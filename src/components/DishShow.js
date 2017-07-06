import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getComments } from '../actions/dishesActions'

class DishShow extends Component {
  constructor(props) {
    super(props)
    this.props.getComments();
  }
  render() {
    return (
      <div>{this.props.comments}</div>
    )
  }

}

function mapStateToProps(state) {
  return {
    dishes: state.dishes.dishes
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      getComments: getComments
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DishShow);