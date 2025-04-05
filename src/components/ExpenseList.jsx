export default function ExpenseList({ expenses, onDelete }) {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  const categoryEmojis = {
    Food: "🍔",
    Cloths: "👕",
    Vehicles: "🚗",
    Travels: "✈️",
    Medicine: "💊",
    Others: "💼"
  };

  return (
    <div className="expense-list">
      <h2>Total Spent: ₹{total.toFixed(2)}</h2>
      <table className="expense-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
            <th>❌</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => {
            const formattedDate = exp.date
              ? new Date(exp.date).toDateString()
              : "No date";

            const emoji = categoryEmojis[exp.category] || "💰";

            return (
              <tr key={exp.id}>
                <td>{exp.title}</td>
                <td>₹{exp.amount}</td>
                <td>{formattedDate}</td>
                <td>{emoji} {exp.category}</td>
                <td>
                  <button className="delete-btn" onClick={() => onDelete(exp.id)}>❌</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
