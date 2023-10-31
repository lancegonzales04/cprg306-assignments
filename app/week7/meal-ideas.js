import React, { useState, useEffect } from 'react';

function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState(null); // Initialize meals state as null

  const fetchMealIdeas = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);

      if (response.ok) {
        const data = await response.json();
        setMeals(data.meals);
      } else {
        console.error('Failed to fetch meal ideas');
      }
    } catch (error) {
      console.error('Error fetching meal ideas:', error);
    }
  };

useEffect(() => {
    fetchMealIdeas();
}, [ingredient]);

return (
    <div>
        <h2 className="text-4xl font-bold mb-4">Meal Ideas for :  {ingredient}</h2>
        {meals ? ( // Check if meals is not null
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>
                        {meal.strMeal}
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                    </li>
                ))}
            </ul>
        ) : (
            <p>No meal ideas found for {ingredient}</p>
        )}
    </div>
);
}

export default MealIdeas;
