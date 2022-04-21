import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props){
  
          return (
                   <div className="expense__item">
                   <ExpenseDate date={props.date}/>
                   <h1 className='school'>{props.title}</h1>  
                   <div className='amount__container'>${props.amount}</div> 
                         
                    </div>        
                  );
}
export default ExpenseItem;