import React from 'react'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
    increment,
    decrement,
} from '../reducers/counter'
import {Thumbnail, Well, Button, Popover, OverlayTrigger, Col, Label} from 'react-bootstrap'


export class Product extends React.PureComponent {
    render() {

        const popoverHoverFocus = (
            <Popover id="popover-trigger-hover-focus">
                <p>{this.props.description}</p>
            </Popover>
        );

        const btnStyle = {
            width: '50%'
        };

        const tbStyle = {
            display: "inline-block",
            'padding-bottom': '1em',
            'text-align': 'center'
        }

        return (

            <div>
                <OverlayTrigger
                    trigger={['hover', 'focus']}
                    placement="right"
                    overlay={popoverHoverFocus}
                >
                    <Thumbnail src={this.props.src} alt={this.props.id} style={tbStyle}>
                        <h4>{this.props.label}</h4>

                        <p>Price: ${this.props.price}</p>

                        <h4><Label>Quantity: {this.props.value}</Label></h4>

                        <Col xs={12} md={12}>
                            <Button id={this.props.id}
                                    onClick={(e) => this.props.increment(this.props.index)}
                                    bsStyle="primary"
                                    style={btnStyle}
                            > + </Button>
                            <Button id={this.props.id}
                                    style={btnStyle}
                                    onClick={(e) => this.props.decrement(this.props.index)}
                                    bsStyle="danger"
                                    disabled={this.props.value <= 0}
                            > - </Button>
                        </Col>
                        {/**/}

                    </Thumbnail>
                </OverlayTrigger>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    increment,
    decrement
}, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(Product)