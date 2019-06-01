import React, {PropTypes, Component} from 'react';

class DishInput extends Component {
  constructor(props) {
    super(props);

    this.onAddDishClick = this.onAddDishClick.bind(this);
  }

  onAddDishClick() {
    const nameElement = document.getElementById('name');

    this.props.addDish({
      name: nameElement.value,
    });

    nameElement.value = '';

    nameElement.focus();
  }

  componentDidMount() {
    document.getElementById('name').focus();
  }

  render() {
    return (
      <div>
        <input id="name" type="text" placeholder="Dish name" />
        <button onClick={this.onAddDishClick}>Add Dish</button>
      </div>
    );
  }
}

DishInput.propTypes = {
  addDish: PropTypes.func.isRequired
};

export default DishInput;
