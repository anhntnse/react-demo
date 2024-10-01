import React from "react";
import { Container, Row } from "react-bootstrap";
import MenuItem from "./MenuItem";

const Menu = ({ items, counts, onItemCountChange }) => {
  return (
    <Container>
      <Row>
        <h1 className="ourmenu">Our Menu</h1>
        {/* Render each MenuItem and pass down the handleBuyItem function */}
        {items.map((item, index) => (
          <MenuItem
            key={index}
            imgSrc={item.imgSrc}
            altText={item.altText}
            name={item.name}
            price={item.price}
            salePrice={item.salePrice}
            specialTag={item.specialTag}
            count={counts[index]}
            onBuy={() => onItemCountChange(index, counts[index] + 1)}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Menu;
