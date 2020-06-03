import React from 'react';

const Entry = ({ color, date, onDelete }) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    border: '1px solid black',
    padding: '12px',
    color
  };

  return (
    <div style={containerStyle}>
      <span>{date.format('LLLL')}</span>
      <span
        onClick={onDelete}
        style={{
          borderRadius: '50%',
          border: '1px solid black',
          padding: '2px 6px',
          textAlign: 'center',
          cursor: 'pointer'
        }}
      >
        X
      </span>
    </div>
  );
};

export default Entry;
