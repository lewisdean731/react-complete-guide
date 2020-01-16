import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button'

class orderSummary extends Component {
    // Can be functional component
    //componentWillUpdate() {
    //   console.log('[OrderSummary] Will update');
    //}

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
        })




        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Tasty burger boi containing:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price</strong></p>
                <p>{this.props.price.toFixed(2)}</p>
                <p>Continue to Checkout?</p>
                <Button buttonType="Danger" clicked={this.props.cancelOrder}>Cancel</Button>
                <Button buttonType="Success" clicked={this.props.continueOrder}>Continue</Button>
            </Aux>
        );
    }
}



export default orderSummary;