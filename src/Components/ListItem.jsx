import React from 'react'

const ListItem = ({transaction, deleteTransaction, editTransaction}) => {

  return (
    <>
      <li className={transaction.amount > 0 ? "list-group-item bg-success text-light display-6 my-1" : "list-group-item bg-danger text-light display-6 my-1"}>{transaction.text} : {transaction.amount}
      <span className='float-end'>
        <button className='btn btn-sm mx-1 btn-outline-light' onClick={()=> editTransaction(transaction)}>Edit</button>
        <button className='btn btn-sm mx-1 btn-outline-light'onClick={()=> deleteTransaction(transaction.id)}>Delete</button>
      </span>
      </li>
    </>
  )
}

export default ListItem