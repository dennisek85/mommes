import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as dishesActions from '../actions/dishes-actions';
import DishList from './DishList';
import DishInput from './DishInput';

class DishContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }

  componentDidMount() {
    this.props.actions.fetchDishes();
  }

  render() {
    const { actions, dishes } = this.props;
    return (
      <div>
        <DishInput addDish={(event) => actions.addDish(event)} />
        <DishList dishes={dishes.dishList} />
      </div>
    );
  }
}

DishContainer.propTypes = {
  dishes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    dishes: state.dishes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dishesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DishContainer);
