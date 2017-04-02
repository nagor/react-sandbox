import React from 'react';

export function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // This key is required. Should be a unique string attribute for repeated items
        // In ths particular case key should be unique in boundaries of ul for each li
        // This is required by React to be able to rerender lis' properly when list gets ordered
        // or some new items being passed or removed
        // "Keys help React identify which items have changed, are added, or are removed.
        // Keys should be given to the elements inside the array to give the elements a stable identity.
        // The best way to pick a key is to use a string that uniquely identifies a list item among its siblings."
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}
