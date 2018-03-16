import React from 'react';
import {Nav, Navbar, NavItem, Modal, Button} from 'react-bootstrap';
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {closeModal} from '../reducers/modal'


export class Navigation extends React.Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a onClick={e => this.props.navProduct()}>Personalyze-Bakery</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} onClick={e => this.props.navProduct()}>
                            Products
                        </NavItem>
                        <NavItem eventKey={2} onClick={e => this.props.navCheckout()}>
                            Checkout
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={2} onClick={e => this.props.navCheckout()}>
                            {this.props.totalItems} items in cart: ${this.props.totalAmount}
                        </NavItem>
                    </Nav>
                </Navbar>

            </div>
        )
    };
}

const mapStateToProps = state => ({
    totalAmount: state.counter.totalAmount,
    totalItems: state.counter.totalItems,

    showModal: state.modal.showModal,
    modalTitle: state.modal.modalTitle,
    modalBody: state.modal.modalBody,
})


const mapDispatchToProps = dispatch => bindActionCreators({
    navProduct: () => push('products'),
    navCheckout: () => push('checkout'),
    closeModal,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation)
