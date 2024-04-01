import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({transactions, deleteTransaction, editTransaction, theme}) => {

  if(transactions.length===0){
    return(
      <h1 className='text-secondary text-center'>No Transactions...!!</h1>
    )
  }

  return (
    <div className={theme? "card p-3" : "card p-3 bg-dark border-3 border-secondary"}>
      <h2 className='text-secondary'>All Transactions here..</h2>
      <ul className='list-group'>
        {
        transactions.map(transactions => <ListItem key={transactions.id} transaction={transactions} deleteTransaction={deleteTransaction} editTransaction={editTransaction} theme={theme}/> )
        }
      </ul>
    </div>
  )
}

export default ListGroup;