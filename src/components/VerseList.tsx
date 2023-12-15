
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
    <h1>The Gospel of John Chapter 1</h1>
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





// VerseList.tsx


// import React from 'react';

// interface VerseListProps {
//   verses: Array<{
//     id: number;
//     title: string;
//     text: string;
//   }>;
// }
// const VerseList: React.FC<VerseListProps> = ({ verses }) => {
//   console.log('Rendering VerseList component');

//   return (
//     <div>
//       {verses.map((verse, index) => (
//         <div key={index}>
//           <h2>{verse.title}</h2>
//           {/* Byt ut \n med <br /> */}
//           <p dangerouslySetInnerHTML={{ __html: verse.text.replace(/\n/g, '<br />') }} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VerseList;

