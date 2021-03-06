import React from 'react';

export default function Flag_re(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <path fill="#2a5f9e" d="m14 8v48l24-24z" />
      <path d="m56 14c-5.5-7.3-14.2-12-24-12-6.8 0-13 2.2-18 6l24 24 18-18" fill="#ffce31" />
      <path d="m56 50c3.8-5 6-11.2 6-18 0-6.8-2.2-13-6-18l-18 18 18 18" fill="#ed4c5c" />
      <path d="M38,32L14,56c5,3.8,11.2,6,18,6c9.8,0,18.5-4.7,24-12L38,32z" fill="#699635" />
      <path d="m6 17c-2.5 4.4-4 9.5-4 15s1.5 10.6 4 15v-30" fill="#2a5f9e" />
      <path d="m6 17v30c1.1 2 2.5 3.8 4 5.4v-40.8c-1.5 1.7-2.9 3.5-4 5.4" fill="#fff" />
      <path d="m10 11.6v40.8c1.2 1.3 2.6 2.5 4 3.6v-48c-1.4 1.1-2.8 2.3-4 3.6" fill="#ed4c5c" />
      <circle cx={38} cy={32} r={12} fill="#fff" />
    </svg>
  );
}
