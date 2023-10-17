"use client";

import React, { useState } from 'react'; 
import Item from './item'; 
import items from './item.json'; 

function ItemList() {
  const [sortBy, setSortBy] = useState('name'); // Initialize sortBy state variable with 'name'.

  const sortItems = (itemsToSort, sortingProperty) => {
    return itemsToSort.slice().sort((a, b) => {
      if (a[sortingProperty] < b[sortingProperty]) return -1; // If a is less than b, return -1. comments for in the future :)
      if (a[sortingProperty] > b[sortingProperty]) return 1; // If a is greater than b, return 1.
      return 0;
    });
  };

  const sortedItems = sortItems(items, sortBy);

  return (
    <div>
      <div className="sorting-buttons">
        Sort by:
        <button
          onClick={() => setSortBy('name')}
          style={{ backgroundColor: sortBy === 'name' ? 'orange' : 'coral' , marginRight: '20px', 
          marginLeft: '35px', // Add space between the buttons
          padding: '12px 45px', // Adjust the padding to make the button bigger
          borderRadius: '10px' // Add rounded edges
        
        }}
        >
           Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          style={{ backgroundColor: sortBy === 'category' ? 'orange' : 'coral' , 
          marginRight: '40px', // Add space between the buttons
          padding: '12px 42px', // Adjust the padding to make the button bigger
          borderRadius: '10px' // Add rounded edges
        }}
        >
           Category
        </button>
      </div>

    {sortedItems.map((item, index) => (
        <Item
            key={index} 
            name={item.name}
            quantity={item.quantity}
            category={item.category}
        />

        
    ))}
    </div>
  );
}

export default ItemList;
