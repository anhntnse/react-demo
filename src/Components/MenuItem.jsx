import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const MenuItem = ({ imgSrc, altText, name, price, salePrice, specialTag, count, onBuy }) => {
  return (
    <Col md={6} lg={3} className="mb-4 menu-item">
      <Card className={`${specialTag ? 'spec-item' : ''}`}>
        <Card.Img variant="top" src={imgSrc} alt={altText} />
        {specialTag && <div className="spec-tag">{specialTag}</div>}
        <Card.Body className="d-flex flex-column">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {salePrice ? (
              <>
                <del>${price}</del>{' '}
                <span style={{ color: '#FFA000', fontWeight: 'bold' }}>
                  ${salePrice}
                </span>
              </>
            ) : (
              `$${price}`
            )}
          </Card.Text>
          <Button
            variant="primary"
            className="buy-button"
            onClick={onBuy}  // Using the passed onBuy function
          >
            Buy ({count})  {/* Displaying the count passed from parent */}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MenuItem;