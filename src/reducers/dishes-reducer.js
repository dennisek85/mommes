import * as types from '../constants/dishes-constants';

const initialState = {
  dishList: [],
  addingDish: false,
  addingDishSuccess: false,
  addingDishError: false,
  fetchingDishes: false,
  fetchingDishesSuccess: false,
  fetchingDishesError: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_DISH_REQUEST:
      return {
        ...state,
        addingDish: true,
        addingDishSuccess: false,
        addingDishError: false,
      }
    case types.ADD_DISH_RESPONSE:
      return {
        ...state,
        dishList: (action.dish),
        addingDish: false,
        addingDishSuccess: true,
        addingDishError: false,
      }  
    case types.ADD_DISH_ERROR:
      return {
        ...state,
        addingDish: false,
        addingDishSuccess: false,
        addingDishError: true,
      }
    case types.FETCH_DISHES_REQUEST:
      return {
        ...state,
        fetchingDishes: true,
        fetchingDishesSuccess: false,
        fetchingDishesError: false,
      }
    case types.FETCH_DISHES_RESPONSE:
      return {
        ...state,
        dishList: (action.dishes),
        fetchingDishes: false,
        fetchingDishesSuccess: true,
        fetchingDishesError: false,
      }
    case types.FETCH_DISHES_ERROR:
      return {
        ...state,
        fetchingDishes: false,
        fetchingDishesSuccess: false,
        fetchingDishesError: true,
      }
    default:
      return state;
  }
}