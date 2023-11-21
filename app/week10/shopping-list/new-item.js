"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    const [ItemCreated, setItemCreated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            name,
            quantity,
            category,
        };

        onAddItem(newItem); // Call the onAddItem prop with the new item object

        setItemCreated(true);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <main>
            <div className = "min-h-page">
                {/* //{ItemCreated && (
                    <div className="absolute top-0 mt-8 text-2xl text-yellow-400">
                        Item Created
                    </div>
                )}//  */}
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-2xl text-gray-800 font-bold mb-8">
                        Create New Item
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <label className="block mb-4">
                            <span className="text-gray-800">Item Name:</span>
                            <input
                                required
                                onChange={handleNameChange}
                                value={name}
                                className="mt-1 p-1 block w-full rounded-md text-white bg-gray-700 focus:bg-black"
                            />
                        </label>
                        <label className="block mb-4">
                            <span className="text-gray-800">Quantity:</span>
                            <input
                                type="number"
                                required
                                min="0"
                                max="9999"
                                onChange={handleQuantityChange}
                                value={quantity}
                                className="mt-1 p-1 block w-full rounded-md text-white bg-gray-700 focus.bg-black"
                            />
                        </label>
                        <label className="block mb-4">
                            <span className="text-gray-800">Category:</span>
                            <select
                                required
                                onChange={handleCategoryChange}
                                value={category}
                                className="mt-1 p-1 block w-full rounded-md text-white bg-gray-700 focus:bg-black"
                            >
                                <option>Produce</option>
                                <option>Dairy</option>
                                <option>Bakery</option>
                                <option>Meat</option>
                                <option>Frozen Foods</option>
                                <option>Canned Goods</option>
                                <option>Dry Goods</option>
                                <option>Beverages</option>
                                <option>Snacks</option>
                                <option>Household</option>
                                <option>Other</option>
                            </select>
                        </label>
                        <button className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded-lg text-yellow-900 font-bold">
                            Create Item
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
