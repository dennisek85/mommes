import React, {PropTypes} from 'react';

const Dish = ({dish}) => {
  return (
    <div>
      {dish.name}
    </div>
  );
};

Dish.propTypes = {
  dish: PropTypes.object.isRequired
};

export default Dish;
