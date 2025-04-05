import React, { useState } from 'react';

function ExpenseForm({ onAdd }) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount || !category) return;
    const newExpense = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
      category,
    };
    onAdd(newExpense);
    setText('');
    setAmount('');
    setCategory('');
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter expense detail"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Clothing">Clothing</option>
        <option value="Vehicle">Vehicle</option>
        <option value="Travel">Travel</option>
        <option value="Medicine">Medicine</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
