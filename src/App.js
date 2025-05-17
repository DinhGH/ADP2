
import SortModel from './SortModel';

import React, { useState } from 'react';


import DescOrderModal from './components/DescOrderModal';
import GcdModal from './components/GcdModal';
import AscOrderModal from './components/AscOrderModal';
import PalindromeModal from './components/PalindromeModal';
import MaxNumberModal from './components/MaxNumberModal';
import LinearEquationModal from './components/LinearEquationModal';
import LcmModal from './components/LcmModal';
import ReverseNumberModal from './components/ReverseNumberModal';

function App() {
  const [selectedModal, setSelectedModal] = useState('');

  const renderModal = () => {
    switch (selectedModal) {
      case 'desc': return <DescOrderModal />;
      case 'gcd': return <GcdModal />;
      case 'asc': return <AscOrderModal />;
      case 'palindrome': return <PalindromeModal />;
      case 'max': return <MaxNumberModal />;
      case 'linear': return <LinearEquationModal />;
      case 'lcm': return <LcmModal />;
      case 'reverse': return <ReverseNumberModal />;
      default: return null;
    }
  };

  const styles = {
    container: {
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#f0f4f8',
      minHeight: '100vh',
      padding: '20px',
    },
    title: {
      textAlign: 'center',
      color: '#333',
    },
    menu: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: 0,
      marginTop: '20px',
      marginBottom: '30px',
    },
    menuItem: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '10px 15px',
      borderRadius: '5px',
      margin: '5px',
      cursor: 'pointer',
      transition: '0.3s',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Number Tool Menu</h1>
      <ul style={styles.menu}>
        <li style={styles.menuItem} onClick={() => setSelectedModal('desc')}>2 số giảm dần</li>
        <li style={styles.menuItem} onClick={() => setSelectedModal('gcd')}>Tìm UCLN 2 số</li>
        <li style={styles.menuItem} onClick={() => setSelectedModal('asc')}>2 số tăng dần</li>
        <li style={styles.menuItem} onClick={() => setSelectedModal('palindrome')}>Kiểm tra số đối xứng</li>
        <li style={styles.menuItem} onClick={() => setSelectedModal('max')}>Số lớn nhất trong 2 số</li>
        <li style={styles.menuItem} onClick={() => setSelectedModal('linear')}>Giải PT bậc nhất</li>
        <li style={styles.menuItem} onClick={() => setSelectedModal('lcm')}>Tìm BSCNN 2 số</li>
        <li style={styles.menuItem} onClick={() => setSelectedModal('reverse')}>Đảo ngược 2 số</li>
      </ul>
      {renderModal()}
    </div>
  );
}

export default App;
