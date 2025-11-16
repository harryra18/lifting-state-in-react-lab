const BurgerStack = (props) => {
  const { ingredients = [], onRemove } = props;

  return (
    <ul>
      {ingredients.map((ingredient, i) => (
        <li
          key={`${ingredient.name}-${i}`}
          style={{ backgroundColor: ingredient.color }}
        >
          <span>{ingredient.name}</span>
          <button onClick={() => onRemove(i)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
