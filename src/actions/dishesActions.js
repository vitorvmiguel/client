import axios from 'axios';

export function getDishes(){
  return function(dispatch){
    axios.get('/dishes')
    .then(function(response){
      dispatch(
        {
          type: 'GET_DISHES',
          payload: response.data
        })
    })
    .catch(function(error){
      dispatch(
        {
            type: 'GET_DISH_ERROR',
            payload: error
        })
    })
  }
  // return {
  //   type: 'GET_DISHES'
  // }
}

export function postDish(dish){
  return function(dispatch){
    axios.post('/dishes', dish)
    .then(function(response){
        dispatch(
          {
            type: 'POST_DISH', 
            payload: response.data
          })
    })
    .catch(function(error){
        dispatch(
          {
            type: 'POST_DISH_ERROR',
            payload: error
        })
    })
  }
}

// export function deleteDish(id){
//   return {
//     type: 'DELETE_DISH',
//     payload: id
//   }
// }

export function deleteDish(id){
  return function(dispatch){
    axios.delete("/dishes/" + id)
    .then(function(response){
    dispatch(
      {
        type:"DELETE_DISH",
        payload: id
      })
    })
    .catch(function(error){
    dispatch(
      {
        type:"DELETE_DISH_REJECTED",
        payload: error
      })
    })
  }
}

export function updateDish(dish){
  return {
    type: 'UPDATE_DISH',
    payload: dish
  }
}

export function getComments(id){
  return function(dispatch){
    axios.get('/dishes/'+ id +'/ratings')
    .then(function(response){
      dispatch(
        {
          type: 'GET_COMMENTS',
          payload: response.data
        })
    })
    .catch(function(error){
      dispatch(
        {
            type: 'GET_COMMENTS_ERROR',
            payload: error
        })
    })
  }
}

export function postComment(comment){
  return function(dispatch){
    axios.post('/rating', comment)
    .then(function(response){
        dispatch(
          {
            type: 'POST_COMMENT', 
            payload: response.data
          })
    })
    .catch(function(error){
        dispatch(
          {
            type: 'POST_COMMENT_ERROR',
            payload: error
        })
    })
  }
}

export function getOneDish(id){
  return function(dispatch){
    axios.get('/dishes/'+ id)
    .then(function(response){
      dispatch(
        {
          type: 'GET_ONE_DISH',
          payload: response.data
        })
    })
    .catch(function(error){
      dispatch(
        {
            type: 'GET_ONE_DISH_ERROR',
            payload: error
        })
    })
  }
}