export default function Item({ name, quantity, category, onSelect }) {
  const handleClick = () => {
    if (onSelect) {
      onSelect({ name, quantity, category }); // Trigger the onSelect function with the item details
    }
  };

  return (
    <div
      className="p-5 m-5 shadow-md rounded-lg mb-4 bg-slate-700 max-w-sm"
      onClick={handleClick} // Make the entire list item clickable
      style={{ cursor: 'pointer' }}
    >
      <p>{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Location: {category}</p>
    </div>
  );
}
