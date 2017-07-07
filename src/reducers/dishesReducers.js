export function dishesReducers(state={
  dishes: [],
  comments: [],
  one_dish: {},
  chef: {}
}, action) {
  switch(action.type) {
    case 'GET_DISHES':
      return {...state, dishes: action.payload}
    case 'POST_DISH':
      return {dishes:[...state.dishes, ...action.payload]}
    case 'DELETE_DISH':
      const currentDishToDelete = [...state.dishes]

      const indexToDelete = currentDishToDelete.findIndex(
        function(dish) {
          return dish.id.toString() === action.payload;
        }
      )
      return {dishes: [...currentDishToDelete.slice(0, indexToDelete),
        ...currentDishToDelete.slice(indexToDelete + 1)]}
    case 'UPDATE_DISH':
      const currentDishToUpdate = [...state.dishes]

      const indexToUpdate = currentDishToUpdate.findIndex(
        function(dish) {
          return dish.id === action.payload.id;
        }
      )
      
      const newDishToUpdate = {
        ...currentDishToUpdate[indexToUpdate],
            id: action.payload.id,
            imageURL: action.payload.imageURL,
            dishName: action.payload.dishName,
            chefName: action.payload.chefName,
            averageRating: action.payload.averageRating,
            numberOfRatings: action.payload.numberOfRatings,
            numberOfComments: action.payload.numberOfComments,
            availablePortions: action.payload.availablePortions,
            price: action.payload.price
      }
      
      return {dishes: [...currentDishToUpdate.slice(0, indexToUpdate), newDishToUpdate,
        ...currentDishToUpdate.slice(indexToUpdate)]}
    case 'GET_ONE_DISH':
      return {...state, one_dish: action.payload}
    case 'GET_CHEF':
      return {...state, chef: action.payload}
    case 'GET_COMMENTS':
      return {...state, comments: action.payload}
    case 'POST_COMMENT':
      return {comments:[...state.comments, ...action.payload]}
    default: 
      return state;
  }
}