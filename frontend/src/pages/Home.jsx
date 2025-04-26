import React from 'react';
import ExpenseList from '../components/ExpenseList';

const Home = () => {
    const expenses = [
        { id: 1, description: 'Groceries', amount: 50 },
        { id: 2, description: 'Utilities', amount: 100 },
        { id: 3, description: 'Rent', amount: 1200 },
    ];

    return (
        <div>
            <h1>Expense Tracker</h1>
            <ExpenseList expenses={expenses} />
        </div>
    );
};

export default Home;