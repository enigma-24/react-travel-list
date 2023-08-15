import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((currItems) => [...currItems, item]);
  };

  const handleRemoveItem = (itemId) => {
    setItems((currItems) => currItems.filter((item) => item.id !== itemId));
  };

  const handleToggleItemPack = (itemId) => {
    setItems((currItems) =>
      currItems.map((item) => {
        if (item.id === itemId) return { ...item, packed: !item.packed };
        return item;
      })
    );
  };

  const handleClearList = () => {
    const confirmAction = window.confirm(
      'Are you sure you want to delete all the items in the list?'
    );

    if (confirmAction) setItems([]);
  };

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onRemoveItem={handleRemoveItem}
        items={items}
        onToggleItemPack={handleToggleItemPack}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
