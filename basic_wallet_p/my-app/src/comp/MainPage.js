import React , {useState, useEffect} from 'react';
import axios from 'axios'
import Transactions from './Transactions'


const MainPage = (props) => {
    
    const [coins, setCoins] = useState([]);
    // const [amount, setAmount] = useState([])
    // const [things, setThings] = useState([])
    const [cash, setCash] = useState(0)
    let things = []
    useEffect(() => {
      axios
            .get("http://localhost:5000/chain")
            .then(res => {
           
                setCoins(res.data.chain)
                // setAmount(res.data.chain.transactions)
                let sum = 0
                res.data.chain.forEach(item => {
                    item.transactions.forEach(ele => {
                        things.push(ele)
                        sum = sum +1


                    })
                })
                setCash(sum)
                cash = things.length
            
                console.log(res.data.chain, "test")
                console.log(things,"ofoea")
            })
            .catch(err => {
                console.log('error', err)
            })
    }, [])
console.log(things.length, "a thing")

const getMoney = () => { 
    // things.forEach(item => {
    //     if (item.recipient === "David"){
    //         money += item.amount
    //         console.log(money,"moneys")
            
    //     }
    //     else{
    //         console.log("broke")
    //     }
    // })
    return (
    <h2>Moneys {cash}</h2>
    )
}
    return (
        <div>
            {/* <h2>Welcome {data}</h2> */}
            {getMoney()}
            {coins.map(item => (
                
                <Transactions key = {item.index} coin = {item} person = {things} />
            ))}
        </div>
    )
}





export default MainPage