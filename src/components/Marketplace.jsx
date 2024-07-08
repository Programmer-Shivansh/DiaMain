// src/components/Marketplace.jsx

import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { CharacterSoldier } from './CharacterSoldier';

const weaponsList = [
  'GrenadeLauncher',
  'AK',
  'Knife_1',
  'Knife_2',
  'Pistol',
  'Revolver',
  'Revolver_Small',
  'RocketLauncher',
  'ShortCannon',
  'SMG',
  'Shotgun',
  'Shovel',
  'Sniper',
  'Sniper_2',
];

export default function Marketplace() {
  const [selectedWeapon, setSelectedWeapon] = useState(weaponsList[0]);

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ width: '300px', borderRight: '1px solid #ccc', padding: '10px' }}>
        <h3>Marketplace</h3>
        <ul>
          {weaponsList.map((weapon) => (
            <li key={weapon} onClick={() => setSelectedWeapon(weapon)}>
              {weapon}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 1 }}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <CharacterSoldier weapon={selectedWeapon} />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}
