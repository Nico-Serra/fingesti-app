import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetchExpenses();
    }, []);

    const fetchExpenses = async () => {
        try {
            const response = await axios.get('/api/expenses/');
            setExpenses(response.data);
        } catch (error) {
            console.error('Error fetching expenses:', error);
        }
    };

    return (
        <div>
            <h2>Lista delle Spese</h2>
            <ul>
                {expenses.map(expense => (
                    <li key={expense.id}>
                        {expense.name}: €{expense.amount} - {expense.category} in data {expense.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
