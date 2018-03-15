import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {closeModal} from '../reducers/modal'

class App extends React.PureComponent {
    render() {
        return (
        <div>
        <Modal show={this.props.showModal} onHide={this.props.closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>{this.props.modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {this.props.modalBody}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.props.closeModal}>Ok</Button>
            </Modal.Footer>
        </Modal>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    showModal: state.modal.showModal,
    modalTitle: state.modal.modalTitle,
    modalBody: state.modal.modalBody,
})


const mapDispatchToProps = dispatch => bindActionCreators({
    closeModal,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)