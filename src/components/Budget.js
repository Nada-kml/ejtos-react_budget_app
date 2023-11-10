import React, { useContext, useState } from "react";
import { AppContext } from '../context/AppContext';

const Budget = () =>{
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses =expenses.reduce((total, item) => {
        return (total+= item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if (event.target.value< totalExpenses ){
            return alert("You cannot reduce the budget value lower than " +currency +totalExpenses);
            
        };
        setNewBudget(event.target.value);
        
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }
    return(
        <div className='alert alert-secondary'>
            <span >Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;