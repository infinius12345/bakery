import React from 'react'
import {push} from 'react-router-redux'
import {
    increment,
    decrement,
} from '../reducers/counter'
import {buy} from '../reducers/user'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CheckoutItem from './CheckoutItem'
import {Grid, Row, Button, Col} from 'react-bootstrap'

const Checkout = props => {
    const btnStyle = {
        width: '20%',
        'padding-top': '10px',
        'padding-bottom': '10px',
        'font-size': '25px'
    }
    return (
        <div>
            <Grid>
                <h1>Checkout</h1>
                {props.totalItems === 0 && <h2>Cart is Empty</h2>}

                <Row>
                    {props.totalItems !== 0 &&
                    props.items.map((item, i) => {
                        if (item.value !== undefined && item.value > 0) {
                            return (
                                <CheckoutItem
                                    index={i}
                                    label={item.label}
                                    price={item.price}
                                    value={item.value}
                                />
                            )
                        }
                    })
                    }
                </Row>

                {props.totalItems !== 0 && <div style={{border: '1px solid black', width: '95%'}}/>}

                <Row>
                    <Col xs={4} md={2} style={{float: 'right'}}>
                        {props.totalItems !== 0 && <h3><strong>Total: ${props.totalAmount}</strong></h3>}
                    </Col>
                </Row>

                {/*<p>You have ${props.userMoney}</p>*/}
                <div style={{'text-align': 'center'}}>
                    <Button
                        onClick={() => props.buy(props.userMoney, props.totalAmount)}
                        style={ btnStyle }
                        bsStyle="primary"
                    >Pay</Button>
                </div>

                <p><i>* Notice you can only use $100 per visit and currently you have ${props.userMoney}</i></p>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({
    items: state.counter.items,
    totalItems: state.counter.totalItems,
    totalAmount: state.counter.totalAmount,
    userMoney: state.user.money
})

const mapDispatchToProps = dispatch => bindActionCreators({
    buy,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout)