// #almost-component
// https://hackernoon.com/10-react-mini-patterns-c1da92f068c5

import React from 'react';

const SearchSuggestions = (props) => {
  // renderSearchSuggestion() behaves as a pseduo SearchSuggestion component
  // keep it self contained and it should be easy to extract later if needed
  const renderSearchSuggestion = listItem => (
    <li key={listItem.id}>{listItem.name} {listItem.id}</li>
  );
  
  return (
    <ul>
      {props.listItems.map(renderSearchSuggestion)}
    </ul>
  );
}

export default SearchSuggestions;