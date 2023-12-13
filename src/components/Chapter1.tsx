import React,{useState} from 'react';

const Chapter1: React.FC = () => {
  const [memorized, setMemorized] = useState(false);

  const handleMemorizeClick = () => {
    setMemorized(!memorized);
  };


  return (
    <div>
      <h1>Christ, the Eternal Word(1)</h1>
      <h2>John 1</h2>
      <p>John 1:1</p>
      <p>In the beginning was the Word,</p>
      <p>and the Word was with God,</p>
      <p>and the Word was God.</p>
      <br/>
      <p>John 1:2</p>
      <p>He was with God in the beginning.</p>
      <br/>
      <button onClick={handleMemorizeClick}>
        {memorized ? 'Recitation completed !' : 'recitation checkmark'}
      </button>
      <h3>Understand by chunk!</h3>
      <h3>덩어리별로 이해하세요!</h3>
      {/* Add code for displaying and memorizing verses */}
    </div>
  );
};

export default Chapter1;