import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import { useState } from 'react';

export const ExpenseItem = (props) => {
  const { title, amount, date } = props;
  const [titles, setTitle] = useState(title);

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(titles);
  };

  return (
    <div className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{titles}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button type='button' onClick={clickHandler}>
        expose
      </button>
    </div>
  );
};
