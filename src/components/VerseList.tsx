// src/components/VerseList.tsx
import React from 'react';
import './VerseList.css';


interface Verse {
  id: number;
  title: string;
  text: string;
}

interface VerseListProps {
  verses: Verse[];
}

const VerseList: React.FC<VerseListProps> = ({ verses }) => {
  console.log('Rendering VerseList component'); // Add this line for debugging
  return (
    <>
    <h1>Gospel of John Chapter 1</h1>
    <div className='verse-list'>
    
      {verses.map((verse) => (
        <article key={verse.id} className='verse-item'>
          <h3>{verse.title}</h3>
          <p>{verse.text}</p>
        </article>
      ))}
    </div>
    </>
  );
};

export default VerseList;
