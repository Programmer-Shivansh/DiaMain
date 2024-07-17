import React from 'react';

const PublicKeyDisplay = ({ publicKey }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '16px',
        right: '16px',
        backgroundColor: '#000000', // Neon black background
        color: '#00FF00', // Neon green text
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        border: '1px solid #00FF00',
        boxShadow: '0 0 10px #00FF00',
      }}
    >
      Public Key: {publicKey.slice(0, 4)}...
    </div>
  );
};

export default PublicKeyDisplay;
