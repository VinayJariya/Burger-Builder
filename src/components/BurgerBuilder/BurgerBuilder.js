import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../Burger/Burger';
import BuilControls from '../Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component{

    // constructor(props){
    //     super.props();
    //     this.state = {...}
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        }
    }

    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuilControls/>
            </Aux>
        )
    }
}

export default BurgerBuilder;