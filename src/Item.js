const Item = ({ item, handleItemRemove, handleItemTogglePack }) => (
  <li>
    <input
      type='checkbox'
      value={item.packed}
      onChange={() => handleItemTogglePack(item.id)}
    />
    <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
      {item.quantity} {item.description}
    </span>
    <button
      onClick={() => handleItemRemove(item.id)}
      style={{ color: 'red', fontSize: '25px', fontWeight: 'bold' }}
    >
      X
    </button>
  </li>
);
export default Item;
