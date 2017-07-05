export function cartReducers(state={cart:[]}, action) {
  switch(action.type){
    case 'ADD_TO_CART':
      return {
        cart: [...state.cart, ...action.payload],
        total: totals(action.payload).total
      }
    case 'UPDATE_CART':
      const currentDishToUpdate = [...state.cart]

      const indexToUpdate = currentDishToUpdate.findIndex(
        function(dish) {
          return dish.id === action.id;
        }
      )
      
      const newDishToUpdate = {
        ...currentDishToUpdate[indexToUpdate],
            portions: currentDishToUpdate[indexToUpdate].portions + action.portions
      }
      
      let cartUpdate = [...currentDishToUpdate.slice(0, indexToUpdate), newDishToUpdate,
        ...currentDishToUpdate.slice(indexToUpdate)]

      return {
        cart: cartUpdate,
        total: totals(cartUpdate).total
      }
    case 'DELETE_FROM_CART':
      return {
        cart: [...action.payload],
        total: totals(action.payload).total
      }
    default: 
      return state;
  }
}

export function totals(payload) {
  const total = payload.map(function(item){
    return parseFloat(item.price);
  }).reduce(function(acc,val){
    return acc + val;
  },0);
  return {
    total: total.toFixed(2)
  }
}