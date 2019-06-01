import React, {PropTypes} from 'react';
import Dish from './Dish';

const DishList = ({dishes}) => {
  return (
    <div>
      <h4>Dishes:</h4>
      {dishes.map((dish) =>
        <Dish key={dish.name} dish={dish} />
      )}
    </div>
  );
};

DishList.propTypes = {
  dishes: PropTypes.array.isRequired
};


export default DishList;
