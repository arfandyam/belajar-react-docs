/**
 * In this example, the SearchBar has its own query state that controls the text input. Its parent 
 * FilterableList component displays a List of items, but it doesn’t take the search query into 
 * account.
 * 
 * Use the filterItems(foods, query) function to filter the list according to the search query. 
 * To test your changes, verify that typing “s” into the input filters down the list to “Sushi”, 
 * “Shish kebab”, and “Dim sum”.
 */

import { useState } from 'react';
import PropTypes from 'prop-types';
// import { foods, filterItems } from './data.js';
import {foods, filterItems} from './Data';

export default function FilterableList() {
  const [query, setQuery] = useState('');
  // const
  // const []
  return (
    <>
      <SearchBar
        query = {query}
        onSetQuery = {setQuery}
      />
      <hr />
      <List items={filterItems(foods, query)} />
    </>
  );
}

function SearchBar({query, onSetQuery}) {
  // const [query, setQuery] = useState('');

  function handleChange(e) {
    onSetQuery(e.target.value);
  }

  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={handleChange}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

List.propTypes = {
  items: PropTypes.object,
}

SearchBar.propTypes = {
  query: PropTypes.string,
  onSetQuery: PropTypes.func,
}


