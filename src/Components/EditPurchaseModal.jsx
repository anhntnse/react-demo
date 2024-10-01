import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";

const EditPurchaseModal = ({
  show,
  onHide,
  items,
  counts,
  onItemCountChange,
}) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {counts.every((count) => count === 0) ? (
          <p>Your cart is empty!</p>
        ) : (
          items.map(
            (item, index) =>
              counts[index] > 0 && (
                <Row key={index} className="mb-3 align-items-center">
                  <Col>{item.name}</Col>
                  <Col>
                    <Button
                      className="decrease-button"
                      variant="outline-secondary"
                      onClick={() => {
                        if (counts[index] > 0) {
                          onItemCountChange(index, counts[index] - 1);
                        }
                      }}
                      disabled={counts[index] <= 0}
                    >
                      -
                    </Button>
                    <span className="mx-2 number-purchase">
                      {counts[index]}
                    </span>
                    <Button
                      className="increase-button"
                      variant="outline-secondary"
                      onClick={() =>
                        onItemCountChange(index, counts[index] + 1)
                      }
                    >
                      +
                    </Button>
                  </Col>
                </Row>
              )
          )
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onHide}>
          Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditPurchaseModal;
