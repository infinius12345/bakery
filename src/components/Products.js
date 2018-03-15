import React from 'react'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
    increment,
    decrement,
    getItems,
} from '../reducers/counter'
import Product from './Product'
import lcPic from "../images/lemon_cheesecake.jpg"
import mtpPic from "../images/Macaron_Tower_Product.jpg"
import qlpPic from "../images/QuicheLorraineProduct1.jpg"
import mbPic from "../images/macarons.jpg"
import {Grid, Row, Col, Image, Thumbnail, Button} from 'react-bootstrap'

import chunk from 'lodash.chunk';

export class Products extends React.Component {

    componentWillMount() {
        if (this.props.items.length === 0) {
            this.props.getItems();
        }
    }


    renderItems(items) {

        const pic =
            {
                "lcPic": lcPic,
                "mtpPic": mtpPic,
                "qlpPic": qlpPic,
                "mbPic": mbPic,
            }


        return chunk(items, 3)
            .map((items) =>
                <Row>
                    {items.map((item, i) => {
                            let src = pic[`${item.id}Pic`];
                            return (
                                <Col xs={6} md={4}>

                                    <Product id={item.id}
                                             src={src}
                                             description={item.description}
                                             label={item.label}
                                             price={item.price}
                                             value={item.value ? item.value : 0}
                                             index={i}
                                    />
                                </Col>)
                        }
                    )}
                </Row>
            );


    }

    render() {

        const btnStyle = {
            float: 'right',
            'margin-top': '20px'
        }

        const h1Style = {
            display: 'inline-block',
        }

        return (

            <div>

                <Grid>
                    <Row>
                        <h1 style={h1Style}>Products</h1>
                        <Button style={btnStyle} onClick={() => this.props.changePage()}>Checkout</Button>
                    </Row>

                    { this.renderItems(this.props.items) }


                </Grid>;
            </div>
        )
    }
}

const mapStateToProps = state => ({
    items: state.counter.items,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getItems,
    changePage: () => push('/checkout')
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products)