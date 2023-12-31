import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';

import Card from './Card.js';

function ExpenseItem({date, title, amount}){
 
    return (
<Card className="expense-item">
  <ExpenseDate date ={date}></ExpenseDate>
    <div className="expense-item__description">
    <h2>{title}</h2>
    <div className="expense-item__price">${amount}</div>
    </div> 
</Card>
    );
}
export default ExpenseItem;