import React from 'react';

// Keys only make sense in the context of the surrounding array.
// For example, if you extract a ListItem component, you should
// keep the key on the < ListItem /> elements in the array rather 
// than on the root < li > element in the ListItem itself.

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

export function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
