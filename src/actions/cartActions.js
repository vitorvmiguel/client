export function addToCart(dish){
  return {
    type: 'ADD_TO_CART',
    payload: dish
  }
}

export function updateCart(id, portions){
  return {
    type: 'UPDATE_CART',
    id: id,
    portions: portions
  }
}

export function deleteFromCart(cart){
  return {
    type: 'DELETE_FROM_CART',
    payload: cart
  }
}