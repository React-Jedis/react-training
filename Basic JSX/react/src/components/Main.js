import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Entry from './Entry';

const Main = () => {
  const [entryList, setEntryList] = useState([]);
  const onAddButton = () =>
    setEntryList(entryList.concat([{ date: moment() }]));
  return (
    <main
      style={{
        flexGrow: '1',
        backgroundColor: '#266d4b',
        display: 'flex',
        flexDirection: 'column',
        padding: '12px 0',
        alignItems: 'center'
      }}
    >
      <AddButton onClick={onAddButton}>Add entry</AddButton>
      <section style={{ width: '50%' }}>
        {entryList.map((entry, index) => (
          <Entry
            key={index}
            color={index % 2 ? '#a9221c' : 'black'}
            date={entry.date}
            onDelete={() => {
              console.log(index);
              setEntryList(
                entryList.filter((item, itemIndex) => itemIndex !== index)
              );
            }}
          />
        ))}
      </section>
    </main>
  );
};

const AddButton = styled.button`
  font-size: 16px;
  border: 1px solid #f3c159;
  background-color: black;
  color: #f3c159;
  padding: 8px 10px;
  margin: 12px 0;
  cursor: pointer;
  :hover {
    background-color: #f3c159;
    color: black;
    border-color: black;
  }
`;

export default Main;
