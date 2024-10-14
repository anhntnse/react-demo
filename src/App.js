import React, { useState, useEffect } from 'react';
import Header from '../src/Components/Header';
import Menu from '../src/Components/Menu';
import Banner from '../src/Components/Banner';
import Footer from '../src/Components/Footer';
import EditPurchaseModal from '../src/Components/EditPurchaseModal';
import Login from './Components/LoginModal';
import {AuthProvider } from './Components/AuthContext';
import { ToastContainer} from 'react-toastify';

const App = () => {
  const [items, setItems] = useState([]);
  const [counts, setCounts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // Fetch item data from the API
  const getItemData = async () => {
    const res = await fetch("https://api-demo-4gqb.onrender.com/products");
    const data = await res.json();
    console.log(data);

    const transformedItems = data.data.map((item) => ({
      key: item.id,
      imgSrc: item.image,
      name: item.title,
      price: item.price,
      salePrice: item.salePrice,
      count: item.count || 0,
      onBuy: false,
    }));

    setItems(transformedItems);

    // Update counts array to match the length of items
    setCounts(Array(transformedItems.length).fill(0));
  };

  useEffect(() => {
    getItemData();
  }, []);

  // Function to handle updating item count
  const updateItemCount = (index, newCount) => {
    const newCounts = [...counts];
    newCounts[index] = newCount;
    setCounts(newCounts);
  };

  const totalItemCount = counts.reduce((total, count) => total + count, 0); // Calculate total item count

  return (
    <AuthProvider>
      <Header itemCount={totalItemCount} onModalToggle={() => setShowModal(true)} />
      <Login show={showLogin} handleClose={() => setShowLogin(false)} />
      <Banner />

      {/* Pass counts and updateItemCount to Menu */}
      <Menu
        items={items}
        counts={counts}
        onItemCountChange={(index) => updateItemCount(index, counts[index] + 1)}
      />

      {/* Pass counts and updateItemCount to EditPurchaseModal */}
      <EditPurchaseModal
        show={showModal}
        onHide={() => setShowModal(false)}
        items={items}
        counts={counts}
        onItemCountChange={updateItemCount}
      />

      <Footer />
      <ToastContainer containerId={"notification"}/>
    </AuthProvider>
  );
};

export default App;
