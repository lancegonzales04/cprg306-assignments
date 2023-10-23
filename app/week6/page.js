"use client"; //Add the "use client" directive at the top of the file.

import { useState } from "react"; //Add the "useState" hook to the import statement.
import ItemList from "./item-list"; //Import the ItemList component.
import NewItem from "./new-item"; //Import the NewItem component.
import ItemsData from "./item.json"; //Import the items.json file as ItemData.
export default function page(){
   
   
    const [items, setItems] = useState(ItemsData); //Add the "useState" hook to the component.
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }
    
    // const handleAddItem = (newItem) => { //Add the handleAddItem function.
    //     const updatedItem = { //Create a new item object.
    //         ...newItem,
    //         id: items.length + 1,
    //     };

    return(
        <main className="p-2">
            <h2 className="text-4x1 font-bold mb-4">Shopping list</h2>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
};

