import React, { useState } from 'react';

function MaxOfTwo() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    const num1 = Number(input1.trim());
    const num2 = Number(input2.trim());

    if (isNaN(num1) || isNaN(num2)) {
      setResult('invalid');
    } else {
      setResult(Math.max(num1, num2));
    }
  };

  const styles = {
    container: { textAlign: 'center', marginTop: '40px' },
    input: {
      padding: '10px',
      width: '140px',
      fontSize: '16px',
      margin: '10px 5px',
      borderRadius: '5px',
      border: '1px solid #ccc'
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    },
    result: { marginTop: '20px', fontSize: '18px', color: '#333' }
  };

  return (
    <div style={styles.container}>
      <h2>Tìm số lớn nhất trong 2 số</h2>
      <input
        type="text"
        placeholder="Số thứ nhất"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Số thứ hai"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        style={styles.input}
      />
      <br />
      <button onClick={handleSubmit} style={styles.button}>
        Tìm số lớn nhất
      </button>

      {result !== null && (
        <div style={styles.result}>
          {result === 'invalid' ? 'Vui lòng nhập số hợp lệ' : `Kết quả: ${result}`}
        </div>
      )}
    </div>
  );
}

export default MaxOfTwo;
