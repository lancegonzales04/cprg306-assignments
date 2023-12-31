"use client";

import React, { useState } from 'react';
import Item from './item';

function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name'); // Initialize sortBy state variable with 'name'.

  const sortItems = (itemsToSort, sortingProperty) => {
    return itemsToSort.slice().sort((a, b) => {
      if (a[sortingProperty] < b[sortingProperty]) return -1;
      if (a[sortingProperty] > b[sortingProperty]) return 1;
      return 0;
    });
  };

  const sortedItems = sortItems([...items], sortBy); // Create a copy of items for sorting.

  const handleItemClick = (item) => {
    if (onItemSelect) {
      onItemSelect(item); // Trigger the onItemSelect function with the respective item.
    }
  };

  return (
    <div>
      <div className="sorting-buttons">
        Sort by:
        <button
          onClick={() => setSortBy('name')}
          style={{
            backgroundColor: sortBy === 'name' ? 'orange' : 'coral',
            marginRight: '20px',
            marginLeft: '35px',
            padding: '12px 45px',
            borderRadius: '10px'
          }}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          style={{
            backgroundColor: sortBy === 'category' ? 'orange' : 'coral',
            marginRight: '40px',
            padding: '12px 42px',
            borderRadius: '10px'
          }}
        >
          Category
        </button>
      </div>

      {sortedItems.map((item, index) => (
        <div key={index} onClick={() => handleItemClick(item)}>
          {/* Make each Item component clickable */}
          <Item
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        </div>
      ))}
    </div>
  );
}

export default ItemList;
