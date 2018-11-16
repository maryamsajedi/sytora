import React from 'react';

export default function Yin_yang(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <path d="m53.2 10.8c11.7 11.7 11.7 30.7 0 42.4-5.9 5.9-15.4 5.9-21.2 0s-5.9-15.3 0-21.2c5.9-5.9 5.9-15.4 0-21.2s-15.4-5.9-21.2 0c11.7-11.7 30.7-11.7 42.4 0" fill="#f5f5f5" />
      <g fill="#3e4347">
        <path d="m10.8 53.2c-11.7-11.7-11.7-30.7 0-42.4 5.9-5.9 15.4-5.9 21.2 0 5.9 5.9 5.9 15.4 0 21.2s-5.9 15.4 0 21.2 15.4 5.9 21.2 0c-11.7 11.7-30.7 11.7-42.4 0" />
        <circle cx="42.6" cy="42.6" r="5.6" />
      </g>
      <circle cx="21.4" cy="21.4" r="5.6" fill="#f5f5f5" />
    </svg>
  );
}