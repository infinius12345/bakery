import React from 'react'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
    increment,
    decrement,
} from '../reducers/counter'
import {Well, Button, Col, Row} from 'react-bootstrap'


export class Item extends React.PureComponent {

    render() {
        let totalAmount = this.props.price * this.props.value
        return (
            <Col xs={12} md={11}>

                <Well style={{paddingTop:'5px',paddingBottom:'5px'}}>
                    <Row>
                        <Col xs={12} md={8}>
                        <h3 style={{display: 'inline-block', padding: '0'}}>{this.props.label}: ${totalAmount} </h3>
                        </Col>
                        <Col xs={6} md={4} >
                            <Row>
                                <Button
                                    style={{float: 'right', width: '50%'}}
                                    id={this.props.id}
                                    onClick={(e) => this.props.increment(this.props.index)}
                                    bsStyle="primary"> + </Button>
                            </Row>
                            <Row>
                                <Button
                                    id={this.props.id}
                                    style={{float: 'right', width: '50%'}}
                                    onClick={(e) => this.props.decrement(this.props.index)}
                                    bsStyle="danger"
                                    disabled={this.props.value <= 0}
                                > - </Button>
                            </Row>
                        </Col>
                        {/*<h4> <Label>Selected:{this.props.value}</Label></h4>*/}
                    </Row>
                </Well>

            </Col>
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
)(Item)