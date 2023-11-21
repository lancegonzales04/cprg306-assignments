"use client"; // Add the "use client" directive at the top of the file.

import { useState } from "react"; // Add the "useState" hook to the import statement.
import ItemList from "./item-list"; // Import the ItemList component.
import NewItem from "./new-item"; // Import the NewItem component.
import MealIdeas from "./meal-ideas"; // Import the MealIdeas component.
import { useEffect } from "react";
import { getItems, addItem } from './_services/shopping-list-service';

export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    const loadItems = async () => {
        const userItems = await getItems(/* Replace with actual user ID */);
        setItems(userItems);
    };

    useEffect(() => {
        loadItems();
    }, []); // Empty dependency array to run only on mount

    const handleAddItem = async (newItem) => {
        const newItemId = await addItem("actualUserID", newItem); // Replace "actualUserID" with the actual user ID
        if (newItemId) {
            const updatedItems = await getItems("actualUserID"); // Replace "actualUserID" with the actual user ID
            setItems(updatedItems);
        }
    };

    const handleItemSelect = (selectedItem) => {
        let itemName = selectedItem.name.split(',')[0];
        itemName = itemName.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/, '');
        const cleanedItemName = itemName.trim();
        setSelectedItemName(cleanedItemName);
    };
    
    
      return (
        <div style={{ display: "flex" }}>
            <div>
                <main className="p-2">
                    <h2 className="text-4xl font-bold mb-4">Shopping list</h2>
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </main>
            </div>
            <div>
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </div>
    );
}

