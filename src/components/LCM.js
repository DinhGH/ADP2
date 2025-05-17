import React, { useState } from 'react';

function LCM() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');

  const gcd = (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  const handleSubmit = () => {
    const num1 = Math.abs(Number(input1));
    const num2 = Math.abs(Number(input2));
    if (isNaN(num1) || isNaN(num2) || num1 === 0 || num2 === 0) {
      setResult('Vui lòng nhập số nguyên dương hợp lệ');
      return;
    }
    const lcm = (num1 * num2) / gcd(num1, num2);
    setResult(lcm);
  };

  const styles = {
    container: { textAlign: 'center' },
    input: {
      padding: '10px',
      width: '140px',
      fontSize: '16px',
      margin: '10px 5px',
      borderRadius: 5,
      border: '1px solid #ccc',
      outline: 'none',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    result: {
      marginTop: 20,
      fontWeight: 'bold',
      fontSize: '18px',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <h2>🔢 Tính Bội Số Chung Nhỏ Nhất (LCM)</h2>
      <input
        type="number"
        placeholder="Nhập số thứ nhất"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        style={styles.input}
        min="1"
      />
      <input
        type="number"
        placeholder="Nhập số thứ hai"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        style={styles.input}
        min="1"
      />
      <button onClick={handleSubmit} style={styles.button}>
        Tính BSCNN
      </button>
      {result && <div style={styles.result}>{result}</div>}
    </div>
  );
}

export default LCM;
