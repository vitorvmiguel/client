import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';
import { getComments, getOneDish, postComment, getDishes } from '../actions/dishesActions'


import chef from '../images/c.jpg';

class DishShow extends Component {
  constructor(props) {
    super(props)
    this.state = { showReviewForm: false }
    this.props.getDishes();
    this.props.getComments(this.props.params.id);
    this.props.getOneDish(this.props.params.id); 
  }
  static contextTypes = {
    router: PropTypes.object
  };
  handleLeaveReview(){
    this.setState({showReviewForm: true});
  }
  handleSubmit(e) {
    e.preventDefault();
    const comment = {
      dishId: "1",
      userId: "1",
      stars: findDOMNode(this.refs.stars).value,
      comment: findDOMNode(this.refs.comment).value
    }
    this.props.postDish(comment);

    this.handleRedirect();
  }
  handleRedirect() {
    this.context.router.push('/');
  }
  render() {
    let comments = [];
    if (this.props.comments != null) {
      comments = this.props.comments.map(function(comment){
        return (
        <li key={comment.ratingId}>
          <div className="well">
            <div className="row">
              <div className="col-xs-12">
                <span className="label label-success">
                  <span className="glyphicon glyphicon-heart"></span>
                  <span className="rating">{comment.stars}</span>
                </span>  
                  <span className="reviewer"><strong>{comment.userName}</strong></span>
                  {/*<span className="pull-right">10 days ago</span>*/}
                  <p>{comment.comment}</p>
              </div>
            </div>
          </div>
        </li>
        )
      })
    }
    // let dishesList = [];
    // if (this.props.dishes != null) {
    //   dishesList = this.props.dishes.map(function(dish){
    //     return (
    //         <li className="list-group-item">
    //           <a href="">
    //             <div className="media-left">
    //               <img src="./images/1.jpg" alt="" className="media-object img-thumbnail img-circle"/>
    //             </div>
    //             <div className="media-body">
    //               <h4 className="media-heading">{this.props.dishes.dishName}</h4>
    //               <p>by Mighty Chef</p>

    //               <div className="label label-success">
    //                 <span className="glyphicon glyphicon-heart"> </span>
    //                 <span>5</span>
    //               </div>

    //               <div className="label label-success">
    //                 <span className="glyphicon glyphicon-cutlery"></span>
    //                 <span>15</span>
    //               </div>

    //             </div>
    //           </a>
    //         </li>
    //      )
    //   });
    // }





return (
  <div className="container"> 
      <div className="col-sm-5">
        <div className="thumbnail clearfix chef-card">
          <div className="col-xs-8 col-xs-offset-2">
            <img src={chef} alt="" className="img-thumbnail img-circle center-block"/>
          </div>
          <div className="col-xs-12 chef-name">
            <h3>
              <span>Mighty Chef</span>
              <br/>
              <small> Authentic Catalan cuisine</small> 
            </h3>
            <div className="label label-success">
              <span className="glyphicon glyphicon-ok-sign"></span>
              <span> Kitches Certified Chef</span>
            </div> 
          </div>
          <div className="col-xs-12 chef-description">
            <dl>
              <dt>About me</dt>
              <dd>Cooking is my passion. Cooking is my passion. Cooking is my passion. Cooking is my passion. </dd>
            </dl>
          </div>
        </div>
        <div className="panel panel-default dishes">
{/*small dish list begin*/}
          <div className="panel-heading">
            <h4>
              <span className="glyphicon glyphicon-cutlery"></span>
              <span> Dishes </span>
            </h4>
          </div>
          <ul className="list-group media-list">
            {/*{dishesList}*/}
          </ul>
        </div>
    </div>
{/*small dish list begin*/}
      <div className="col-sm-5">
        
        <div className="thumbnail dish-detail">
          <img src={this.props.one_dish.imageUrl} alt="" className="img-responsive" />
          <div className="caption clearfix">

          <div className="col-xs-12 dish-title">
            <a href="">
              <h3>
                <span className="dishName">{this.props.one_dish.dishName} </span>
                <span className="label label-default">
                  <span className="glyphicon glyphicon-euro"> </span>
                  <span>{this.props.one_dish.price}</span>
                </span>
                <br/>
                <small>by </small>
                <small className="chefName">{this.props.one_dish.chefName}</small>
              </h3>
            </a>
          </div>
          <div className="col-xs-12 dish-description">
            <dl>
              <dt>Description</dt>
              <dd>{this.props.one_dish.description}</dd>
            </dl>
          </div>
          <div className="ratings">
            <ul className="list-inline">
              <li>
                <button className="btn btn-info" type="button">
                  <span className="glyphicon glyphicon-heart"></span>
                  <span className="rating"> 4.8 </span>
                  <span className="badge">37</span>
                </button>
              </li>
              <li>
                <button className="btn btn-info" type="button">
                  <span className="glyphicon glyphicon-comment"></span>
                  <span className="comment"> Reviews </span>
                  <span className="badge">21</span>
                </button>
              </li>
              <li>
                <button className="btn btn-info" type="button">
                  <span className="glyphicon glyphicon-cutlery"></span>
                  <span className="comment"> Available </span>
                  <span className="badge">15</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

        <div className="panel panel-default reviews">

          <div className="panel-heading clearfix">
            <h4 className="pull-left">
              <span className="glyphicon glyphicon-comment"></span>
              <span> Reviews </span>
              <span className="badge">21</span>
            </h4>
            <button className="btn btn-warning pull-right">
              <span className="glyphicon glyphicon-edit"> </span>
              <span>Leave a Review</span></button>
          </div>
          <ul className="list-unstyled">
            {comments}
          </ul>
          <div className="well">
            <div className="row">
              <div className="col-sm-12">
                <form>
                  <div className="form-group">
                    <label htmlFor="rating-form">Rating</label>
                    <select className="form-control" id="rating-form" ref="stars">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="comment-form">Comment</label>
                    <textarea className="form-control" rows="3" id="comment-form" ref="comment"></textarea>
                  </div>
                  <button type="submit" className="btn btn-warning" onClick={this.handleSubmit}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    comments: state.dishes.comments,
    one_dish: state.dishes.one_dish,
    dishes: state.dishes.dishes
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      getComments: getComments, 
      postComment: postComment,
      getOneDish: getOneDish,
      getDishes: getDishes
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DishShow);