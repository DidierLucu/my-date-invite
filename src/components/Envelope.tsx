import React, { useState } from 'react';
import '../styles.css';
import Letter from './Letter';

const Envelope: React.FC = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div className={`envelope ${opened ? 'opened' : ''}`} onClick={() => setOpened(true)}>
      {!opened && <div className="flap">📩 Click to open</div>}
      {opened && <Letter />}
    </div>
  );
};

export default Envelope;
