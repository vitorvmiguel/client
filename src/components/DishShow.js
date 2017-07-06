import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';
import { getComments, getOneDish, postComment } from '../actions/dishesActions'

class DishShow extends Component {
  constructor(props) {
    super(props)
    this.props.getComments(this.props.params.id);
    this.props.getOneDish(this.props.params.id); 
  }
  static contextTypes = {
    router: PropTypes.object
  };
  handleSubmit(e) {
    e.preventDefault();
    const comment = {
      dishId: this.props.params.id,
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
                  <span className="pull-right">10 days ago</span>
                  <p>{comment.comment}</p>
              </div>
            </div>
          </div>
        </li>
        )
      })
    }
    return (
      <div className="row">
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
                <span className="reviewer"><strong>Hungry boy</strong></span>
                <form>
                  <div className="form-group">
                    <label htmlFor="rating-form">Rating</label>
                    <select className="form-control" id="rating-form" ref="star">
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
    )
  }

}

function mapStateToProps(state) {
  return {
    comments: state.dishes.comments,
    one_dish: state.dishes.one_dish
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      getComments: getComments, 
      postComment: postComment,
      getOneDish: getOneDish
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DishShow);