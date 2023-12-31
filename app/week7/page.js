"use client"; // Add the "use client" directive at the top of the file.

import { useState } from "react"; // Add the "useState" hook to the import statement.
import ItemList from "./item-list"; // Import the ItemList component.
import NewItem from "./new-item"; // Import the NewItem component.
import MealIdeas from "./meal-ideas"; // Import the MealIdeas component.
import ItemsData from "./item.json"; // Import the items.json file as ItemData.

export default function Page() {
    const [items, setItems] = useState(ItemsData); // Add the "useState" hook to the component.
    const [selectedItemName, setSelectedItemName] = useState(""); // New state for selected item name

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (selectedItem) => {
        let itemName = selectedItem.name.split(',')[0];
        itemName = itemName.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/, ''); // Removes emojis
        const cleanedItemName = itemName.trim();
        setSelectedItemName(cleanedItemName);
      };
    
    return (
        <div style={{ display: "flex" }}>
            <div>
                <main className="p-2">
                    <h2 className="text-4xl font-bold mb-4">Shopping list</h2>
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} /> {/* Passing onItemSelect */}
                </main>
            </div>
            <div>
                <MealIdeas ingredient={selectedItemName} /> {/* Passing selectedItemName */}
            </div>
        </div>
    );
}

