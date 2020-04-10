import React from 'react';





const Transactions = props => {
  
console.log(props,"transactions")
console.log(props.person.recipient)
    return (
        <>
        <h2>Chain</h2>
        <p>{props.person[2]}</p>
        <p>{props.coin.index}</p>
        <p>{props.coin.hash}</p>
        <p>{props.coin.previous_hash}</p>
        <p>{props.coin.proof}</p>
        <p>{props.coin.timestamp}</p>
        <div></div>>

        </>
    )
}



export default Transactions;