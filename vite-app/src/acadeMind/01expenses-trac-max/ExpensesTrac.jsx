import Card from './UI/Card';
import { ExpenseItem } from './components/ExpenseItem';
import { expenses } from './data/expenses';
import './expenses.css';

export const ExpensesTrac = () => {
  return (
    <div>
      <h1>expenses tracker</h1>
      <Card className='expenses'>
        {expenses.map((expense) => {
          return <ExpenseItem {...expense} key={expense.id} />;
        })}
      </Card>
    </div>
  );
};
