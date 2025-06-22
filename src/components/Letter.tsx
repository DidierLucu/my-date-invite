import React, { useState } from 'react';

const Letter: React.FC = () => {
  const [response, setResponse] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = async () => {
    await fetch('https://formspree.io/f/mzbldkpk', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ response, reason }),
    });
    alert('Response submitted!');
  };

  return (
    <div className="letter">
      <p>Hey there 💖,</p>
      <p>I want to invite you on a magical date...</p>
      <div>
        <button onClick={() => setResponse('Yes')}>Yes</button>
        <button onClick={() => setResponse('No')}>No</button>
      </div>
      {response === 'No' && (
        <textarea
          placeholder="Can you tell me why?"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
      )}
      {response && (
        <button onClick={handleSubmit}>Send Response</button>
      )}
    </div>
  );
};

export default Letter;
