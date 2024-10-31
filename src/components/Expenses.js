import ExpenseItem from './ExpenseItem';

export default function Expenses({ expenses }) {
  return expenses.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });
}
