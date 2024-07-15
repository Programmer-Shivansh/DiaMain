import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Weapons } from './Weapons';

const weaponModels = {
  Pistol: { path: '/models/Glock17.fbx', scale: [0.3, 0.3, 0.3], price: 300 },
  Pistol2: { path: '/models/Phenoix.fbx', scale: [0.2, 0.2, 0.3], price: 350 },
  AK: { path: '/models/AK-103.fbx', scale: [0.05, 0.05, 0.05], price: 1200 },
  knife: { path: '/models/knife.fbx', scale: [0.1, 0.1, 0.1], price: 100 },
  grinder: { path: '/models/grinder.fbx', scale: [0.2, 0.2, 0.2], price: 200 },
  scar: { path: '/models/Scar.fbx', scale: [0.01, 0.01, 0.01], price: 1500 },
  Phenoix: { path: '/models/New.fbx', scale: [0.15, 0.15, 0.15], price: 800 },
  Snipper: { path: '/models/snipper.fbx', scale: [0.05, 0.05, 0.05], price: 1800 },
  // Add other models as needed
};

const weaponsList = Object.keys(weaponModels).map(key => ({ name: key, ...weaponModels[key] }));

const colors = [
  '#FF6F61', // Living Coral
  '#6B5B95', // Royal Purple
  '#88B04B', // Greenery
  '#F7CAC9', // Rose Quartz
  '#92A8D1', // Serenity
  '#955251', // Marsala
  '#009B77', // Emerald
  '#DD4124', // Flame
  '#D65076', // Radiant Orchid
  '#45B8AC', // Aqua Sky
];

export default function Marketplace() {
  const [selectedWeapon, setSelectedWeapon] = useState(weaponsList[0].name);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [lockStatus, setLockStatus] = useState(
    weaponsList.reduce((acc, weapon) => {
      acc[weapon.name] = true;
      return acc;
    }, {})
  );

  const handleWeaponSelect = (weapon) => {
    setSelectedWeapon(weapon.name);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleBuyClick = (weaponName) => {
    console.log(`Price of ${weaponName}: $${weaponModels[weaponName].price}`);
    setLockStatus((prevState) => ({
      ...prevState,
      [weaponName]: !prevState[weaponName],
    }));
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h3 style={styles.heading}>Marketplace</h3>
        <ul style={styles.list}>
          {weaponsList.map((weapon) => (
            <li
              key={weapon.name}
              onClick={() => handleWeaponSelect(weapon)}
              style={styles.listItem}
            >
              {weapon.name} - ${weapon.price}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleBuyClick(weapon.name);
                }}
                style={styles.buyButton}
              >
                {lockStatus[weapon.name] ? '🔒 Buy' : '🔓 Unlock'}
              </button>
            </li>
          ))}
        </ul>
        <h3 style={styles.heading}>Colors</h3>
        <ul style={styles.colorList}>
          {colors.map((color) => (
            <li
              key={color}
              onClick={() => handleColorSelect(color)}
              style={{ ...styles.colorItem, backgroundColor: color }}
            />
          ))}
        </ul>
      </div>
      <div style={styles.canvasContainer}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Weapons weapon={selectedWeapon} color={selectedColor} />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  sidebar: {
    width: '250px',
    borderRight: '1px solid #ccc',
    padding: '20px',
    backgroundColor: '#f8f8f8',
    overflowY: 'auto', // Enable scrolling if content exceeds sidebar height
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    padding: '10px',
    marginBottom: '10px',
    cursor: 'pointer',
    backgroundColor: '#fff',
    borderRadius: '4px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buyButton: {
    padding: '5px 10px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  colorList: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyleType: 'none',
    padding: 0,
  },
  colorItem: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    margin: '5px',
    cursor: 'pointer',
    transition: 'transform 0.3s',
  },
  canvasContainer: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Ensure the canvas doesn't overflow its container
  },
};
