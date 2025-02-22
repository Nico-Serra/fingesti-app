import React, { useState, useEffect } from "react";
import axios from "axios";

const ExpenseForm = ({ onExpenseAdded, editingExpense, onExpenseUpdated }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Cibo");

  useEffect(() => {
    if (editingExpense) {
      setName(editingExpense.name);
      setAmount(editingExpense.amount);
      setCategory(editingExpense.category);
    } else {
      setName("");
      setAmount("");
      setCategory("Cibo");
    }
  }, [editingExpense]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !amount) {
      alert("Inserisci tutti i campi!");
      return;
    }

    const expenseData = { name, amount: parseFloat(amount), category };

    try {
      if (editingExpense) {
        // MODIFICA SPESA
        const response = await axios.put(`http://127.0.0.1:8000/api/expenses/${editingExpense.id}/`, expenseData);
        onExpenseUpdated(response.data);
      } else {
        // AGGIUNGI NUOVA SPESA
        const response = await axios.post("http://127.0.0.1:8000/api/expenses/", expenseData);
        onExpenseAdded(response.data);
      }

      // Reset form
      setName("");
      setAmount("");
      setCategory("Cibo");
    } catch (error) {
      console.error("Errore nel salvataggio della spesa:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingExpense ? "Modifica Spesa" : "Aggiungi una Spesa"}</h2>
      <div>
        <label>Nome:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Importo (€):</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div>
        <label>Categoria:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Cibo">Cibo</option>
          <option value="Trasporti">Trasporti</option>
          <option value="Intrattenimento">Intrattenimento</option>
          <option value="Bollette">Bollette</option>
          <option value="Altro">Altro</option>
        </select>
      </div>
      <button type="submit">{editingExpense ? "Salva Modifica" : "Aggiungi Spesa"}</button>
    </form>
  );
};

export default ExpenseForm;
