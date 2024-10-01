import React from 'react';
import { Button, Badge } from 'react-bootstrap';

// Items Button Component
const ItemsButton = ({ itemCount, onClick }) => {

  return (
    <>
      {/* Button to trigger Modal */}
      <Button
        variant="primary"
        onClick={onClick}
        className="position-relative"
      >
        Items
        {/* Badge for displaying item count */}
        <Badge
          bg="dark"
          pill
          className="position-absolute top-0 start-100 translate-middle"
          style={{ padding: "4px 8px", transform: "translate(-50%, -50%)" }} // Ensures correct position
        >
          {itemCount}
        </Badge>
      </Button>
    </>
  );
};

export default ItemsButton;
