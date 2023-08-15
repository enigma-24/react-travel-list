import { useState } from 'react';

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (description === '') return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);

    setQuantity(1);
    setDescription('');
  };

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for you trip?</h3>
      <select
        onChange={(event) => setQuantity(Number(event.target.value))}
        value={quantity}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
