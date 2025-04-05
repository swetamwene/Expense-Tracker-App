import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#a47148', '#3a5a40', '#c44536', '#99c1b9', '#9a8c98'];

function ExpenseChart({ expenses }) {
  const groupedData = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const pieData = Object.entries(groupedData).map(([name, value]) => ({ name, value }));

  return (
    <div className="chart-section">
      <h2>Spending Breakdown</h2>
      <PieChart width={350} height={300}>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="value"
          label
        >
          {pieData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default ExpenseChart;
