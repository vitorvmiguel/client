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
        console.log('RESPONSE.DATA: ',response.data)
    })
    .catch(function(error){
      dispatch(
        {
            type: 'POST_DISH_ERROR',
            payload: error
        })
    })
  }
  // return {
  //   type: 'GET_DISHES'
  // }
}

export function postDish(dish){
  // return function(dispatch){
  //   axios.post('/dishes', dish)
  //   .then(function(response){
  //       dispatch(
  //         {
  //           type: 'POST_DISH', 
  //           payload: response.data
  //         })
  //   })
  //   .catch(function(error){
  //       dispatch(
  //         {
  //           type: 'POST_DISH_ERROR',
  //           payload: payload.error
  //       })
  //   })
  // }
  return {
    type: 'POST_DISH',
    payload: dish
  }
}

export function deleteDish(id){
  return {
    type: 'DELETE_DISH',
    payload: id
  }
}

export function updateDish(dish){
  return {
    type: 'UPDATE_DISH',
    payload: dish
  }
}