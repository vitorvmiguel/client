export function dishesReducers(state={
  dishes: [
  //  {	
  //             id: "0",
  //             imageUrl: "http://honest-food.net/wp-content/uploads/2010/03/farro-pasta-320x280.jpg",
  //             dishName: "Amazing Dish",
  //             chefName: "Mighty Chef",
  //             averageRating: "4.8",
  //             numberOfRatings: "8",
  //             numberOfComments: "6",
  //             availablePortions: "4",
  //             price: "6.99"
  //           },
  //           {	
  //             id: "1",
  //             imageUrl: "http://honest-food.net/wp-content/uploads/2010/03/farro-pasta-320x280.jpg",
  //             dishName: "Extraordinary Dish",
  //             chefName: "Holy Chef",
  //             averageRating: "4.7",
  //             numberOfRatings: "80",
  //             numberOfComments: "5",
  //             availablePortions: "32",
  //             price: "4.99"
  //           },
  //           {	
  //             id: "2",
  //             imageUrl: "http://honest-food.net/wp-content/uploads/2010/03/farro-pasta-320x280.jpg",
  //             dishName: "Gorgeous Dish",
  //             chefName: "Super Chef",
  //             averageRating: "4.5",
  //             numberOfRatings: "13",
  //             numberOfComments: "10",
  //             availablePortions: "21",
  //             price: "7.99"
  //           }
  ]
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
    default: 
      return state;
  }
}