import React, {useState} from 'react';
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

const DUMMY__EXPENSE=[
                 { id :'e1',
                   date :new Date(2021,3,22),
                   title :'School-Fess',
                   amount : 3030
},
       {           id :'e2',
                   date :new Date(2021,3,24),
                   title :'Book',
                   amount : 4000
},
      {            id :'e3',
                   date :new Date(2021,5,2),
                   title :'NoteBook',
                   amount : 3040
},
      {            id :'e4',
                   date :new Date(2021,6,28),
                   title :'ShopKeeper',
                   amount : 3456
},                
       {           id :'e5',
                   date :new Date(2022, 6, 20),
                   title :'House-Rent',
                   amount : 3468
}

];

const App=() =>{
      const [expenses,setExpenses]=useState(DUMMY__EXPENSE);

  const addExpenseHandler= (expense) =>{
        const updatedExpense= [expense, ...expenses]
      setExpenses(updatedExpense)
     
  };
                  return (
                     <div>
                        
                          
                     <NewExpense onAddExpense={addExpenseHandler}/>
                         
                        <Expenses item={expenses}>

                        </Expenses>

                            </div>
                  );
                  
}
export default App;