import React from 'react';
import { Modal, Button } from "react-bootstrap";

export default class MyVerticallyCenteredModal extends React.Component {
    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Oops are you okay bud?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Incorrect Password!</h4>
            <p>
              You might be trippin, that's not your password!
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
  
