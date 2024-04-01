import React, {useEffect, useState }from 'react'

const Form = ({saveTransaction, edit, updateTransaction, theme}) => {


  // State for Inputs : text & amount
  const [text, setText] = useState("");
  const [amount, setAmount] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    if(edit.isEdit){
      updateTransaction({
        id : edit.transaction.id,
        text : text,
        amount : parseInt(amount)
      });
    }else{
    saveTransaction(text, amount)
    }

    setText('');
    setAmount('');
  };


  useEffect(()=>{
    setText(edit.transaction.text);
    setAmount(edit.transaction.amount);
  },[edit])
 


  return (
    <div className={theme ? "card p-4 my-3" : "card bg-dark border-3 border-secondary p-4 my-3"}>
        <h2 className={theme ? 'text-center text-secondary h3 my-2' : 'text-center text-light h3 my-2'}>Enter your transaction details</h2>
        <form className="my-3" onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" placeholder='Enter Text' className={theme ? 'form-control my-2' : 'form-control my-2 bg-secondary text-light border-0'} onChange={(e)=>setText(e.target.value)} value={text}/>
            <input type="number" placeholder='Enter Amount' className={theme ? 'form-control my-2' : 'form-control my-2 bg-secondary text-light border-0'} onChange={(e)=>setAmount(e.target.value)} value={amount}/>
            <button className={theme ? 'btn btn-success float-end mt-3' : 'btn btn-outline-success mt-3 float-end'}>Save</button>
        </form>
    </div>
  )
}

export default Form