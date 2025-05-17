import React, { useState } from 'react';

function LinearEquation() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    const numA = Number(a.trim());
    const numB = Number(b.trim());

    if (isNaN(numA) || isNaN(numB)) {
      setResult('Vui lòng nhập số hợp lệ');
      return;
    }

    if (numA === 0) {
      setResult(numB === 0 ? 'Phương trình vô số nghiệm' : 'Phương trình vô nghiệm');
    } else {
      const x = -numB / numA;
      setResult(`Nghiệm x = ${x}`);
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
    result: {
      marginTop: '15px',
      fontSize: '18px',
      color: '#333'
    }
  };

  return (
    <div style={styles.container}>
      <h2>Giải phương trình bậc nhất ax + b = 0</h2>
      <input
        type="text"
        placeholder="Nhập a"
        value={a}
        onChange={(e) => setA(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Nhập b"
        value={b}
        onChange={(e) => setB(e.target.value)}
        style={styles.input}
      />
      <br />
      <button onClick={handleSubmit} style={styles.button}>
        Giải phương trình
      </button>

      {result !== null && (
        <div style={styles.result}>{result}</div>
      )}
    </div>
  );
}


