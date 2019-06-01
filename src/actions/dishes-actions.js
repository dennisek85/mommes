import * as types from "../constants/dishes-constants";

const apiUrl = "http://localhost:4444/dishes";

export const addDishRequest = () => {
  return {
    type: types.ADD_DISH_REQUEST
  };
};

export const addDishResponse = dish => {
  return {
    type: types.ADD_DISH_RESPONSE,
    dish
  };
};

export const addDishError = () => {
  return {
    type: types.ADD_DISH_ERROR
  };
};

export const fetchDishesRequest = () => {
  return {
    type: types.FETCH_DISHES_REQUEST
  };
};

export const fetchDishesResponse = dishes => {
  return {
    type: types.FETCH_DISHES_RESPONSE,
    dishes
  };
};

export const fetchDishesError = () => {
  return {
    type: types.FETCH_DISHES_ERROR
  };
};

export const addDish = dish => {
  return dispatch => {
    try {
      dispatch(addDishRequest());

      fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(dish),
        headers: {
          "Content-Type": "Application/JSON"
        }
      })
        .then(data => {
          console.log(data);
          if (!data.ok) {
            dispatch(addDishError(data.statusText));
          }
          return data.json();
        })
        .then(response => {
          dispatch(addDishResponse(response));
        });
    } catch (error) {
      dispatch(addDishError(error));
    }
  };
};

export const fetchDishes = () => {
  return dispatch => {
    try {
      dispatch(fetchDishesRequest());

      fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "Application/JSON"
        }
      })
        .then(data => {
          return data.json();
        })
        .then(response => {
          //const result = JSON.stringify(response);
          dispatch(fetchDishesResponse(response));
        });
    } catch (error) {
      dispatch(fetchDishesError(error));
    }
  };
};
