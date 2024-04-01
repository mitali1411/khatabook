import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Dashboard from './Components/Dashboard'
import Form from './Components/Form'
import ListGroup from './Components/ListGroup'

const App = () => {

  const [transactions, setTransactions] = useState([]);
  const [theme, setTheme] = useState(false);

  const changeTheme =() => {
    if(theme){
      setTheme(false)
    }else{
      setTheme(true)
    }
  };


  const [edit, setEdit] = useState({
    transaction : {},
    isEdit : false,
  });

  // Save Transaction
  const saveTransaction = (text, amount) => {
    const newTransaction = {
      id : crypto.randomUUID(),
      text,
      amount : parseInt(amount),
    };
    // console.log(newTransaction)
    setTransactions([newTransaction, ...transactions ])
  };



  // Delete Transaction
  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((item) => {
        if(item.id !==id)
        return true;
      })
    )
  };


  // Edit Transaction
  const editTransaction = (oldTransaction)=>{
    console.log(oldTransaction)
    setEdit({
      transaction : oldTransaction,
      isEdit : true,
    });
  };


  // Update
  const updateTransaction = (updatedTransaction) => {
    setTransactions(transactions.map(item => item.id === updatedTransaction.id ? updatedTransaction : item)),
    setEdit({
      transaction : {},
      isEdit : false
  });
  };

  return (
    <>
    <Navbar theme={theme} changeTheme={changeTheme}/>
    <div style={{minHeight : "100vh"}} className={theme ? "container-fluid p-5" : "container-fluid bg-dark p-5"}>
      <Dashboard transactions={transactions} theme={theme}/>
      <Form saveTransaction= {saveTransaction} edit={edit} updateTransaction={updateTransaction} theme={theme} changeTheme={changeTheme}/>
      <ListGroup transactions={transactions} deleteTransaction={deleteTransaction} editTransaction={editTransaction} theme={theme}/>
    </div>
    
    </>
  )
};

export default App