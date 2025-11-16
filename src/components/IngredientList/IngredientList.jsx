const IngredientList = (props) => {
  const { ingredients = [], onAdd } = props;

  return (
    <ul>
      {ingredients.map((ingredient, i) => (
        <li
          key={ingredient.name + i}
          style={{ backgroundColor: ingredient.color }}
        >
          <span>{ingredient.name}</span>
          <button onClick={() => onAdd(ingredient)}>Add</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
