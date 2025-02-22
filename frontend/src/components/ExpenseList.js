import React, { useEffect, useState } from "react";
import axios from "axios";
import ExpenseForm from "./ExpenseForm";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null); // Spesa in modifica

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = () => {
    axios.get("http://127.0.0.1:8000/api/expenses/")
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((error) => console.error("Errore nel caricamento delle spese:", error));
  };

  const handleExpenseAdded = (newExpense) => {
    setExpenses([newExpense, ...expenses]);
  };

  const handleExpenseUpdated = (updatedExpense) => {
    setExpenses(expenses.map((expense) => 
      expense.id === updatedExpense.id ? updatedExpense : expense
    ));
    setEditingExpense(null); // Esci dalla modalità modifica
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/expenses/${id}/`);
      setExpenses(expenses.filter((expense) => expense.id !== id));
    } catch (error) {
      console.error("Errore nell'eliminazione della spesa:", error);
    }
  };

  return (
    <div>
      <h2>Lista delle Spese</h2>
      <ExpenseForm 
        onExpenseAdded={handleExpenseAdded} 
        editingExpense={editingExpense} 
        onExpenseUpdated={handleExpenseUpdated} 
      />
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.name} - {expense.amount}€ ({expense.category}) - {expense.date}
            <button onClick={() => setEditingExpense(expense)}>✏️ Modifica</button>
            <button onClick={() => handleDelete(expense.id)}>🗑️ Elimina</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
