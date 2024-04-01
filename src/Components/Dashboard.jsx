import React from 'react'

const Dashboard = ({transactions, theme}) => {

    const balance = transactions.reduce((p,c)=>p+c.amount, 0);
    const income = transactions.filter((item)=>item.amount>0).reduce((p,c)=> p+c.amount, 0);
    const expense = transactions.filter((item)=>item.amount<0).reduce((p,c)=> p+c.amount, 0);



  return (
        <div className="row g-2">
            <div className="col-sm-12 col-md-4">
                <div className={theme ? "card bg-success text-light p-3" : "card border-3 border-success bg-dark text-light p-3"}>
                    <h2>Income :</h2>
                    <h1>{income}</h1>
                </div>
            </div>
            <div className="col-sm-12 col-md-4">
                <div className={theme ? "card bg-danger text-light p-3" : "card border-3 border-danger bg-dark text-light p-3"}>
                    <h2>Expense :</h2>
                    <h1>{expense}</h1>
                </div>
            </div>
            <div className="col-sm-12 col-md-4">
                <div className={theme ? "card bg-warning text-light p-3" : "card border-3 border-warning bg-dark text-light p-3"}>
                    <h2>Balance :</h2>
                    <h1>{balance}</h1>
                </div>
            </div>
            
        </div>
  )
}

export default Dashboard