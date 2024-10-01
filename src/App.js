import React, { useState } from 'react';
import Header from '../src/Components/Header';
import Menu from '../src/Components/Menu';
import Banner from '../src/Components/Banner';
import Footer from '../src/Components/Footer';
import EditPurchaseModal from '../src/Components/EditPurchaseModal';

const App = () => {
  const initialItems = [
    { imgSrc: 'images/menu1.jpg', altText: 'Margherita Pizza', name: 'Margherita Pizza', price: 40, salePrice: 24, specialTag: 'SALE' },
    { imgSrc: 'images/menu2.jpg', altText: 'Mushroom Pizza', name: 'Mushroom Pizza', price: 25 },
    { imgSrc: 'images/menu3.jpg', altText: 'Hawaiian Pizza', name: 'Hawaiian Pizza', price: 30, specialTag: 'NEW' },
    { imgSrc: 'images/menu4.jpg', altText: 'Pesto Pizza', name: 'Pesto Pizza', price: 50, salePrice: 30, specialTag: 'SALE' },
  ];

  const [counts, setCounts] = useState(Array(initialItems.length).fill(0)); // Array to manage counts of all menu items
  const [showModal, setShowModal] = useState(false);

  const totalItemCount = counts.reduce((total, count) => total + count, 0); // Calculate total item count

  // Function to handle updating item count
  const updateItemCount = (index, newCount) => {
    const newCounts = [...counts];
    newCounts[index] = newCount;
    setCounts(newCounts);
  };

  return (
    <div>
      {/* Pass totalItemCount and handleModalToggle to Header */}
      <Header itemCount={totalItemCount} onModalToggle={() => setShowModal(true)} />
      <Banner></Banner>


      {/* Pass counts and updateItemCount to Menu */}
      <Menu
        items={initialItems}
        counts={counts}
        onItemCountChange={(index) => updateItemCount(index, counts[index] + 1)}
      />

      {/* Pass counts and updateItemCount to EditPurchaseModal */}
      <EditPurchaseModal
        show={showModal}
        onHide={() => setShowModal(false)}
        items={initialItems}
        counts={counts}
        onItemCountChange={updateItemCount}
      />
      <Footer></Footer>
    </div>
  );
};

export default App;
